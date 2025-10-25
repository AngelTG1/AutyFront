import React from "react"
import { motion } from "framer-motion"

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Describe tu problema",
      description:
        "Abre la app y cuéntanos qué le pasa a tu vehículo. Selecciona si necesitas ir a un taller o que el mecánico vaya a ti.",
    },
    {
      number: 2,
      title: "Elige tu mecánico",
      description:
        "Revisa perfiles, calificaciones y precios. Selecciona el mecánico o taller que mejor se adapte a tus necesidades.",
    },
    {
      number: 3,
      title: "Recibe asistencia",
      description:
        "Sigue el progreso en tiempo real. Recibe tu servicio y califica tu experiencia al finalizar.",
    },
  ]

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section id="como-funciona" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Título */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtén asistencia mecánica en 3 simples pasos
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative flex flex-col items-center text-center border border-gray-300 bg-white shadow-lg rounded-xl p-8"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Connector line */}
              {index !== steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-10 right-0 w-8 h-0.5 bg-gray-300 origin-left"
                  variants={lineVariants}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
