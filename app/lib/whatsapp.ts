const apiToken = process.env.WHATSAPP_API_TOKEN;
const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
const notifyTo = process.env.WHATSAPP_NOTIFY_TO;
const apiVersion = process.env.WHATSAPP_API_VERSION ?? "v21.0";
const templateName = process.env.WHATSAPP_TEMPLATE_NAME;
const templateLang = process.env.WHATSAPP_TEMPLATE_LANG ?? "es";

type SendResult =
  | { skipped: true }
  | { sent: true }
  | { error: string };

export async function sendWhatsAppNotification(
  text: string,
  templateParams: string[] = []
): Promise<SendResult> {
  if (!apiToken || !phoneNumberId || !notifyTo) {
    console.warn(
      "[WhatsApp] Faltan variables de entorno (WHATSAPP_API_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_NOTIFY_TO). Notificación omitida."
    );
    return { skipped: true };
  }

  const payload = templateName
    ? {
        messaging_product: "whatsapp",
        to: notifyTo,
        type: "template",
        template: {
          name: templateName,
          language: { code: templateLang },
          components: [
            {
              type: "body",
              parameters: templateParams.map((value) => ({
                type: "text",
                text: value,
              })),
            },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        to: notifyTo,
        type: "text",
        text: { body: text },
      };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const detail = await response.text();
      console.error("[WhatsApp] Error al enviar la notificación:", response.status, detail);
      return { error: detail };
    }

    return { sent: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido al enviar WhatsApp.";
    console.error("[WhatsApp] Excepción al enviar la notificación:", message);
    return { error: message };
  }
}
