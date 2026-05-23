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
          Acepto el tratamiento de mis datos personales, la política de privacidad y la recepción de notificaciones.
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
  );
}
