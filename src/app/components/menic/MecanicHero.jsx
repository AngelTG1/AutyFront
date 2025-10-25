import { ArrowRight, DollarSign, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function MecanicHero() {
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

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-700 text-sm font-medium mb-6"
            variants={itemVariants}
          >
            <DollarSign className="w-4 h-4" />
            Gana hasta $10,000 MXN mensuales
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight"
            variants={itemVariants}
          >
            Aumenta tus ingresos como mecánico
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Conecta con miles de clientes que necesitan tus servicios. Trabaja cuando quieras, donde quieras y gana más
            dinero.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <button
              size="lg"
              className="cursor-pointer px-6 py-3 text-lg font-medium rounded-2xl bg-blue-800 text-white w-full lg:w-auto"
            >
              Comenzar ahora
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
          >
            <motion.div className="flex flex-col items-center gap-3" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-blue-700" />
              </div>
              <div className="text-3xl font-bold">$8,500</div>
              <div className="text-sm text-muted-foreground">Ingreso promedio mensual</div>
            </motion.div>

            <motion.div className="flex flex-col items-center gap-3" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-700" />
              </div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Trabaja cuando quieras</div>
            </motion.div>

            <motion.div className="flex flex-col items-center gap-3" variants={itemVariants}>
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-700" />
              </div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm text-muted-foreground">Clientes activos</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
