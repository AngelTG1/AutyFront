"use client"

import React, { useState } from "react"
import { Wrench, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom";
import auty from '../../assets/Logo3.svg'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation();

    const mobileMenuVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
        exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/80 to-white/30 backdrop-blur-lg border-b border-gray-200">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-3">
                <div className="flex items-center justify-between h-16 md:h-15">
                    {/* logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 rounded-lg overflow-hidden w-8 h-8 md:w-10 md:h-10 ">
                            <img
                                src={auty}
                                alt="Auty Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-foreground select-none">
                            Auty
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                         <NavLink
                            to="/"
                            className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"
                                }`}
                        >
                            Quiénes somos
                        </NavLink>
                        <NavLink
                            to="/client"
                            className={`hover:text-blue-600 ${location.pathname === "/client" ? "text-blue-600 font-semibold" : "text-gray-700"
                                }`}
                        >
                            Cliente
                        </NavLink>
                        <NavLink
                            to="/mecanico"
                            className={`hover:text-blue-600 ${location.pathname === "/mecanico"
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-700"
                                }`}
                        >
                            Mecánico
                        </NavLink>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                            Iniciar Sesión
                        </button> */}
                        <button className="px-5 py-2 rounded-xl bg-blue-800 text-white hover:bg-blue-700">
                            Descargar App
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden overflow-hidden border-t border-gray-200"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={mobileMenuVariants}
                        >
                            <div className="flex flex-col py-4 space-y-4">
                                <NavLink
                                    to="/"
                                    onClick={() => setMobileMenuOpen(false)} // 👈 Cierra menú al navegar
                                    className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"
                                        }`}
                                >
                                    Cliente
                                </NavLink>
                                <NavLink
                                    to="/mecanico"
                                    onClick={() => setMobileMenuOpen(false)} // 👈 Cierra menú al navegar
                                    className={`hover:text-blue-600 ${location.pathname === "/mecanico"
                                            ? "text-blue-600 font-semibold"
                                            : "text-gray-700"
                                        }`}
                                >
                                    Mecánico
                                </NavLink>

                                <div className="flex flex-col gap-2 pt-4">
                                    {/* <button className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                                        Iniciar Sesión
                                    </button> */}
                                    <button className="w-full px-4 py-2 rounded-xl bg-blue-800 text-white hover:bg-blue-700">
                                        Descargar App
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
