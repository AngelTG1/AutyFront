import React from "react"
import { Smartphone, Star, CreditCard, MessageSquare, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  { icon: Smartphone, title: "App Intuitiva", description: "Interfaz fácil de usar, solicita ayuda en segundos" },
  { icon: MapPin, title: "Geolocalización", description: "Encuentra mecánicos cerca de ti en tiempo real" },
  { icon: Star, title: "Calificaciones", description: "Lee reseñas de otros usuarios antes de elegir" },
  { icon: CreditCard, title: "Pagos Seguros", description: "Múltiples métodos de pago, transacciones protegidas" },
  { icon: Users, title: "Soporte 24/7", description: "Equipo de atención siempre disponible para ayudarte" },
]

// Colores para cada feature
const colors = [
  { bg: "bg-blue-100", icon: "text-blue-700" },
  { bg: "bg-green-100", icon: "text-green-700" },
  { bg: "bg-yellow-100", icon: "text-yellow-700" },
  { bg: "bg-red-100", icon: "text-red-700" },
  { bg: "bg-purple-100", icon: "text-purple-700" },
  { bg: "bg-pink-100", icon: "text-pink-700" },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function FeaturesSection() {
  return (
    <section id="beneficios" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitas en una app
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnología diseñada para brindarte la mejor experiencia de asistencia vehicular
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const color = colors[index % colors.length]
            return (
              <motion.div
                key={index}
                className="p-6 border-1 border-gray-300 rounded-2xl bg-white cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className={`${color.bg} rounded-xl w-14 h-14 flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-7 w-7 ${color.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
