import Image from "next/image";
import PqrForm from "./components/PqrForm";

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
            {/* <a
              href="#nosotros"
              className="text-slate-700 hover:text-[#f36b21] transition font-semibold"
            >
              Nosotros
            </a>
            */}
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
            href="https://wa.me/573118751867?text=Hola%20Inspecol%2C%20quiero%20una%20cotizaci%C3%B3n%20para%20una%20inspecci%C3%B3n%20de%20gas."
            target="_blank"
            rel="noopener noreferrer"
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
       {/* Normativa Section */}
      <section id="normativa" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#f36b21] font-bold tracking-[0.2em] uppercase text-sm">
              Normativas y Certificaciones
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1e4a7a] mt-2">
              Inspecol Certificaciones: Seguridad y Garantía en Gas Natural
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              En Inspecol Certificaciones, nuestra prioridad es la tranquilidad y seguridad de su hogar o negocio en Florencia, Caquetá. Somos expertos en la inspección, mantenimiento y certificación de instalaciones de gas natural, garantizando que cada sistema opere bajo los más altos estándares técnicos y legales vigentes en Colombia.
            </p>

            <h3 className="text-2xl font-bold text-[#1e4a7a] mb-4">
              Nuestro Compromiso con la Seguridad
            </h3>
            <p className="text-slate-700 leading-relaxed mb-8">
              Entendemos que el gas natural es un servicio esencial que exige rigor. Por ello, en cada una de nuestras intervenciones, aplicamos un protocolo de evaluación técnica diseñado para detectar y corregir cualquier riesgo, protegiendo así su patrimonio y la integridad de su familia.
            </p>

            <h3 className="text-2xl font-bold text-[#1e4a7a] mb-4">
              Marco Normativo y Calidad
            </h3>
            <p className="text-slate-700 mb-6">
              Operamos bajo el estricto cumplimiento de las directrices de los entes reguladores nacionales. Nuestra metodología de trabajo se basa en:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-[mdi--gavel] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]">Regulación CREG</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Cumplimiento total de la Resolución 067 de 1995 y Resolución 059 de 2012, referentes al Código de Distribución de Gas y los procesos de Revisión Periódica Obligatoria (RPO).
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-[mdi--office-building] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]">Ministerio de Minas y Energía</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ejecución técnica alineada con la Resolución 41385 de 2017, asegurando el manejo correcto de defectos y condiciones de seguridad en instalaciones internas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-[mdi--checkbox-marked-circle] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]">Estándares Técnicos (NTC)</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Aplicamos estrictamente las normas NTC 2505 (diseño, construcción y pruebas de hermeticidad) y NTC 3853, garantizando que cada componente de su sistema cumpla con la calidad requerida.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-[mdi--certificate] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]">Acreditación</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nuestros procesos de inspección siguen los lineamientos de imparcialidad y precisión bajo la norma ISO/IEC 17020.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e4a7a] mb-4">
              ¿Por qué elegir a Inspecol Certificaciones?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">Personal Altamente Calificado</p>
                  <p className="text-slate-600 text-sm">Nuestro equipo técnico cuenta con certificación de competencias laborales (SENA) y está en constante actualización normativa.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">Tecnología y Precisión</p>
                  <p className="text-slate-600 text-sm">Utilizamos equipos de medición calibrados para realizar diagnósticos exactos y oportunos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">Transparencia Total</p>
                  <p className="text-slate-600 text-sm">Entregamos certificados de conformidad con plena validez legal, reportando su estado ante la empresa distribuidora de gas correspondiente.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">Presencia Local</p>
                  <p className="text-slate-600 text-sm">Conocemos las necesidades de nuestra región. Estamos comprometidos con el desarrollo seguro de Florencia, Caquetá.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1e4a7a] to-[#153456] rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesita una revisión o certificación?
              </h3>
              <p className="text-blue-100 mb-6">
                La seguridad no puede esperar. Si requiere programar una inspección periódica, tiene dudas sobre su instalación o desea una revisión preventiva, estamos listos para atenderle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/573118751867?text=Hola%20Inspecol%2C%20quiero%20solicitar%20una%20inspecci%C3%B3n%20de%20gas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f36b21] hover:bg-[#d95a1a] text-white px-8 py-4 rounded-lg font-bold transition flex items-center justify-center gap-2"
                >
                  <span className="icon-[mdi--whatsapp] text-xl"></span>
                  Solicitar Inspección vía WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold transition"
                >
                  Consultar Servicios
                </a>
              </div>
              <p className="text-blue-200 mt-6 text-sm italic">
                Inspecol Certificaciones: Expertos en seguridad, comprometidos con el Caquetá.
              </p>
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
              <PqrForm />
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
