import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-slate-900">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo Oficial */}
            <Image
              src="/logo.jpeg"
              alt="INSPECOL Logo"
              width={180}
              height={50}
              className="object-contain"
              priority
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-slate-700 hover:text-[#f36b21] transition font-semibold"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-slate-700 hover:text-[#f36b21] transition font-semibold"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-slate-700 hover:text-[#f36b21] transition font-semibold"
            >
              Nosotros
            </a>
            <a
              href="#normativa"
              className="text-slate-700 hover:text-[#f36b21] transition font-semibold"
            >
              Normativa
            </a>
            <a
              href="#contacto"
              className="text-slate-700 hover:text-[#f36b21] transition font-semibold"
            >
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="bg-[#1e4a7a] hover:bg-[#153456] text-white px-5 py-2 rounded-lg font-bold transition flex items-center gap-2 shadow-md"
          >
            <span className="icon-[mdi--phone]"></span>
            <span className="hidden sm:inline">Cotizar</span>
          </a>
        </nav>
      </header>

      {/* Hero Section con imagen de fondo optimizada */}
      <section
        id="inicio"
        className="relative h-[600px] flex items-center overflow-hidden"
      >
        <Image
          src="/hero.jpeg"
          alt="Casco de inspección Inspecol"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e4a7a]/90 to-transparent z-10"></div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-[#f36b21] px-4 py-1.5 rounded-full mb-6 border border-white/20 shadow-lg">
              <span className="icon-[mdi--shield-star] text-white mr-2"></span>
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Brindando la mejor experiencia
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">
              Inspección y <br />
              <span className="text-[#f36b21]">Certificación de Gas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl leading-relaxed">
              Expertos en cumplimiento normativo para instalaciones de gas
              natural y GLP. Seguridad total con respaldo técnico y legal en
              cada inspección.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="bg-[#f36b21] hover:bg-[#d95a1a] text-white px-8 py-4 rounded-lg font-bold text-center transition flex items-center justify-center gap-2 shadow-xl scale-105"
              >
                Solicitar Inspección{" "}
                <span className="icon-[mdi--arrow-right]"></span>
              </a>
              <a
                href="#normativa"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-center transition"
              >
                Ver Normativa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Usando el Azul Navy para los iconos */}
      <section className="py-10 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="icon-[mdi--award] text-4xl text-[#1e4a7a] mb-3"></span>
              <span className="text-slate-800 font-bold block">
                Resolución 40150
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-tighter">
                Certificación Oficial
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="icon-[mdi--account-group] text-4xl text-[#1e4a7a] mb-3"></span>
              <span className="text-slate-800 font-bold block">
                Técnicos Expertos
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-tighter">
                Personal Calificado
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="icon-[mdi--file-check] text-4xl text-[#1e4a7a] mb-3"></span>
              <span className="text-slate-800 font-bold block">
                Informes Técnicos
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-tighter">
                Validez Legal
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="icon-[mdi--clock-fast] text-4xl text-[#1e4a7a] mb-3"></span>
              <span className="text-slate-800 font-bold block">
                Respuesta Ágil
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-tighter">
                Atención en 48h
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <span className="text-[#f36b21] font-bold tracking-[0.2em] uppercase text-sm">
                Portafolio
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1e4a7a] mt-2">
                Nuestros Servicios de Inspección
              </h2>
            </div>
            <p className="text-slate-600 md:max-w-xs text-sm border-l-4 border-[#f36b21] pl-4">
              Garantizamos la seguridad de sus instalaciones bajo estrictos
              protocolos técnicos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 - Residencial */}
            <div className="relative group overflow-hidden rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:border-[#f36b21]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#1e4a7a] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="icon-[mdi--home-city] text-3xl text-white"></span>
              </div>
              <h3 className="text-xl font-bold text-[#1e4a7a] mb-4">
                Residencial
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Casas, apartamentos y unidades residenciales. Certificamos la
                seguridad de su hogar y familia.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="icon-[mdi--check-bold] text-[#f36b21]"></span>{" "}
                  Redes Internas
                </li>
                <li className="flex items-center gap-2">
                  <span className="icon-[mdi--check-bold] text-[#f36b21]"></span>{" "}
                  Medidores de Gas
                </li>
              </ul>
            </div>

            {/* Servicio 2 - Comercial */}
            <div className="relative group overflow-hidden rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:border-[#f36b21]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#f36b21] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="icon-[mdi--store] text-3xl text-white"></span>
              </div>
              <h3 className="text-xl font-bold text-[#1e4a7a] mb-4">
                Comercial
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Restaurantes y hoteles. Aseguramos el cumplimiento de normativas
                para su negocio.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="icon-[mdi--check-bold] text-[#1e4a7a]"></span>{" "}
                  Hornos y Estufas
                </li>
                <li className="flex items-center gap-2">
                  <span className="icon-[mdi--check-bold] text-[#1e4a7a]"></span>{" "}
                  Ventilación Mecánica
                </li>
              </ul>
            </div>

            {/* Servicio 3 - Industrial */}
            <div className="relative group overflow-hidden rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:border-[#f36b21]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#1e4a7a] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="icon-[mdi--factory] text-3xl text-white"></span>
              </div>
              <h3 className="text-xl font-bold text-[#1e4a7a] mb-4">
                Industrial
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Grandes consumidores y plantas de producción. Inspecciones de
                alta presión.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="icon-[mdi--check-bold] text-[#f36b21]"></span>{" "}
                  Calderas e Intercambiadores
                </li>
                <li className="flex items-center gap-2">
                  <span className="icon-[mdi--check-bold] text-[#f36b21]"></span>{" "}
                  Auditoría RETIE
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Usando los colores del logo en el formulario */}
      <section id="contacto" className="py-20 bg-[#1e4a7a]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-black mb-6 italic underline decoration-[#f36b21]">
                Contáctenos Hoy
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                No arriesgue su seguridad ni la legalidad de su servicio.
                Nuestro equipo en Florencia, Caquetá está listo para
                atenderle.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f36b21] rounded-full flex items-center justify-center shadow-lg">
                    <span className="icon-[mdi--whatsapp] text-2xl"></span>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-blue-200">
                      WhatsApp 24/7
                    </p>
                    <p className="font-bold text-xl">+57 311 875 1867</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <span className="icon-[mdi--email-outline] text-2xl"></span>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-blue-200">
                      Correo Electrónico
                    </p>
                    <p className="font-bold">inspecciones@inspecol.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-[#f36b21]">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
                />
                <input
                  type="tel"
                  placeholder="Número de celular"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
                />
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none">
                  <option>Tipo de Inspección</option>
                  <option>Residencial</option>
                  <option>Comercial / Industrial</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="¿En qué podemos ayudarle?"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f36b21] outline-none"
                ></textarea>
                <button className="w-full bg-[#f36b21] hover:bg-[#d95a1a] text-white font-black py-4 rounded-xl transition-all shadow-lg uppercase tracking-widest">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer corporativo */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.jpeg"
              alt="INSPECOL Footer Logo"
              width={200}
              height={60}
              className=" opacity-70"
            />
          </div>
          <p className="max-w-md mx-auto text-sm leading-relaxed mb-8">
            INSPECOL CERTIFICACIONES S.A.S. <br />
            Nit: 902042182-4 <br />
            Domicilio principal: Florencia, Caquetá, Colombia.
          </p>
          <div className="border-t border-slate-800 pt-8 text-xs uppercase tracking-widest font-bold">
            <p>
              &copy; 2026 Todos los derechos reservados | Resolución 40150 de
              2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
