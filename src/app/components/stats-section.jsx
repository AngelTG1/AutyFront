import { motion } from "framer-motion"

export function StatsSection() {
  const stats = [
    { value: "15 min", label: "Tiempo promedio de respuesta" },
    { value: "98%", label: "Satisfacción del cliente" },
    { value: "24/7", label: "Disponibilidad" },
    { value: "+200", label: "Ciudades cubiertas" },
  ]

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
