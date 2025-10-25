import React from "react"
import { MapPin, Wrench, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function ServicesSection() {
    return (
        <section id="servicios" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 ">
            <div className="container mx-auto">
                {/* Título */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                        Dos formas de obtener ayuda
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Elige la opción que mejor se adapte a tu situación
                    </p>
                </motion.div>

                {/* Servicios principales */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* Servicio 1 - Ir al Taller */}
                    <motion.div
                        className="p-8 border-2 border-gray-300 rounded-2xl bg-white/30 backdrop-blur-lg hover:shadow-xl hover:border-primary/50 transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="bg-blue-300/30 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                            <MapPin className="h-8 w-8 text-blue-800" />
                        </div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-4">Ir al Taller</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Si tu vehículo aún puede desplazarse, encuentra el taller más cercano y obtén servicio inmediato. Compara
                            precios y calificaciones.
                        </p>
                        <ul className="space-y-3">
                            {["Encuentra talleres cercanos", "Compara precios y servicios", "Reserva tu cita al instante"].map((text, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-1"></span>
                                    <span className="text-sm text-card-foreground">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>


                    {/* Servicio 2 - Mecánico a Domicilio */}
                    <motion.div
                        className="p-8 hover:shadow-xl transition-shadow border-2 border-gray-300 hover:border-secondary/50 rounded-2xl bg-gradient-to-br from-card to-secondary/5"
                        variants={itemVariants}
                    >
                        <div className="bg-orange-300/30 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                            <Wrench className="h-8 w-8 text-orange-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-4">Mecánico a Domicilio</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Si tu vehículo está completamente detenido, solicita que un mecánico profesional acuda a tu ubicación.
                            Servicio de emergencia 24/7.
                        </p>
                        <ul className="space-y-3">
                            {["Asistencia en tu ubicación", "Mecánicos verificados", "Seguimiento en tiempo real"].map((text, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="inline-block w-3 h-3 bg-orange-600 rounded-full flex-shrink-0 mt-1"></span>
                                    <span className="text-sm text-card-foreground">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Características adicionales */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {[
                        { icon: Clock, title: "Respuesta Rápida", text: "Atención en minutos" },
                        { icon: Shield, title: "100% Seguro", text: "Mecánicos certificados" },
                        { icon: MapPin, title: "Cobertura Nacional", text: "En todo el país" },
                        { icon: Wrench, title: "Precios Justos", text: "Sin sorpresas" },
                    ].map((item, idx) => (
                        <motion.div key={idx} className="text-center" variants={itemVariants}>
                            <div className="bg-blue-300/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                <item.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
