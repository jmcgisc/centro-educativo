import React from 'react';

const CourseInnerPeace = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">

            {/* Decoración de fondo (Nebulosa / Espiritualidad) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

            {/* Estrellas sutiles */}
            <div className="absolute top-20 left-20 text-purple-200 text-4xl animate-pulse">✨</div>
            <div className="absolute bottom-40 right-20 text-purple-200 text-2xl animate-pulse delay-700">✨</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 text-sm font-bold px-4 py-2 rounded-full border border-purple-200 mb-6 uppercase tracking-wider shadow-sm">
                        <span>⚔️</span> El Camino del Héroe
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Paz <span className="text-purple-600">Interior</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Un viaje de autoconocimiento para adolescentes, adultos y adultos mayores. <br />
                        Despierta a tu <strong>Guerrero Espiritual</strong> y cruza el umbral hacia la transformación.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Columna Izquierda: El Mapa del Viaje (Temario Visual) */}
                    <div className="relative">
                        {/* Línea del camino serpenteante */}
                        <div className="absolute left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-200 via-indigo-200 to-slate-200 rounded-full"></div>

                        <div className="space-y-10 relative">

                            {/* Sesión 1 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border-4 border-purple-200 text-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg z-10 group-hover:scale-110 transition-transform">
                                    🧘
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-purple-300 flex-1 hover:shadow-md transition-all">
                                    <h4 className="text-purple-900 font-bold text-xs uppercase mb-1">El Llamado</h4>
                                    <p className="font-bold text-bosque">¿Qué es la Paz Interior?</p>
                                </div>
                            </div>

                            {/* Sesión 2 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border-4 border-indigo-200 text-indigo-600 rounded-full flex items-center justify-center text-2xl shadow-lg z-10 group-hover:scale-110 transition-transform">
                                    🛡️
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-indigo-300 flex-1 hover:shadow-md transition-all">
                                    <h4 className="text-indigo-900 font-bold text-xs uppercase mb-1">Los Arquetipos</h4>
                                    <p className="font-bold text-bosque">El Guerrero, el Mago y el Camino del Héroe.</p>
                                </div>
                            </div>

                            {/* Sesión 3 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-gray-800 border-4 border-gray-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg z-10 group-hover:scale-110 transition-transform">
                                    🌑
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-gray-600 flex-1 hover:shadow-md transition-all">
                                    <h4 className="text-gray-600 font-bold text-xs uppercase mb-1">La Caverna</h4>
                                    <p className="font-bold text-bosque">Identificando mi sombra para transformarla.</p>
                                </div>
                            </div>

                            {/* Sesión 4 */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 border-4 border-yellow-200 text-white rounded-full flex items-center justify-center text-2xl shadow-lg z-10 group-hover:scale-110 transition-transform">
                                    🦋
                                </div>
                                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-5 rounded-2xl shadow-lg text-white flex-1 hover:translate-x-2 transition-transform">
                                    <h4 className="text-purple-200 font-bold text-xs uppercase mb-1">El Retorno</h4>
                                    <p className="font-bold">9 Requisitos para la Transformación.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Columna Derecha: Herramientas y Logística */}
                    <div className="space-y-6">

                        {/* Tarjeta de Herramientas Místicas */}
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-purple-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400"></div>

                            <h3 className="text-2xl font-bold text-bosque mb-6">🔮 Herramientas del Curso</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-purple-50 rounded-xl">
                                    <div className="text-3xl mb-2">🧘‍♀️</div>
                                    <span className="font-semibold text-purple-900 text-sm">Meditaciones</span>
                                </div>
                                <div className="p-4 bg-indigo-50 rounded-xl">
                                    <div className="text-3xl mb-2">🧠</div>
                                    <span className="font-semibold text-indigo-900 text-sm">Imaginación Activa</span>
                                </div>
                                <div className="p-4 bg-slate-100 rounded-xl">
                                    <div className="text-3xl mb-2">📝</div>
                                    <span className="font-semibold text-slate-700 text-sm">Reflexiones</span>
                                </div>
                                <div className="p-4 bg-amber-50 rounded-xl">
                                    <div className="text-3xl mb-2">🗝️</div>
                                    <span className="font-semibold text-amber-800 text-sm">Tips Prácticos</span>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta de Organización */}
                        <div className="bg-slate-800 text-slate-200 p-8 rounded-3xl relative">
                            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="bg-white/10 p-1 rounded">ℹ️</span> Logística
                            </h4>

                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span>⏱ Duración:</span>
                                    <span className="text-white font-bold">8 Horas</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span>👥 Público:</span>
                                    <span className="text-white">Adolescentes y Adultos</span>
                                </li>
                                <li>
                                    <div className="flex gap-2 mb-1">
                                        <span>📲</span> <strong>Grupo WhatsApp:</strong>
                                    </div>
                                    <p className="text-xs opacity-70 pl-6">
                                        Se abre al inicio y dura 1 mes post-curso. <br />
                                        Envío de dirección/Zoom y datos bancarios.
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-6 text-xs text-center bg-white/5 p-2 rounded-lg italic">
                                * Presencial: 9 horas totales (con descansos)
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CourseInnerPeace;