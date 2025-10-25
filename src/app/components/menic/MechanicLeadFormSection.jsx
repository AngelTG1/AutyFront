"use client"

import React, { useState } from "react"
import { Shield, Lock, CheckCircle2, DollarSign } from "lucide-react"

export default function MechanicLeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Mechanic form submitted:", formData)
    // Aquí iría la lógica de envío del formulario
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Columna izquierda */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <DollarSign className="w-4 h-4" />
              Gana hasta $15,000 MXN mensuales
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Regístrate gratis y empieza a recibir clientes hoy
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Completa el formulario y nuestro equipo te contactará en menos de 24 horas para activar tu cuenta.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sin costos ocultos</p>
                  <p className="text-sm text-muted-foreground">
                    Registro 100% gratuito, sin mensualidades ni comisiones sorpresa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Tus datos protegidos</p>
                  <p className="text-sm text-muted-foreground">
                    Información confidencial con encriptación de nivel bancario
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Pagos garantizados</p>
                  <p className="text-sm text-muted-foreground">
                    Recibe tu dinero de forma segura y puntual cada semana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha (Formulario) */}
          <div className="bg-card border border-gray-300 rounded-2xl p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Carlos Rodríguez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-800 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="carlos@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-800 text-sm"
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

              <div className="space-y-2">
                <label htmlFor="workshop" className="text-sm font-medium">
                  Nombre del taller (opcional)
                </label>
                <input
                  id="workshop"
                  type="text"
                  placeholder="Taller Mecánico El Rápido"
                  value={formData.workshop}
                  onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-blue-800 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg h-12 bg-blue-800 text-white rounded-lg hover:opacity-90 transition-all cursor-pointer"
              >
                Comenzar a Ganar Dinero Ahora
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Al registrarte, aceptas nuestros{" "}
                <a href="#" className="underline hover:text-foreground">
                  Términos de Servicio
                </a>{" "}
                y{" "}
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
