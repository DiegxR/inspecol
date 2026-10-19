const apiKey = process.env.TEXTMEBOT_API_KEY;
const recipient = process.env.TEXTMEBOT_RECIPIENT;
const endpoint = process.env.TEXTMEBOT_ENDPOINT ?? "http://api.textmebot.com/send.php";

type SendResult =
  | { skipped: true }
  | { sent: true }
  | { error: string };

export async function sendWhatsAppNotification(text: string): Promise<SendResult> {
  if (!apiKey || !recipient) {
    console.warn(
      "[WhatsApp] Faltan variables de entorno (TEXTMEBOT_API_KEY, TEXTMEBOT_RECIPIENT). Notificación omitida."
    );
    return { skipped: true };
  }

  const params = new URLSearchParams({
    recipient,
    apikey: apiKey,
    text,
  });

  try {
    const response = await fetch(`${endpoint}?${params.toString()}`, {
      method: "GET",
    });

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
