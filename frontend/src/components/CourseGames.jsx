import React from 'react';

const CourseGames = () => {
    return (
        <section className="py-20 bg-amber-50/50 relative overflow-hidden border-t border-gray-100">

            {/* Decoración de fondo (Piezas de rompecabezas abstractas) */}
            <div className="absolute top-10 left-0 w-32 h-32 bg-amber-200 rounded-r-3xl opacity-30 rotate-12 -z-10"></div>
            <div className="absolute bottom-10 right-0 w-40 h-40 bg-orange-200 rounded-l-full opacity-30 -rotate-12 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full border border-amber-200 mb-6 uppercase tracking-wider shadow-sm">
                        <span>🤼</span> Diversión con Propósito
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Juegos Cooperativos en el Aula,<br />
                        <span className="text-amber-600">el Hogar y la Comunidad</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Descubre por qué la cooperación es más inteligente (¡y divertida!) que la competencia.
                        <br />Teoría + Mucha Práctica para unir grupos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Columna Izquierda: Temario (Enfocado en la Práctica) */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-amber-900 text-center md:text-left mb-2">🎲 Dinámica de las Sesiones</h3>
                        <p className="text-tierra mb-6">Este es nuestro curso más vivencial. Menos apuntes, más acción.</p>

                        <div className="relative border-l-4 border-amber-300 pl-8 space-y-8 py-2">

                            {/* Sesión 1 */}
                            <div className="relative">
                                <span className="absolute -left-[45px] top-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow">1</span>
                                <div className="bg-white p-5 rounded-2xl shadow-md border-b-4 border-amber-200 transform hover:scale-105 transition-transform">
                                    <h4 className="font-bold text-bosque text-lg">La Base Teórica</h4>
                                    <p className="text-amber-700 font-medium">¿Qué son? Cooperación vs. Competencia.</p>
                                </div>
                            </div>

                            {/* Sesiones 2, 3 y 4 (Agrupadas visualmente) */}
                            <div className="relative">
                                <span className="absolute -left-[45px] top-10 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-transparent"></span>

                                {[2, 3, 4].map((num) => (
                                    <div key={num} className="relative mb-4 last:mb-0">
                                        <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-amber-400 rounded-full flex items-center justify-center text-amber-600 font-bold text-sm">{num}</span>
                                        <div className="bg-gradient-to-r from-white to-amber-50 p-4 rounded-xl border border-amber-100 flex justify-between items-center group hover:bg-amber-100 transition-colors">
                                            <div>
                                                <h4 className="font-bold text-tierra">Sesión Práctica {num - 1}</h4>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Juego + Reflexión Grupal</p>
                                            </div>
                                            <span className="text-2xl group-hover:rotate-12 transition-transform">🧩</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Tarjeta Lúdica de Detalles */}
                    <div className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-double border-amber-100 rotate-1 hover:rotate-0 transition-transform duration-500">

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-bosque">🎒 Kit del Participante</h3>
                            <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Tarjeta Material */}
                            <div className="bg-orange-50 p-4 rounded-2xl text-center">
                                <div className="text-3xl mb-2">📒</div>
                                <h4 className="font-bold text-orange-900 text-sm">Cuadernillo PDF</h4>
                                <p className="text-xs text-orange-800 mt-1 leading-snug">
                                    Interactivo. <br />Incluido en el costo.
                                </p>
                            </div>

                            {/* Tarjeta WhatsApp */}
                            <div className="bg-green-50 p-4 rounded-2xl text-center">
                                <div className="text-3xl mb-2">📲</div>
                                <h4 className="font-bold text-green-900 text-sm">Grupo WA</h4>
                                <p className="text-xs text-green-800 mt-1 leading-snug">
                                    Seguimiento por 1 mes.<br />Links y Pagos.
                                </p>
                            </div>

                            {/* Tarjeta Duración */}
                            <div className="col-span-1 sm:col-span-2 bg-bosque text-white p-5 rounded-2xl flex items-center justify-between shadow-lg">
                                <div>
                                    <h4 className="font-bold text-lg">⏱ 8-9 Horas</h4>
                                    <p className="text-xs text-green-200">Dependiendo modalidad</p>
                                </div>
                                <div className="text-right text-xs space-y-1">
                                    <div className="bg-white/20 px-2 py-1 rounded">Online: 4 Sábados</div>
                                    <div className="bg-white/20 px-2 py-1 rounded">Presencial: 1 Día</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-xs text-gray-400 mt-6 italic">
                            "El juego es la forma más elevada de investigación" - Einstein
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CourseGames;