"use client";

import { useState } from "react";

type FormValues = {
  name: string;
  document: string;
  email: string;
  pqrType: string;
  description: string;
  acceptedData: boolean;
};

const initialValues: FormValues = {
  name: "",
  document: "",
  email: "",
  pqrType: "",
  description: "",
  acceptedData: false,
};

export default function PqrForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [loading, setLoading] = useState(false);
  const [radicado, setRadicado] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (
      !values.name.trim() ||
      !values.document.trim() ||
      !values.email.trim() ||
      !values.pqrType.trim() ||
      !values.description.trim() ||
      !values.acceptedData
    ) {
      setError(
        "Por favor complete todos los campos obligatorios y acepte el tratamiento de datos."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/pqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result?.error || "Error al procesar la solicitud. Intente de nuevo más tarde.");
        setLoading(false);
        return;
      }

      setRadicado(result.radicado);
      setValues(initialValues);
    } catch (e) {
      setError(
        "No se pudo establecer conexión con el servidor. Por favor intente de nuevo en unos minutos."
      );
    } finally {
      setLoading(false);
    }
  };

  if (radicado) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-2xl border-t-8 border-[#f36b21]">
        <h3 className="text-3xl font-bold text-[#1e4a7a] mb-4">
          ¡Formulario enviado con éxito!
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Su solicitud fue radicada correctamente. Revise su correo electrónico y la carpeta de spam.
        </p>
        <div className="rounded-2xl bg-[#ecfdf5] border border-[#d1fae5] p-5">
          <p className="text-sm text-slate-500 mb-1">Número de radicado</p>
          <p className="text-2xl font-extrabold text-[#15803d]">{radicado}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-[#f36b21]">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Nombre completo *</span>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              type="text"
              placeholder="Nombre completo"
              className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Documento *</span>
            <input
              name="document"
              value={values.document}
              onChange={handleChange}
              type="text"
              placeholder="C.C. / NIT"
              className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Correo electrónico *</span>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="correo@dominio.com"
            className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Tipo de PQR *</span>
          <select
            name="pqrType"
            value={values.pqrType}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
          >
            <option value="">Seleccione una opción</option>
            <option value="Petición">Petición</option>
            <option value="Queja">Queja</option>
            <option value="Reclamo">Reclamo</option>
            <option value="Sugerencia">Sugerencia</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Descripción de la solicitud *</span>
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            rows={5}
            placeholder="Explique brevemente su solicitud o queja"
            className="mt-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
          />
        </label>

        <label className="flex items-start gap-3">
          <input
            name="acceptedData"
            checked={values.acceptedData}
            onChange={handleChange}
            type="checkbox"
            className="mt-1 h-5 w-5 rounded border-slate-300 text-[#f36b21] focus:ring-[#f36b21]"
          />
          <span className="text-sm text-slate-700 leading-relaxed">
            Acepto el tratamiento de mis datos personales y los términos y condiciones.{" "}
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="text-[#1e4a7a] font-semibold underline hover:text-[#f36b21]"
            >
              Ver políticas
            </button>
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#f36b21] disabled:opacity-60 hover:bg-[#d95a1a] text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-widest"
        >
          {loading ? "Procesando..." : "Radicar Solicitud"}
        </button>

        {error ? (
          <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-red-700">
            {error}
          </div>
        ) : null}
      </form>

      {/* Modal de Términos y Condiciones */}
      {showModal && (
        <div className="fixed inset-0 h-screen bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-[#1e4a7a]">
              <h2 className="text-2xl font-bold text-white">
                Política de Tratamiento de Datos y Términos y Condiciones
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-white hover:text-[#f36b21] text-4xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <section className="mb-8">
                <h3 className="text-xl font-bold text-[#1e4a7a] mb-4">
                  1. Política de Tratamiento de Datos Personales
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">1.1 Identificación del Responsable</h4>
                    <p>Inspecol Certificaciones, con sede en Florencia, Caquetá, es la empresa responsable del tratamiento de los datos personales obtenidos a través de nuestro sitio web, formularios de contacto y servicios prestados.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">1.2 Autorización</h4>
                    <p>Al proporcionarnos sus datos personales (nombre, cédula, dirección, teléfono, correo electrónico), usted autoriza de manera libre, previa, expresa e informada a Inspecol Certificaciones para recolectar, almacenar, usar, circular y suprimir dicha información con el fin de gestionar sus servicios de inspección, atender sus Peticiones, Quejas o Reclamos (PQR) y cumplir con nuestras obligaciones legales ante los entes reguladores del sector gas en Colombia.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">1.3 Finalidad del Tratamiento</h4>
                    <p>Sus datos serán tratados exclusivamente para:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Prestar correctamente los servicios de inspección y certificación técnica.</li>
                      <li>Emitir facturas y reportes de conformidad.</li>
                      <li>Gestionar, responder y realizar seguimiento a sus solicitudes, peticiones, quejas o reclamos.</li>
                      <li>Cumplir con los reportes exigidos por las entidades de vigilancia y control.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">1.4 Derechos del Titular</h4>
                    <p>Usted, como titular de los datos, tiene derecho a:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Conocer, actualizar y rectificar sus datos personales.</li>
                      <li>Solicitar prueba de la autorización otorgada.</li>
                      <li>Ser informado sobre el uso que se ha dado a sus datos.</li>
                      <li>Revocar la autorización y solicitar la supresión de sus datos, siempre que no exista una obligación legal o contractual que requiera su conservación.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">1.5 Medidas de Seguridad</h4>
                    <p>Inspecol Certificaciones protege su información mediante medidas técnicas y administrativas diseñadas para prevenir el acceso no autorizado, la pérdida o la manipulación de sus datos personales.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">1.6 Canal de Atención al Titular</h4>
                    <p>Para ejercer sus derechos, puede contactarnos en:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Correo electrónico: inspecciones@inspecol.com</li>
                      <li>WhatsApp: +57 311 875 1867</li>
                      <li>Dirección: Florencia, Caquetá</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1e4a7a] mb-4">
                  2. Términos y Condiciones de PQR
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">2.1 Objeto</h4>
                    <p>Los presentes términos regulan el uso del formulario y el procedimiento para la presentación de Peticiones, Quejas o Reclamos (PQR) ante Inspecol Certificaciones.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">2.2 Presentación de Solicitudes</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Veracidad:</strong> El usuario garantiza que la información suministrada al presentar una PQR es veraz, completa y exacta.</li>
                      <li><strong>Identificación:</strong> Para procesar cualquier solicitud, es requisito indispensable que el usuario suministre sus datos de contacto completos.</li>
                      <li><strong>Canales:</strong> Las PQR solo serán tramitadas a través de nuestro formulario oficial en la web, correo electrónico corporativo o línea de atención al cliente autorizada.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">2.3 Tiempos de Respuesta</h4>
                    <p>Inspecol Certificaciones se compromete a dar respuesta a las solicitudes recibidas dentro de los plazos establecidos por la normativa colombiana vigente, contados a partir del día hábil siguiente a la radicación de la PQR.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">2.4 Uso de Información y Evidencias</h4>
                    <p>El usuario autoriza a Inspecol Certificaciones a utilizar los registros técnicos, fotográficos o documentales derivados de la inspección o reparación para fines de análisis, aclaración de la PQR y control de calidad, asegurando en todo momento la confidencialidad de la información privada del inmueble.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">2.5 Restricciones</h4>
                    <p>No se dará trámite a solicitudes que:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Utilicen lenguaje ofensivo, grosero o amenazante.</li>
                      <li>Carezcan de identificación del titular.</li>
                      <li>Sean de carácter anónimo o tengan fines ajenos a los servicios prestados por la empresa.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e4a7a] mb-2">2.6 Aceptación</h4>
                    <p>Al enviar cualquier solicitud a través de nuestros canales, el usuario declara haber leído, comprendido y aceptado la presente Política de Tratamiento de Datos y los Términos y Condiciones aquí expuestos.</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="px-6 py-2 border-t  border-slate-200 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#f36b21] hover:bg-[#d95a1a] text-white font-bold px-8 py-2 rounded-xl transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
