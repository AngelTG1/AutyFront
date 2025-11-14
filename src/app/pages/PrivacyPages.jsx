import React from 'react'
import { motion } from "framer-motion"
import trust from '../../assets/trust.svg'
import {
    ShieldCheck,
    Lock,
    Filter,
    Eye,
    Settings,
    Shield,
    MapPin,
    Share2,
    Clock
} from "lucide-react";
import { Footer } from '../components/footer';


// ============================
// PRINCIPIOS DE PRIVACIDAD
// ============================
const features = [
    {
        icon: ShieldCheck,
        title: "Actuamos con integridad al manejar tus datos",
        description:
            "Tratamos tu información con responsabilidad, ética y respeto. Conservamos tus datos únicamente el tiempo necesario y siempre con un propósito legítimo dentro de la plataforma."
    },
    {
        icon: Lock,
        title: "La privacidad forma parte del diseño de Auty",
        description:
            "La protección de datos está integrada desde la creación de cada función. Evaluamos riesgos, aplicamos medidas de seguridad y diseñamos mecanismos de privacidad desde el principio."
    },
    {
        icon: Filter,
        title: "Solo recabamos lo estrictamente necesario",
        description:
            "Solicitamos únicamente los datos esenciales para operar tu cuenta, registrar tu vehículo, mejorar la seguridad, ubicar servicios cercanos y conectar de forma segura con mecánicos."
    },
    {
        icon: Eye,
        title: "Somos claros y transparentes con nuestras prácticas",
        description:
            "Te explicamos de manera clara qué datos recopilamos, cómo los usamos y por qué los necesitamos. En Auty la transparencia es un compromiso permanente."
    },
    {
        icon: Settings,
        title: "Tienes control total sobre tu información",
        description:
            "Puedes actualizar tu información, modificar tu perfil, gestionar permisos y decidir qué datos deseas compartir. Tu privacidad está en tus manos."
    },
    {
        icon: Shield,
        title: "Protegemos tu información con altos estándares",
        description:
            "Implementamos controles técnicos y administrativos para evitar accesos no autorizados, filtraciones y usos indebidos. La seguridad es una prioridad absoluta."
    }
];

// ============================
// PREGUNTAS FRECUENTES
// ============================
const faqs = [
    {
        icon: MapPin,
        title: "¿Cómo usa Auty los datos de ubicación?",
        description: (
            <>
                Auty utiliza tu ubicación únicamente para funciones esenciales como mostrar mecánicos
                cercanos, calcular distancias, asignar servicios y mejorar la precisión del mapa.
                <br /><br />
                Tu ubicación <strong>no se comparte con terceros ajenos al servicio</strong>. Puedes
                revocar este permiso en cualquier momento desde los ajustes de tu dispositivo.
            </>
        ),
    },
    {
        icon: Share2,
        title: "¿Auty comparte mi información con alguna persona?",
        description: (
            <>
                Compartimos tus datos solo cuando es estrictamente necesario para brindarte el servicio.
                <br /><br />
                Cuando solicitas asistencia, el mecánico asignado recibe tu nombre, tipo de vehículo y
                la descripción del problema. También trabajamos con proveedores esenciales como servicios
                de mapas, autenticación y verificación.
                <br /><br />
                Auty <strong>no vende tus datos</strong> y nunca los comparte con terceros no autorizados.
            </>
        ),
    },
    {
        icon: Clock,
        title: "¿Por cuánto tiempo Auty guarda mi información?",
        description: (
            <>
                Conservamos tus datos únicamente el tiempo necesario para operar tu cuenta y cumplir
                requisitos legales o de seguridad.
                <br /><br />
                Si decides eliminar tu cuenta, la mayor parte de tu información será eliminada de forma
                segura. Algunos datos podrán mantenerse temporalmente para prevención de fraudes u
                obligaciones legales.
            </>
        ),
    },
];

// ============================
// COLORES
// ============================
const colors = [
    { bg: "bg-gray-100", icon: "text-gray-700" },
    { bg: "bg-stone-100", icon: "text-stone-700" },
    { bg: "bg-slate-100", icon: "text-slate-700" },
    { bg: "bg-zinc-100", icon: "text-zinc-700" },
    { bg: "bg-neutral-100", icon: "text-neutral-700" },
    { bg: "bg-gray-200", icon: "text-gray-800" },
]


// ============================
// ANIMACIONES
// ============================
const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}


