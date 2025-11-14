import React from "react";
import { motion } from "framer-motion";
import autyLogo from "../../assets/Logo3.svg";
import {
  ShieldCheck,
  Wrench,
  Globe,
  Leaf,
  Users,
  HelpCircle,
  Newspaper,
  Building2,
} from "lucide-react";
import { Footer } from "../components/footer";

export default function AboutPages() {
  return (
    <main>
      <div className="min-h-screen bg-white text-gray-900">

        {/* ============================
            HERO
        ============================ */}
        <section className="py-24 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Somos Auty: Innovación, seguridad y tecnología para la asistencia vehicular
              </h1>
              <p className="text-lg text-gray-600">
                En Auty trabajamos para transformar la manera en que los conductores reciben apoyo en carretera.
                Somos una plataforma tecnológica enfocada en conectarte con mecánicos verificados de manera rápida,
                eficiente y totalmente segura.
              </p>
              <p className="text-lg text-gray-600">
                Nuestro compromiso es claro: construir la red de asistencia vehicular más confiable de México,
                impulsada por tecnología, transparencia y una comunidad profesional en crecimiento.
              </p>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center"
            >
              <img
                src={autyLogo}
                alt="Auty"
                className="w-72 h-72 object-contain opacity-90"
              />
            </motion.div>
          </div>
        </section>

        {/* ============================
            TRABAJAMOS PARA MEJORAR LA MOVILIDAD
        ============================ */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Trabajamos para mejorar la movilidad en el mundo
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl">
              Nuestro propósito es facilitar la vida de las personas al brindar soluciones de movilidad más seguras,
              eficientes y accesibles. Utilizamos algoritmos inteligentes, geolocalización precisa y datos en tiempo
              real para conectar a los usuarios con mecánicos confiables en el momento justo.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Conectamos personas</h3>
                <p className="text-gray-600">
                  Miles de conductores encuentran asistencia confiable gracias a nuestra red de profesionales.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <Wrench className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Soluciones en minutos</h3>
                <p className="text-gray-600">
                  Reducimos tiempos de espera mediante asignación inteligente y mecánicos cercanos.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comunidad profesional</h3>
                <p className="text-gray-600">
                  Construimos un ecosistema donde mecánicos y conductores crecen juntos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================
            SOSTENIBILIDAD
        ============================ */}
        <section className="py-20 container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Compromiso con la sostenibilidad</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Creemos en una movilidad eficiente y responsable con el medio ambiente. Impulsamos
                prácticas de reparación sostenibles, priorizamos el mantenimiento sobre el reemplazo
                y fomentamos el trabajo con mecánicos locales para fortalecer la economía circular.
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                La asignación inteligente de mecánicos reduce traslados innecesarios, lo cual disminuye
                emisiones y contribuye a una movilidad urbana más limpia. Nuestro objetivo es que cada
                asistencia sea rápida, útil y sustentable.
              </p>
            </div>
          </div>
        </section>

        {/* ============================
            SEGURIDAD
        ============================ */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Tu seguridad es nuestra prioridad</h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Profesionales verificados</h3>
                <p className="text-gray-600">
                  Cada mecánico pasa por validación documental y procesos de identificación.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <HelpCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Soporte activo</h3>
                <p className="text-gray-600">
                  Disponibilidad continua para resolver dudas, emergencias y solicitudes especiales.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Transparencia en cada servicio</h3>
                <p className="text-gray-600">
                  Precios claros, reputación visible y evaluaciones reales de otros usuarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================
            INFORMACIÓN DE LA EMPRESA
        ============================ */}
        <section className="py-20 container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Información de Auty</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <p className="text-gray-700 text-lg">
                Auty es una plataforma mexicana de tecnología especializada en asistencia vehicular.
              </p>
              <p className="text-gray-600">
                Diseñamos soluciones que brindan movilidad segura, servicios confiables y apoyo inmediato
                a conductores en todo el país.
              </p>
            </div>

            <div>
              <ul className="space-y-2 text-gray-700">
                <li>📍 Ubicación: Tuxtla Gutiérrez, Chiapas, México</li>
                <li>📞 Teléfono: +52 961 000 0000</li>
                <li>📧 Correo: contacto@auty.com</li>
                <li>💼 Operación: Nacional</li>
                <li>🛠 Fundación: 2025</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================
            NOTICIAS Y NOVEDADES
        ============================ */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Últimas novedades</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <Newspaper className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Lanzamientos recientes</h3>
                <p className="text-gray-600">
                  Nuevas actualizaciones, mejoras de experiencia y funciones avanzadas.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <Newspaper className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Actualizaciones técnicas</h3>
                <p className="text-gray-600">
                  Mejoras de estabilidad, precisión en mapas y rendimiento general.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border">
                <Newspaper className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Historias de la comunidad</h3>
                <p className="text-gray-600">
                  Testimonios reales de usuarios y mecánicos que utilizan Auty cada día.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================
            CTA FINAL
        ============================ */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sé parte del futuro de la asistencia vehicular
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Únete a Auty y descubre cómo la tecnología puede acompañarte en cada viaje,
            garantizando seguridad, velocidad y confianza.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition">
            Comenzar ahora
          </button>
        </section>

      </div>

      <Footer />
    </main>
  );
}
