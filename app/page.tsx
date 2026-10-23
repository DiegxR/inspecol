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
              href="#politicas"
              className="text-slate-700 hover:text-[#f36b21] transition font-semibold"
            >
              Políticas
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
          <div className="flex flex-wrap justify-between gap-8 max-w-2xl mx-auto">
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
                Atención Rápida
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
              Seguridad y Garantía de Gases Combustibles
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              En Inspecol Certificaciones, nuestra prioridad es la tranquilidad
              y seguridad de su hogar o negocio en Florencia, Caquetá. Somos
              expertos en la inspección y revisión de instalaciones de gas
              natural, garantizando que cada sistema opere bajo los más altos
              estándares técnicos y legales vigentes en Colombia.
            </p>

            <h3 className="text-2xl font-bold text-[#1e4a7a] mb-4">
              Nuestro Compromiso con la Seguridad
            </h3>
            <p className="text-slate-700 leading-relaxed mb-8">
              Entendemos que el gas natural es un servicio esencial que exige
              rigor. Por ello, en cada una de nuestras intervenciones, aplicamos
              un protocolo de evaluación técnica diseñado para detectar y
              corregir cualquier riesgo, protegiendo así su patrimonio y la
              integridad de su familia.
            </p>

            <h3 className="text-2xl font-bold text-[#1e4a7a] mb-4">
              Marco Normativo y Calidad
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="icon-[mdi--gavel] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]"></h4>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="icon-[mdi--office-building] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]">
                    
                  </h4>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="icon-[mdi--checkbox-marked-circle] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]">
                    
                  </h4>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="icon-[mdi--certificate] text-2xl text-[#f36b21]"></span>
                  <h4 className="font-bold text-[#1e4a7a]"></h4>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e4a7a] mb-4">
              ¿Por qué elegir a Inspecol Certificaciones?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">
                    Personal Altamente Calificado
                  </p>
                  <p className="text-slate-600 text-sm">
                    Nuestro equipo técnico cuenta con certificación de
                    competencias laborales y está en constante actualización
                    normativa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">
                    Tecnología y Precisión
                  </p>
                  <p className="text-slate-600 text-sm">
                    Utilizamos equipos de medición calibrados para realizar
                    inspecciones exactas y oportunos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">
                    Transparencia Total
                  </p>
                  <p className="text-slate-600 text-sm">
                    Entregamos certificados de conformidad con plena validez
                    legal, reportando su estado ante la empresa distribuidora de
                    gas correspondiente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="icon-[mdi--check-circle] text-[#f36b21] text-xl mt-0.5"></span>
                <div>
                  <p className="font-bold text-slate-800">Presencia Local</p>
                  <p className="text-slate-600 text-sm">
                    Conocemos las necesidades de nuestra región. Estamos
                    comprometidos con el desarrollo seguro de Florencia,
                    Caquetá.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1e4a7a] to-[#153456] rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Su instalación requiere una inspección?
              </h3>
              <p className="text-blue-100 mb-6">
                La seguridad no puede esperar. Si requiere programar una
                inspección periódica, tiene dudas sobre su instalación o desea
                una revisión preventiva, estamos listos para atenderle.
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
                Inspecol Certificaciones: Expertos en seguridad, comprometidos
                con el Caquetá.
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  Revisiones Previas y Reformas
                </li>
                <li className="flex items-center gap-2">
                 
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
              <p className="text-slate-600 text-sm leading-relaxed">
                Restaurantes, hoteles y locales. Aseguramos el cumplimiento de
                normativas para su negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section id="politicas" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-[#f36b21] font-bold tracking-[0.2em] uppercase text-sm">
              Gobierno y Ética
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1e4a7a] mt-2">
              Políticas Institucionales
            </h2>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-4 text-sm font-bold text-slate-600">
              <span>Imparcialidad</span>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Lineamientos que garantizan la confiabilidad, objetividad,
              integridad y competencia en las actividades de inspección.
            </p>
          </div>

          {/* Política de Imparcialidad - destacada */}
          <div className="max-w-6xl mx-auto mb-8 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="bg-gradient-to-r from-[#1e4a7a] to-[#153456] px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <span className="icon-[mdi--scale-balance] text-3xl text-white"></span>
                </div>
                <div>
                  <p className="text-[#f36b21] font-black text-sm tracking-widest uppercase">
                    Política 1
                  </p>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    Imparcialidad, Integridad e Independencia
                  </h3>
                </div>
              </div>
              <span className="icon-[mdi--certificate-outline] text-5xl text-white/20 hidden md:block"></span>
            </div>

            <div className="p-8">
              <p className="text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
                INSPECOL presta sus servicios de inspección bajo los principios
                de{" "}
                <strong className="text-[#1e4a7a]">
                  imparcialidad, independencia, objetividad, integridad y
                  confidencialidad
                </strong>
                , garantizando que todas sus actividades se realizan con
                transparencia y ética profesional. Reconocemos la importancia de
                identificar, analizar y gestionar los riesgos a la
                imparcialidad, comprometiéndonos a que nuestras actividades se
                realicen libres de presiones comerciales, financieras o de
                cualquier otra índole que puedan comprometer la objetividad de
                los resultados.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    Actividades de inspección desarrolladas de forma
                    <strong> independiente y objetiva</strong>, sin influencias
                    indebidas que afecten los resultados.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    Prestación del servicio <strong>sin discriminación</strong>{" "}
                    hacia los solicitantes, garantizando igualdad de acceso.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    La información sobre nuestros servicios refleja de manera{" "}
                    <strong>veraz y transparente</strong> las capacidades y
                    condiciones reales del organismo.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    Toda la información obtenida es tratada con{" "}
                    <strong>estricta confidencialidad</strong>, protegiendo los
                    intereses de clientes y partes interesadas.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    Los registros se mantienen bajo{" "}
                    <strong>control y confidencialidad</strong>, salvo
                    documentos de carácter público por disposición legal.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    Servicios realizados únicamente por{" "}
                    <strong>
                      personal competente, calificado y autorizado
                    </strong>{" "}
                    que garantiza la confiabilidad de los resultados.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    Para preservar la imparcialidad,{" "}
                    <strong>
                      no realizamos consultoría, diseño, venta, instalación ni
                      mantenimiento
                    </strong>{" "}
                    de instalaciones de gas.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl mt-0.5 shrink-0"></span>
                  <p className="text-sm text-slate-700">
                    La dirección asume la responsabilidad de velar
                    permanentemente por la{" "}
                    <strong>
                      imparcialidad, confidencialidad e integridad
                    </strong>{" "}
                    y la mejora continua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cultura de integridad y resultados */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
            {/* Cultura de Integridad */}
            <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-[#1e4a7a] px-7 py-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <span className="icon-[mdi--handshake-outline] text-2xl text-white"></span>
                </div>
                <div>
                  <p className="text-[#f36b21] font-black text-xs tracking-widest uppercase">
                    Política 2
                  </p>
                  <h3 className="text-xl font-black text-white leading-tight">
                    Cultura de Integridad
                  </h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-slate-700 text-sm leading-relaxed mb-5 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  En INSPECOL promovemos una cultura de integridad basada en un
                  código que orienta a nuestro personal en la toma de decisiones
                  ante situaciones o dilemas éticos, fortaleciendo la confianza
                  de nuestros clientes y partes interesadas.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#1e4a7a] p-5 text-white">
                    <span className="icon-[mdi--shield-lock-outline] text-3xl mb-3 block"></span>
                    <p className="font-bold mb-1">Confianza</p>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Activo esencial y base de la reputación del organismo.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#153456] p-5 text-white">
                    <span className="icon-[mdi--account-group-outline] text-3xl mb-3 block"></span>
                    <p className="font-bold mb-1">Honestidad y transparencia</p>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Actuar con sinceridad, sin engaño.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#153456] p-5 text-white">
                    <span className="icon-[mdi--clipboard-check-outline] text-3xl mb-3 block"></span>
                    <p className="font-bold mb-1">Responsabilidad</p>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Asumir las consecuencias de las acciones y omisiones.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#1e4a7a] p-5 text-white">
                    <span className="icon-[mdi--scale-balance] text-3xl mb-3 block"></span>
                    <p className="font-bold mb-1">Principios</p>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Decisiones guiadas por ética, justicia y respeto a las
                      partes interesadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultados que busca INSPECOL */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1e4a7a] to-[#153456] border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-7 py-5 flex items-center gap-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#f36b21] flex items-center justify-center shrink-0">
                  <span className="icon-[mdi--chart-areaspline] text-2xl text-white"></span>
                </div>
                <div>
                  <p className="text-[#f36b21] font-black text-xs tracking-widest uppercase">
                    Resultados
                  </p>
                  <h3 className="text-xl font-black text-white leading-tight">
                    Resultados que busca INSPECOL
                  </h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-blue-100 text-sm leading-relaxed mb-5">
                  Estas políticas se traducen en resultados que generan valor y
                  confianza a nuestros clientes y partes interesadas.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                    <span className="icon-[mdi--check-decagram] text-[#f36b21] text-xl shrink-0"></span>
                    <p className="text-xs font-semibold text-white leading-snug">
                      Confiabilidad de los resultados
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                    <span className="icon-[mdi--target] text-[#f36b21] text-xl shrink-0"></span>
                    <p className="text-xs font-semibold text-white leading-snug">
                      Objetividad en la inspección
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                    <span className="icon-[mdi--gavel] text-[#f36b21] text-xl shrink-0"></span>
                    <p className="text-xs font-semibold text-white leading-snug">
                      Cumplimiento normativo
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                    <span className="icon-[mdi--lock-check-outline] text-[#f36b21] text-xl shrink-0"></span>
                    <p className="text-xs font-semibold text-white leading-snug">
                      Protección de la información
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 col-span-2">
                    <span className="icon-[mdi--account-heart-outline] text-[#f36b21] text-xl shrink-0"></span>
                    <p className="text-xs font-semibold text-white leading-snug">
                      Confianza de clientes y partes interesadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quejas y Apelaciones - Procedimiento PR-008 */}
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="bg-gradient-to-r from-[#1e4a7a] to-[#153456] px-8 py-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f36b21] flex items-center justify-center shrink-0">
                  <span className="icon-[mdi--message-alert-outline] text-3xl text-white"></span>
                </div>
                <div>
                  <p className="text-[#f36b21] font-black text-sm tracking-widest uppercase">
                    Procedimiento PR-008
                  </p>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    Quejas y Apelaciones
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">
                    Escuchar, analizar y responder de manera justa, transparente
                    y oportuna.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2">
                  <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold">
                    Versión
                  </p>
                  <p className="text-white font-black">1</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2">
                  <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold">
                    Vigencia
                  </p>
                  <p className="text-white font-black">2025-11-15</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Definiciones */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1e4a7a] flex items-center justify-center shrink-0">
                      <span className="icon-[mdi--bullhorn-outline] text-xl text-white"></span>
                    </div>
                    <h4 className="font-black text-[#1e4a7a] uppercase text-sm">
                      Queja
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Expresión de insatisfacción sobre las actividades del OEC,
                    para la cual se espera respuesta.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f36b21] flex items-center justify-center shrink-0">
                      <span className="icon-[mdi--gavel] text-xl text-white"></span>
                    </div>
                    <h4 className="font-black text-[#f36b21] uppercase text-sm">
                      Apelación
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Solicitud para reconsiderar una decisión adversa tomada por
                    el OEC relacionada con el estado o resultado de inspección.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1e4a7a] flex items-center justify-center shrink-0">
                      <span className="icon-[mdi--lightbulb-on-outline] text-xl text-white"></span>
                    </div>
                    <h4 className="font-black text-[#1e4a7a] uppercase text-sm">
                      Sugerencia
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Recomendación o comentario para la mejora de los servicios o
                    actividades del OEC.
                  </p>
                </div>
              </div>

              {/* Políticas clave */}
              <div className="mb-8">
                <h4 className="font-black text-[#1e4a7a] uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                  <span className="icon-[mdi--shield-check] text-[#f36b21] text-xl"></span>
                  Políticas Clave
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Toda queja o apelación será atendida sin discriminación.",
                    "Las quejas o apelaciones que afecten el item de inspección o resultado serán revisadas por la gerencia y un empleado que no haya intervenido en el proceso.",
                    "El cliente puede registrar su queja o apelación en recepción.",
                    "El OEC es responsable de las decisiones tomadas frente a quejas y apelaciones por deficiencias del servicio.",
                    "Toda queja o apelación será analizada en un período mínimo de diez (10) días hábiles.",
                    "El usuario recibirá confirmación de recibido y procederá su estudio.",
                  ].map((texto) => (
                    <div
                      key={texto}
                      className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100"
                    >
                      <span className="icon-[mdi--check-circle] text-[#f36b21] text-lg mt-0.5 shrink-0"></span>
                      <p className="text-sm text-slate-700">{texto}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flujo del proceso */}
              <div className="mb-8">
                <h4 className="font-black text-[#1e4a7a] uppercase text-sm tracking-widest mb-6 flex items-center gap-2">
                  <span className="icon-[mdi--timeline-text-outline] text-[#f36b21] text-xl"></span>
                  Flujo del Proceso
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col">
                    <div className="w-9 h-9 rounded-full bg-[#1e4a7a] flex items-center justify-center font-black text-white mb-3">
                      1
                    </div>
                    <span className="icon-[mdi--clipboard-text-outline] text-2xl text-[#1e4a7a] mb-2"></span>
                    <p className="font-bold text-[#1e4a7a] text-sm mb-1">
                      Recepción
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      El cliente registra su queja o apelación en el formato
                      disponible o por los canales definidos.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col">
                    <div className="w-9 h-9 rounded-full bg-[#f36b21] flex items-center justify-center font-black text-white mb-3">
                      2
                    </div>
                    <span className="icon-[mdi--email-check-outline] text-2xl text-[#f36b21] mb-2"></span>
                    <p className="font-bold text-[#1e4a7a] text-sm mb-1">
                      Confirmación
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Se confirma al usuario la recepción de su queja o
                      apelación por correo electrónico.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col">
                    <div className="w-9 h-9 rounded-full bg-[#1e4a7a] flex items-center justify-center font-black text-white mb-3">
                      3
                    </div>
                    <span className="icon-[mdi--magnify] text-2xl text-[#1e4a7a] mb-2"></span>
                    <p className="font-bold text-[#1e4a7a] text-sm mb-1">
                      Análisis
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      La gerencia y un empleado independiente revisan y analizan
                      la información relacionada.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col">
                    <div className="w-9 h-9 rounded-full bg-[#f36b21] flex items-center justify-center font-black text-white mb-3">
                      4
                    </div>
                    <span className="icon-[mdi--account-tie-outline] text-2xl text-[#f36b21] mb-2"></span>
                    <p className="font-bold text-[#1e4a7a] text-sm mb-1">
                      Decisión
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Se toma una decisión basada en la revisión y análisis
                      realizado.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col">
                    <div className="w-9 h-9 rounded-full bg-[#1e4a7a] flex items-center justify-center font-black text-white mb-3">
                      5
                    </div>
                    <span className="icon-[mdi--email-outline] text-2xl text-[#1e4a7a] mb-2"></span>
                    <p className="font-bold text-[#1e4a7a] text-sm mb-1">
                      Respuesta
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Se comunica la decisión al usuario por correo electrónico
                      dentro de un máximo de 15 días hábiles.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col">
                    <div className="w-9 h-9 rounded-full bg-[#f36b21] flex items-center justify-center font-black text-white mb-3">
                      6
                    </div>
                    <span className="icon-[mdi--chart-line] text-2xl text-[#f36b21] mb-2"></span>
                    <p className="font-bold text-[#1e4a7a] text-sm mb-1">
                      Mejora
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Se identifican oportunidades de mejora para evitar la
                      repetición y fortalecer el servicio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsabilidades / Plazo / Registros */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                  <h4 className="font-black text-[#1e4a7a] uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                    <span className="icon-[mdi--account-group] text-[#f36b21] text-xl"></span>
                    Responsabilidades
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="icon-[mdi--circle-medium] text-[#f36b21] mt-1 shrink-0"></span>
                      <span>
                        <strong>Gerencia:</strong> asegura la revisión y
                        decisión de quejas y apelaciones.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="icon-[mdi--circle-medium] text-[#f36b21] mt-1 shrink-0"></span>
                      <span>
                        <strong>Coordinador de calidad:</strong> administra el
                        registro, seguimiento y respuesta.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="icon-[mdi--circle-medium] text-[#f36b21] mt-1 shrink-0"></span>
                      <span>
                        <strong>Inspectores y áreas involucradas:</strong>{" "}
                        aportan información técnica y acciones correctivas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="icon-[mdi--circle-medium] text-[#f36b21] mt-1 shrink-0"></span>
                      <span>
                        <strong>Alta Dirección:</strong> puede dictar medidas
                        adicionales para una atención efectiva.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50 flex flex-col items-center text-center">
                  <h4 className="font-black text-[#1e4a7a] uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                    <span className="icon-[mdi--clock-outline] text-[#f36b21] text-xl"></span>
                    Plazo de Respuesta
                  </h4>
                  <div className="bg-white rounded-2xl border-2 border-[#f36b21] px-8 py-6 mb-4 w-full">
                    <p className="text-5xl font-black text-[#1e4a7a] leading-none">
                      15
                    </p>
                    <p className="text-[#f36b21] font-black uppercase text-sm tracking-widest mt-1">
                      Días hábiles
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tiempo mínimo para analizar y responder una queja o
                    apelación desde su recepción.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                  <h4 className="font-black text-[#1e4a7a] uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                    <span className="icon-[mdi--folder-lock-outline] text-[#f36b21] text-xl"></span>
                    Registros y Control
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="icon-[mdi--check-circle] text-[#f36b21] mt-0.5 shrink-0"></span>
                      Todas las quejas y apelaciones se registran y conservan
                      como evidencia.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="icon-[mdi--check-circle] text-[#f36b21] mt-0.5 shrink-0"></span>
                      Se realiza seguimiento hasta el cierre del caso.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="icon-[mdi--check-circle] text-[#f36b21] mt-0.5 shrink-0"></span>
                      Los registros son confidenciales y se almacenan según el
                      sistema de gestión documental del OEC.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Canales de recepción */}
              <div className="mt-6 rounded-2xl bg-[#1e4a7a] p-6">
                <h4 className="font-black text-white uppercase text-sm tracking-widest mb-5 flex items-center gap-2">
                  <span className="icon-[mdi--inbox-multiple-outline] text-[#f36b21] text-xl"></span>
                  Canales de Recepción
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <a
                    href="#contacto"
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#f36b21] transition-colors"
                  >
                    <span className="icon-[mdi--counter] text-3xl text-[#f36b21] mb-2"></span>
                    <p className="text-white font-bold text-sm">Recepción</p>
                    <p className="text-blue-200 text-xs">Formato físico</p>
                  </a>
                  <a
                    href="#contacto"
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#f36b21] transition-colors"
                  >
                    <span className="icon-[mdi--email-outline] text-3xl text-[#f36b21] mb-2"></span>
                    <p className="text-white font-bold text-sm">
                      Correo electrónico
                    </p>
                    <p className="text-blue-200 text-xs">del OEC</p>
                  </a>
                  <a
                    href="#contacto"
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#f36b21] transition-colors"
                  >
                    <span className="icon-[mdi--phone-outline] text-3xl text-[#f36b21] mb-2"></span>
                    <p className="text-white font-bold text-sm">
                      Línea telefónica
                    </p>
                    <p className="text-blue-200 text-xs">del OEC</p>
                  </a>
                  <a
                    href="#formulario-pqr"
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#f36b21] transition-colors"
                  >
                    <span className="icon-[mdi--dots-horizontal-circle-outline] text-3xl text-[#f36b21] mb-2"></span>
                    <p className="text-white font-bold text-sm">
                      Otros canales
                    </p>
                    <p className="text-blue-200 text-xs">autorizados</p>
                  </a>
                </div>
                <p className="text-blue-100 text-center text-sm mt-6 flex items-center justify-center gap-2">
                  <span className="icon-[mdi--shield-check] text-[#f36b21] text-xl"></span>
                  En INSPECOL CERTIFICACIONES S.A.S. trabajamos por la mejora
                  continua y la satisfacción de nuestros clientes.
                </p>
              </div>
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
                Nuestro equipo en Florencia, Caquetá está listo para atenderle.
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
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <span className="icon-[mdi--map-marker-outline] text-2xl"></span>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-blue-200">
                      Dirección
                    </p>
                    <p className="font-bold">Carrera 6 # 19-22</p>
                    <p className="text-blue-100 text-sm">B/ Buenos Aires</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="formulario-pqr"
              className="scroll-mt-24 bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-[#f36b21]"
            >
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
