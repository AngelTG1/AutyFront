import { UserPlus, Bell, Wrench, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Regístrate gratis",
    description: "Crea tu perfil en minutos. Solo necesitas tu identificación y certificaciones.",
  },
  {
    icon: Bell,
    number: "02",
    title: "Recibe solicitudes",
    description: "Los clientes cercanos te enviarán solicitudes de servicio según tu especialidad.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Realiza el servicio",
    description: "Acepta el trabajo, ve a la ubicación y brinda tu servicio profesional.",
  },
  {
    icon: DollarSign,
    number: "04",
    title: "Recibe tu pago",
    description: "El pago se procesa automáticamente y lo recibes en tu cuenta bancaria.",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30, rotate: -2 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function MechanicHowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cómo funciona</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comienza a ganar dinero en 4 simples pasos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={stepVariants} className="relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-20 h-20 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                <div className="text-5xl font-bold text-blue-400/40 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
