import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="bg-gradient-to-br from-blue-900 to-orange-500 rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Título */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            ¿Listo para empezar?
          </motion.h2>

          {/* Descripción */}
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Descarga Auty y obtén asistencia vehicular profesional en minutos. Disponible para iOS y Android.
          </motion.p>

          {/* Botones */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              className="flex items-center justify-center border border-white text-white hover:bg-white/20 text-lg h-14 px-8 rounded-lg transition"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar para Android
            </motion.button>
          </motion.div>

          {/* Separador y sección para mecánicos */}
          <motion.div
            className="mt-8 pt-8 border-t border-white/30"
            variants={itemVariants}
          >
            <p className="text-white/80 mb-4">¿Eres mecánico o tienes un taller?</p>
            <motion.button
              className="inline-flex items-center text-white hover:text-white/80 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Únete como profesional
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
