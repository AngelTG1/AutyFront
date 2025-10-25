import React from "react"
import { motion } from "framer-motion"
import imagen from '../../assets/AutyFront.png'
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-24 container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Texto */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-start text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black text-balance">
                        Encuentra tu mecánico en <span className="text-blue-700">minutos</span>
                    </h1>
                    <p className="text-start text-lg md:text-xl text-muted-foreground leading-relaxed text-gray-500">
                        La primera plataforma que conecta conductores con mecánicos profesionales en todo el país. Asistencia rápida, segura y confiable cuando más lo necesitas.
                    </p>
                    <div className="flex">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer px-6 py-4 text-xl font-medium rounded-2xl bg-blue-800 text-white w-full lg:w-auto"
                        >
                            Descargar App
                        </motion.button>
                    </div>

                    {/* Contadores */}
                    <div className="flex items-center gap-8 pt-4 text-start">
                        {[
                            { number: '10K+', label: 'Mecánicos' },
                            { number: '50K+', label: 'Usuarios' },
                            { number: '4.8★', label: 'Calificación' }
                        ].map((item, index) => (
                            <React.Fragment key={index}>
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                                >
                                    <div className="text-3xl font-bold text-foreground">{item.number}</div>
                                    <div className="text-sm text-muted-foreground">{item.label}</div>
                                </motion.div>
                                {index < 2 && <div className="w-px h-16 bg-gray-300"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <motion.img
                            src={imagen}
                            alt="Mecánico"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
