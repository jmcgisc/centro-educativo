import React from 'react';

const CoursePeace = () => {
    return (
        <section className="py-20 bg-sky-50/30 relative overflow-hidden">

            {/* Decoración de fondo: Símbolo de Paz abstracto (Círculo suave) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-40 blur-3xl -z-10"></div>

            {/* Elementos flotantes (Palomas abstractas) */}
            <div className="absolute top-20 right-10 text-sky-100 text-9xl opacity-20 rotate-12 select-none">🕊️</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-sm font-bold px-4 py-2 rounded-full border border-sky-200 mb-6 uppercase tracking-wider">
                        <span>☮️</span> Armonía y Convivencia
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Aplicando la <span className="text-sky-600">Cultura de Paz</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Un curso para transformar el aula, el hogar y la comunidad. <br />
                        Aprendamos a generar espacios sanos comenzando por la paz interior.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Columna Izquierda: Temario (Diseño de Pétalos/Círculos) */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-sky-900 text-center mb-4">Camino hacia la Paz</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Sesión 1", topic: "¿Qué es la Cultura de Paz?", icon: "🌱" },
                                { title: "Sesión 2", topic: "Paz Individual, Social y Planetaria", icon: "🌍" },
                                { title: "Sesión 3", topic: "Procesos de Paz (Negociación y Mediación)", icon: "🤝" },
                                { title: "Sesión 4", topic: "Herramientas Pedagógicas", icon: "🛠️" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-[--radius-organico] shadow-lg border-b-4 border-sky-200 hover:-translate-y-1 transition-transform group">
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                                    <h4 className="font-bold text-sky-800 text-sm mb-1">{item.title}</h4>
                                    <p className="font-bold text-bosque text-lg leading-tight">{item.topic}</p>
                                </div>
                            ))}
                        </div>

                        {/* Nota sobre el enfoque */}
                        <div className="bg-white/60 p-6 rounded-3xl border border-white backdrop-blur-sm">
                            <p className="text-tierra text-sm italic text-center">
                                "Incluye teoría y actividades prácticas para aplicar en todos tus entornos sociales."
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha: Detalles Prácticos (Tarjeta Flotante) */}
                    <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl relative border border-gray-50">
                        {/* Adorno de esquina */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-[3rem] -z-10"></div>

                        <h3 className="text-2xl font-bold text-bosque mb-8 flex items-center gap-3">
                            <span className="bg-sky-100 p-2 rounded-full text-sky-600 text-xl">📝</span>
                            Detalles del Curso
                        </h3>

                        <div className="space-y-8">

                            {/* Bloque Logística */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-xl">
                                    📱
                                </div>
                                <div>
                                    <h4 className="font-bold text-bosque">Organización Vía WhatsApp</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Grupo exclusivo abierto 1 mes post-curso.
                                    </p>
                                    <ul className="text-xs text-gray-500 mt-2 space-y-1 list-disc pl-4">
                                        <li>Envío de liga Zoom o Dirección</li>
                                        <li>Datos Bancarios</li>
                                        <li>Seguimiento de dudas</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bloque Material */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 text-xl">
                                    📘
                                </div>
                                <div>
                                    <h4 className="font-bold text-bosque">Cuadernillo PDF Interactivo</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Diseñado para rellenar. Se envía antes para evitar exceso de apuntes.
                                    </p>
                                    <p className="text-xs text-orange-800 mt-1 font-medium bg-orange-50 px-2 py-1 rounded inline-block">
                                        Material incluido en el costo
                                    </p>
                                </div>
                            </div>

                            {/* Bloque Horario */}
                            <div className="flex gap-4 border-t border-gray-100 pt-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xl">
                                    ⏳
                                </div>
                                <div>
                                    <h4 className="font-bold text-bosque">Duración: 8 Horas</h4>
                                    <div className="text-sm text-gray-600 mt-2 grid grid-cols-2 gap-4">
                                        <div>
                                            <strong className="block text-sky-700 text-xs uppercase">Online</strong>
                                            4 sesiones
                                        </div>
                                        <div>
                                            <strong className="block text-sky-700 text-xs uppercase">Presencial</strong>
                                            1 día (9h con descansos)
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoursePeace;