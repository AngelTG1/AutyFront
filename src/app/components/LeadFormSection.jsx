"use client"

import React, { useState } from "react"
import { Shield, Lock, CheckCircle2 } from "lucide-react"

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Obtén acceso anticipado a MecanicoApp
            </h2>
            <p className="text-lg text-gray-500 mb-6 font-light">
              Regístrate ahora y sé de los primeros en experimentar asistencia vehicular profesional al alcance de tu
              mano.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">100% Seguro y Privado</p>
                  <p className="text-sm text-gray-500 font-light">
                    Tus datos están protegidos con encriptación de nivel bancario
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">No compartimos tu información</p>
                  <p className="text-sm text-muted-foreground font-light">
                    Nunca venderemos ni compartiremos tus datos personales
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sin spam garantizado</p>
                  <p className="text-sm text-muted-foreground font-light">
                    Solo recibirás información relevante sobre el servicio
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-gray-300 rounded-2xl p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="number"
                  placeholder="+52 55 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-800 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg h-12 bg-blue-800 text-white rounded-lg hover:opacity-90 transition-all cursor-pointer"
              >
                Obtener Acceso Anticipado 
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Al registrarte, aceptas nuestra{" "}
                <a href="#" className="underline hover:text-foreground">
                  Política de Privacidad
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
