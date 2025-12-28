import React from 'react';

const CourseDances = () => {
    return (
        <section className="py-20 bg-rose-50/40 relative overflow-hidden border-t border-rose-100">

            {/* Decoración de fondo (Círculos concéntricos - La Ronda) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-rose-200 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-rose-100 rounded-full opacity-30"></div>

            {/* Notas musicales flotantes */}
            <div className="absolute top-20 left-10 text-rose-300 text-6xl opacity-50 animate-bounce delay-700">♪</div>
            <div className="absolute bottom-20 right-10 text-rose-300 text-8xl opacity-30 animate-pulse">♫</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-sm font-bold px-4 py-2 rounded-full border border-rose-200 mb-6 uppercase tracking-wider shadow-sm">
                        <span>💃</span> Movimiento y Conexión
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Danzas <span className="text-rose-600">Circulares</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Un taller para todas las edades. <br />
                        Conecta con tu niño interior, pierde el miedo a equivocarte y celebra que <span className="text-rose-600 font-semibold">en el círculo todos somos iguales.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Columna Izquierda: La Experiencia (Diseño Visual) */}
                    <div className="relative">
                        {/* Círculo central con texto */}
                        <div className="bg-white rounded-full p-8 md:p-12 shadow-xl border-4 border-rose-100 text-center relative z-10 aspect-square flex flex-col justify-center items-center max-w-md mx-auto hover:scale-105 transition-transform duration-500">
                            <span className="text-6xl mb-4">⭕</span>
                            <h3 className="text-2xl font-bold text-bosque mb-2">Todo Público</h3>
                            <p className="text-sm text-tierra leading-relaxed">
                                Niños, jóvenes, adultos mayores y personas con capacidades diferentes.
                            </p>
                            <div className="mt-6 bg-rose-50 px-4 py-2 rounded-full text-rose-700 font-bold text-sm">
                                ¡No se requiere experiencia!
                            </div>
                        </div>

                        {/* Satélites (Beneficios) */}
                        <div className="absolute top-0 right-10 bg-white p-3 rounded-2xl shadow-md text-xs font-bold text-rose-600 rotate-12 hidden md:block">
                            Auto-conocimiento ✨
                        </div>
                        <div className="absolute bottom-10 left-0 bg-white p-3 rounded-2xl shadow-md text-xs font-bold text-rose-600 -rotate-6 hidden md:block">
                            Diversión pura 🎈
                        </div>
                        <div className="absolute bottom-0 right-20 bg-white p-3 rounded-2xl shadow-md text-xs font-bold text-rose-600 rotate-3 hidden md:block">
                            Ejercicio suave 🌿
                        </div>
                    </div>

                    {/* Columna Derecha: Detalles Prácticos */}
                    <div className="space-y-6">

                        <div className="bg-white p-8 rounded-[--radius-organico] shadow-lg border-l-8 border-rose-400">
                            <h3 className="text-2xl font-bold text-bosque mb-6">🎶 Dinámica del Taller</h3>

                            <ul className="space-y-4 text-tierra">
                                <li className="flex gap-4">
                                    <div className="bg-rose-100 w-10 h-10 rounded-full flex items-center justify-center text-rose-600 shrink-0">1</div>
                                    <div>
                                        <strong className="block text-bosque">Teoría y Práctica</strong>
                                        <p className="text-sm">Pequeñas partes teóricas y práctica de danzas de diferentes estilos y países.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-rose-100 w-10 h-10 rounded-full flex items-center justify-center text-rose-600 shrink-0">2</div>
                                    <div>
                                        <strong className="block text-bosque">Material Digital</strong>
                                        <p className="text-sm">En el grupo de WhatsApp recibirás la <strong>música y videos</strong> de las danzas aprendidas.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Tarjeta de Organización */}
                        <div className="bg-rose-900 text-rose-50 p-6 rounded-3xl relative overflow-hidden">
                            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-500 rounded-full opacity-50 blur-xl"></div>

                            <div className="flex justify-between items-start border-b border-rose-700 pb-4 mb-4">
                                <div>
                                    <h4 className="font-bold text-lg">⏱ Duración: 4 Horas</h4>
                                    <p className="text-xs text-rose-200">Formato intensivo y práctico</p>
                                </div>
                                <div className="text-3xl">⏳</div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <div className="mt-1">📱</div>
                                <div>
                                    <strong className="block text-sm">Comunidad WhatsApp</strong>
                                    <p className="text-xs text-rose-200 leading-snug">
                                        Grupo abierto 1 mes post-curso para dudas, comentarios y envío de material multimedia.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CourseDances;