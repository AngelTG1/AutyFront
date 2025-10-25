import { Wallet, Calendar, MapPin, Shield, TrendingUp, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Wallet,
    title: "Pagos garantizados",
    description: "Recibe tus pagos de forma segura y rápida después de cada servicio completado.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    icon: Calendar,
    title: "Horarios flexibles",
    description: "Tú decides cuándo trabajar. Acepta servicios según tu disponibilidad.",
    bgColor: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: MapPin,
    title: "Clientes cerca de ti",
    description: "Recibe solicitudes de clientes en tu zona para optimizar tu tiempo.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-700",
  },
  {
    icon: Shield,
    title: "Seguro incluido",
    description: "Protección y seguro para ti y tus clientes en cada servicio.",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-700",
  },
  {
    icon: TrendingUp,
    title: "Crece tu negocio",
    description: "Accede a más clientes y aumenta tus ingresos mes con mes.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-700",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Equipo de soporte disponible siempre que lo necesites.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-700",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function MechanicBenefitsSection() {
  return (
    <section id="beneficios" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Beneficios de unirte
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Todo lo que necesitas para hacer crecer tu negocio como mecánico profesional
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-gray-300 bg-card hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${benefit.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <benefit.icon className={`${benefit.iconColor} w-6 h-6`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