// ============================
// COMPONENTE PRINCIPAL
// ============================
function PrivacyPages() {
    return (
        <div className=''>
            <div className='min-h-screen text-gray-900 p-3 lg:px-20'>

                {/* ============================
                    HERO / ENCABEZADO
                ============================ */}
                <section className='flex flex-col items-center justify-center text-center py-24 container mx-aut'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>

                        <motion.div className="space-y-8">
                            <h1 className="text-start text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black text-balance">
                                Aviso de privacidad de Auty<br />Usuarios, conductores y mecánicos
                            </h1>

                            <p className='text-start text-lg md:text-xl text-muted-foreground leading-relaxed text-gray-500'>
                                En Auty, tu privacidad es una prioridad. Cuando utilizas nuestra aplicación,
                                nos confías información necesaria para brindarte asistencia vehicular rápida
                                y segura. Nuestro compromiso es proteger esa información con altos estándares.
                            </p>

                            <p className='text-start text-lg md:text-xl text-muted-foreground leading-relaxed text-gray-500'>
                                En este aviso te explicamos qué datos recopilamos, cómo los usamos, con quién
                                los compartimos y las opciones que tienes para gestionar tu información.
                            </p>
                        </motion.div>

                        {/* Imagen */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src={trust}
                                    alt="Mecánico"
                                />
                            </div>
                        </div>

                    </div>
                </section>


                <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto">

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            I. Descripción general
                        </h2>

                        {/* Caja de alcance */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-10">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Alcance</h3>

                            <p className="text-gray-700 leading-relaxed">
                                Este aviso se aplica cuando usas las apps o los sitios web de Auty para solicitar o recibir
                                servicios de asistencia vehicular, conectar con mecánicos o gestionar información relacionada
                                con tu vehículo.
                            </p>
                        </div>

                        {/* Texto descriptivo */}
                        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">

                            <p>
                                En este aviso se describe cómo recopilamos y usamos tus datos cuando solicitas, recibes o
                                proporcionas servicios a través de la app o los sitios web de Auty. Esto incluye tanto a
                                conductores como a mecánicos registrados en nuestra plataforma.
                            </p>

                            <p>Este aviso se aplica específicamente en los siguientes casos:</p>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Si utilizas Auty para solicitar asistencia vehicular, localizar mecánicos cercanos o recibir
                                    servicios relacionados con el diagnóstico, reparación o apoyo mecánico de tu vehículo
                                    (un <strong>“Usuario conductor”</strong>).
                                </li>

                                <li>
                                    Si usas Auty como mecánico para ofrecer servicios de asistencia vehicular, recibir solicitudes
                                    de los usuarios, gestionar tu disponibilidad o comunicarte con clientes
                                    (un <strong>“Usuario mecánico”</strong>).
                                </li>

                                <li>
                                    Si accedes a Auty para registrar tus vehículos, administrar tu perfil, actualizar información,
                                    utilizar funciones como geolocalización, historial de servicios o comunicación interna.
                                </li>
                            </ul>

                            <p>
                                En este aviso <strong>no</strong> se describe el uso de datos realizado por terceros independientes
                                como talleres, aseguradoras u otros proveedores externos cuyos servicios no forman parte directa
                                de la operación de Auty. En esos casos, te recomendamos revisar su propio aviso de privacidad.
                            </p>

                            <p>
                                Las prácticas de privacidad de Auty están sujetas a las leyes vigentes en los lugares donde
                                operamos. Esto significa que los tipos de tratamiento de datos pueden variar dependiendo de las
                                normativas locales. Si utilizas Auty fuera de tu región o país, la protección aplicable a tus
                                datos puede distinguirse conforme a las leyes locales.
                            </p>

                        </div>

                    </div>
                </section>

                {/* ============================
    II. RECOPILACIÓN Y USOS DE LOS DATOS
============================ */}
                <section className="py-20 px-4 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                        II. Recopilación y usos de los datos
                    </h2>

                    {/* Caja gris */}
                    <div className="bg-gray-100 p-6 rounded-xl mb-10">
                        <h3 className="text-xl font-semibold mb-2">A. Datos recopilados</h3>
                        <p className="text-gray-700">
                            Auty recopila datos en tres categorías principales:
                        </p>

                        <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
                            <li>1. Datos que proporcionas directamente.</li>
                            <li>2. Datos generados cuando utilizas nuestros servicios.</li>
                        </ul>

                        <p className="mt-4 text-gray-700">
                            Haz clic en esta sección para obtener una descripción detallada sobre los datos que recopilamos y
                            cómo los utilizamos.
                        </p>
                    </div>

                    {/* SUBSECCIÓN 1 */}
                    <h3 className="text-2xl font-semibold mb-6">1. Datos que proporcionas</h3>
                    <p className="text-gray-700 mb-6">
                        Estos son los datos que nos proporcionas de manera directa cuando creates o actualizas tu cuenta,
                        solicitas servicios o interactúas dentro de la app.
                    </p>

                    {/* Tabla */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    <th className="text-left p-4 font-semibold text-gray-800">Categoría de datos</th>
                                    <th className="text-left p-4 font-semibold text-gray-800">Tipos de datos</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-700">

                                {/* a. Información de la cuenta */}
                                <tr className="border-b">
                                    <td className="p-4 font-semibold">
                                        a. Información de la cuenta
                                        <p className="font-normal text-gray-600 mt-1">
                                            Recopilamos datos cuando creas o actualizas tu cuenta de Auty.
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Nombre y apellidos.</li>
                                            <li>Correo electrónico.</li>
                                            <li>Número de teléfono.</li>
                                            <li>Dirección o localidad de operación (mecánicos).</li>
                                            <li>Contraseña cifrada.</li>
                                            <li>Foto de perfil (opcional).</li>
                                            <li>Preferencias de idioma y accesibilidad.</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* b. Datos del vehículo */}
                                <tr className="border-b">
                                    <td className="p-4 font-semibold">
                                        b. Información del vehículo
                                        <p className="font-normal text-gray-600 mt-1">
                                            Necesarios para identificar tu automóvil en caso de solicitar asistencia.
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Tipo de vehículo.</li>
                                            <li>Marca y color.</li>
                                            <li>Número de placas (opcional).</li>
                                            <li>Tipo de combustible.</li>
                                            <li>Configuraciones adicionales del conductor.</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* c. Identidad y verificación */}
                                <tr className="border-b">
                                    <td className="p-4 font-semibold">
                                        c. Verificación de identidad (mecánicos)
                                        <p className="font-normal text-gray-600 mt-1">
                                            Para garantizar confianza y seguridad entre usuarios.
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Documentos oficiales (INE, licencia, etc.).</li>
                                            <li>Comprobantes de oficio o certificaciones mecánicas.</li>
                                            <li>Selfies o fotografías para confirmar identidad.</li>
                                            <li>Información biométrica básica (si aplica).</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* d. Contenido generado por el usuario */}
                                <tr className="border-b">
                                    <td className="p-4 font-semibold">
                                        d. Contenido relacionado con el usuario
                                        <p className="font-normal text-gray-600 mt-1">
                                            Datos generados cuando interactúas dentro de la plataforma.
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Calificaciones y reseñas de mecánicos o conductores.</li>
                                            <li>Fotos o videos subidos para describir un problema del vehículo.</li>
                                            <li>Mensajes enviados dentro del sistema de asistencia.</li>
                                            <li>Encuestas o respuestas enviadas a Auty.</li>
                                        </ul>
                                    </td>
                                </tr>

                            </tbody>
                        </table>


                    </div>

                    {/* ============================
    2. DATOS RECOPILADOS CUANDO USAS NUESTROS SERVICIOS
============================ */}
                    <section className="">

                        <h3 className="text-2xl font-semibold mb-6 mt-10">2. Datos recopilados cuando usas nuestros servicios</h3>

                        <p className="text-gray-700 mb-6 max-w-3xl">
                            Auty recopila datos automáticamente cuando utilizas funciones como localizar mecánicos,
                            registrar un vehículo, solicitar asistencia o navegar dentro de la aplicación. Estos datos
                            ayudan a operar el servicio, mejorar la precisión y garantizar la seguridad de usuarios y mecánicos.
                        </p>

                        {/* TABLA */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b">
                                        <th className="text-left p-4 font-semibold text-gray-800">Categoría de datos</th>
                                        <th className="text-left p-4 font-semibold text-gray-800">Tipos de datos</th>
                                    </tr>
                                </thead>

                                <tbody className="text-gray-700">

                                    {/* a. Datos de ubicación */}
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">
                                            a. Datos de ubicación
                                            <p className="font-normal text-gray-600 mt-1">
                                                Utilizados para mostrar mecánicos cercanos, calcular distancias y mejorar la seguridad del servicio.
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Ubicación aproximada.</li>
                                                <li>Ubicación precisa.</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    {/* b. Información del servicio solicitado */}
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">
                                            b. Información del servicio solicitado
                                            <p className="font-normal text-gray-600 mt-1">
                                                Datos necesarios para coordinar la asistencia entre usuario y mecánico.
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Descripción del problema enviada por el usuario.</li>
                                                <li>Detalles del vehículo registrado en la app.</li>
                                                <li>Fecha, hora y ubicación de la solicitud.</li>
                                                <li>Distancia estimada y tiempos aproximados.</li>
                                                <li>Historial de asistencias previas.</li>
                                                <li>Fotografías opcionales sobre la falla del vehículo.</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    {/* c. Datos de uso */}
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">
                                            c. Datos de uso
                                            <p className="font-normal text-gray-600 mt-1">
                                                Información sobre tu navegación e interacción con la aplicación.
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Pantallas y secciones visitadas.</li>
                                                <li>Funciones utilizadas (mapa, registrar vehículo, solicitar asistencia).</li>
                                                <li>Fechas y horas de uso.</li>
                                                <li>Historial de búsquedas.</li>
                                                <li>Interacciones con mensajes, notificaciones o anuncios internos.</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    {/* d. Datos del dispositivo */}
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">
                                            d. Datos del dispositivo
                                            <p className="font-normal text-gray-600 mt-1">
                                                Información técnica del dispositivo utilizado para acceder a la app.
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Modelo de hardware del dispositivo.</li>
                                                <li>Sistema operativo y versión.</li>
                                                <li>Dirección IP y datos de conexión.</li>
                                                <li>Identificadores únicos del dispositivo.</li>
                                                <li>Idioma y configuración regional.</li>
                                                <li>Tipo de navegador (solo si se usa la versión web).</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    {/* e. Datos de comunicación */}
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold">
                                            e. Datos de comunicación
                                            <p className="font-normal text-gray-600 mt-1">
                                                Información generada cuando te comunicas con soporte o con un mecánico.
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Tipo de comunicación (chat, mensaje).</li>
                                                <li>Contenido de los mensajes enviados.</li>
                                                <li>Fecha y hora de la comunicación.</li>
                                            </ul>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </section>


                </section>





                {/* ============================
                    PRINCIPIOS DE PRIVACIDAD
                ============================ */}
                <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="container">
                        <div className="mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                                Principios de Privacidad de Auty
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                                La privacidad es uno de los pilares fundamentales de Auty. Nos comprometemos
                                a tratar tu información con claridad, responsabilidad y altos estándares de
                                seguridad en cada función que forma parte de nuestra plataforma.
                            </p>
                        </div>

                        <div
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {features.map((feature, index) => {
                                const color = colors[index % colors.length]
                                return (
                                    <div
                                        key={index}
                                        className=""
                                        variants={itemVariants}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <div className={`${color.bg} rounded-xl w-14 h-14 flex items-center justify-center mb-4`}>
                                            <feature.icon className={`h-7 w-7 ${color.icon}`} />
                                        </div>

                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>



                {/* ============================
                    CÓMO USAMOS TU INFORMACIÓN
                ============================ */}
                <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="container mx-auto">

                        <div className="mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Cómo usamos tu información
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                                Recopilamos y utilizamos datos únicamente para brindarte una experiencia segura,
                                confiable y personalizada. Aquí podrás conocer el propósito de cada tipo de
                                información que nos proporcionas.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-600 max-w-3xl leading-relaxed">
                            <p>
                                Nuestro Aviso de Privacidad detalla qué datos recopilamos y cómo los utilizamos
                                para funciones esenciales como localizar mecánicos, registrar tus vehículos,
                                mejorar tu seguridad y optimizar tu experiencia dentro de la aplicación.
                            </p>

                            <p>
                                A continuación encontrarás una guía clara para entender cómo interpretamos la
                                información y bajo qué fundamentos legales la tratamos. Estos principios aplican
                                a conductores y mecánicos registrados en Auty.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cómo leer esta tabla</h3>

                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>✔ indica que utilizamos esa información para el fin mencionado.</li>
                                <li>✔* indica que su uso es limitado fuera del Espacio Económico Europeo, Reino Unido o Suiza.</li>
                            </ul>

                            <h4 className="text-xl font-semibold mt-6 mb-3">Fundamento legal</h4>

                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Consentimiento (C):</strong> Cuando nos autorizas expresamente.</li>
                                <li><strong>Necesidad contractual (NC):</strong> Información necesaria para brindarte servicios de Auty.</li>
                                <li><strong>Interés legítimo (IL):</strong> Seguridad, prevención de fraudes y mejora del servicio.</li>
                                <li><strong>Obligación legal (OL):</strong> Cuando alguna normativa exige conservar o compartir ciertos datos.</li>
                            </ul>
                        </div>

                    </div>
                </section>


                {/* ============================
                    PREGUNTAS FRECUENTES
                ============================ */}
                <section className="py-20 px-4 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
                        Preguntas frecuentes
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {faqs.map((item, index) => (
                            <div key={index}>
                                <item.icon className="h-10 w-10 text-gray-700 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-pretty">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    )
}

export default PrivacyPages;
