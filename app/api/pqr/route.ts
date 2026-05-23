import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
const internalEmail = process.env.PQR_INTERNAL_EMAIL;
const replyTo = process.env.PQR_REPLY_TO ?? smtpFrom;

function buildRadicado() {
  const now = new Date();
  const year = now.getFullYear();
  const consecutive = String(now.getTime()).slice(-8);
  return `PQR-${year}-${consecutive}`;
}

function createTransporter() {
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom || !internalEmail) {
    throw new Error("Faltan variables de entorno SMTP obligatorias para el envío de correos.");
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name || "").trim();
    const document = String(body?.document || "").trim();
    const email = String(body?.email || "").trim();
    const pqrType = String(body?.pqrType || "").trim();
    const description = String(body?.description || "").trim();
    const acceptedData = body?.acceptedData === true;

    if (!name || !document || !email || !pqrType || !description || !acceptedData) {
      return NextResponse.json(
        {
          error:
            "Debe completar todos los campos obligatorios y aceptar el tratamiento de datos para radicar la solicitud.",
        },
        { status: 400 }
      );
    }

    const radicado = buildRadicado();
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("es-CO", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(now);

    const transporter = createTransporter();
    await transporter.verify();

    const clientMail = transporter.sendMail({
      from: smtpFrom,
      to: email,
      replyTo,
      subject: `Constancia de recepción PQR ${radicado}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height:1.6;">
          <h2 style="color:#1e4a7a;">Constancia de radicado</h2>
          <p>Hola <strong>${name}</strong>,</p>
          <p>Hemos recibido su solicitud ${pqrType.toUpperCase()} y su radicado es:</p>
          <p style="font-size:1.25rem; font-weight:700; color:#f36b21;">${radicado}</p>
          <p>Fecha y hora de radicado: ${formattedDate}</p>
          <p>Su solicitud ya se encuentra registrada. Con base en la normatividad vigente, INSPECOL S.A.S. cuenta con 15 días hábiles para dar respuesta.</p>
          <hr style="margin:24px 0; border:none; border-top:1px solid #e2e8f0;" />
          <p style="font-size:0.95rem; color:#475569;">Si no recibe este correo, revise su carpeta de spam.</p>
          <p style="font-size:0.95rem; color:#475569;">Atentamente,<br/>INSPECOL CERTIFICACIONES S.A.S.</p>
        </div>
      `,
      text: `Hola ${name},\n\nHemos recibido su solicitud ${pqrType}. Su radicado es ${radicado}.\nFecha y hora de radicado: ${formattedDate}.\n\nINSPECOL cuenta con 15 días hábiles para dar respuesta.\n\nGracias,\nINSPECOL CERTIFICACIONES S.A.S.`,
    });

    const internalMail = transporter.sendMail({
      from: smtpFrom,
      to: internalEmail,
      replyTo: email,
      subject: `Nueva PQR recibida - ${radicado}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height:1.6;">
          <h2 style="color:#1e4a7a;">Nueva PQR recibida</h2>
          <p><strong>Radicado:</strong> ${radicado}</p>
          <p><strong>Tipo:</strong> ${pqrType}</p>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Documento:</strong> ${document}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Fecha y hora:</strong> ${formattedDate}</p>
          <p><strong>Descripción:</strong></p>
          <p style="white-space: pre-wrap;">${description}</p>
          <p style="margin-top:1rem;"><strong>Aceptó tratamiento de datos:</strong> Sí</p>
        </div>
      `,
      text: `Nueva PQR recibida\n\nRadicado: ${radicado}\nTipo: ${pqrType}\nNombre: ${name}\nDocumento: ${document}\nCorreo: ${email}\nFecha y hora: ${formattedDate}\n\nDescripción:\n${description}\n\nAceptó tratamiento de datos: Sí`,
    });

    await Promise.all([clientMail, internalMail]);

    return NextResponse.json({ success: true, radicado });
  } catch (error) {
    console.error("[PQR API]", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}
