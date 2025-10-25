import { ArrowRight, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function MechanicEarningsSection() {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <section id="ganancias" className="py-20 px-4">
            <div className="container mx-auto">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Texto e información */}
                        <motion.div variants={itemVariants}>
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-800 text-sm font-medium mb-6"
                                variants={itemVariants}
                            >
                                <TrendingUp className="w-4 h-4" />
                                Potencial de ingresos
                            </motion.div>

                            <motion.h2
                                className="text-4xl md:text-5xl font-bold mb-6"
                                variants={itemVariants}
                            >
                                Gana más trabajando menos
                            </motion.h2>

                            <motion.p
                                className="text-lg text-muted-foreground mb-8"
                                variants={itemVariants}
                            >
                                Nuestros mecánicos mejor calificados ganan hasta $15,000 MXN al mes. Tú decides cuánto quieres trabajar
                                y ganar.
                            </motion.p>

                            <motion.div className="space-y-4 mb-8" variants={containerVariants}>
                                {[
                                    {
                                        title: "Sin comisiones ocultas",
                                        desc: "Mantén el 85% de cada servicio que realices",
                                    },
                                    {
                                        title: "Bonos por desempeño",
                                        desc: "Gana bonos extra por mantener alta calificación",
                                    },
                                    {
                                        title: "Pagos semanales",
                                        desc: "Recibe tus ganancias cada semana directamente en tu cuenta",
                                    },
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3"
                                        variants={itemVariants}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                                            <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                        </div>

                                        {/* Texto */}
                                        <div>
                                            <div className="font-semibold mb-1 text-gray-900">
                                                {benefit.title}
                                            </div>
                                            <div className="text-sm text-gray-600">{benefit.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>


                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="rounded-2xl bg-blue-800 text-white px-6 py-4 font-medium flex items-center gap-2"
                                variants={itemVariants}
                            >
                                Comenzar a ganar
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>

                        {/* Tarjetas de precios */}
                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                        >
                            {[
                                {
                                    title: "Servicio básico",
                                    range: "$350 - $500",
                                    desc: "Por servicio de diagnóstico",
                                    style: "bg-card border border-gray-300",
                                },
                                {
                                    title: "Servicio intermedio",
                                    range: "$800 - $1,500",
                                    desc: "Por reparación general",
                                    style: "bg-card border border-gray-300",
                                },
                                {
                                    title: "Servicio especializado",
                                    range: "$2,000 - $5,000",
                                    desc: "Por reparación especializada",
                                    style: "bg-blue-800 text-white",
                                },
                                {
                                    title: "Promedio mensual",
                                    range: "$8,500 MXN",
                                    desc: "Ingreso promedio mensual",
                                    style: "bg-gray-200",
                                    icon: true,
                                },
                            ].map((card, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-6 rounded-2xl ${card.style} hover:shadow-lg transition-transform`}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    {card.icon ? (
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-sm text-muted-foreground mb-1">{card.title}</div>
                                                <div className="text-2xl font-bold">{card.range}</div>
                                            </div>
                                            <TrendingUp className="w-8 h-8 text-primary" />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="text-sm text-muted-foreground mb-2">{card.title}</div>
                                            <div className="text-3xl font-bold mb-1">{card.range}</div>
                                            <div className="text-sm text-muted-foreground opacity-90">{card.desc}</div>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
