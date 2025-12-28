import React from 'react';

const CourseQuantum = () => {
    return (
        <section className="py-20 bg-indigo-50/30 relative overflow-hidden border-t border-indigo-100">

            {/* Decoración de fondo (Átomos / Conexiones abstractas) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-10 left-10 text-indigo-100 text-9xl opacity-20 animate-pulse-slow select-none">⚛️</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 text-sm font-bold px-4 py-2 rounded-full border border-indigo-200 mb-6 uppercase tracking-wider shadow-sm">
                        <span>✨</span> La Nueva Era Educativa
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Educación Cuántica <span className="text-indigo-600">Reconectiva</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        ¿Qué es y cómo la aplico? <br />
                        Descubre las propuestas de la "Re-evolución Educativa" y conecta con una enseñanza desde la conciencia.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Columna Izquierda: Temario (Línea de tiempo vertical "energética") */}
                    <div className="relative pl-8 border-l-2 border-indigo-200 space-y-8">

                        {/* Sesión 1 */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] top-4 w-6 h-6 bg-white border-4 border-indigo-400 rounded-full group-hover:scale-125 transition-transform shadow-sm"></span>
                            <div className="bg-white p-6 rounded-[2rem] rounded-tl-none shadow-md border border-indigo-50 hover:shadow-lg transition-all">
                                <h4 className="text-indigo-900 font-bold text-sm uppercase mb-1">Sesión 1</h4>
                                <p className="font-bold text-bosque text-lg">¿Qué es la Educación Cuántica?</p>
                            </div>
                        </div>

                        {/* Sesión 2 */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] top-4 w-6 h-6 bg-white border-4 border-indigo-400 rounded-full group-hover:scale-125 transition-transform shadow-sm"></span>
                            <div className="bg-white p-6 rounded-[2rem] rounded-tl-none shadow-md border border-indigo-50 hover:shadow-lg transition-all">
                                <h4 className="text-indigo-900 font-bold text-sm uppercase mb-1">Sesión 2</h4>
                                <p className="font-bold text-bosque text-lg">Propuestas de la Educación Cuántica.</p>
                            </div>
                        </div>

                        {/* Sesión 3 */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] top-4 w-6 h-6 bg-white border-4 border-indigo-400 rounded-full group-hover:scale-125 transition-transform shadow-sm"></span>
                            <div className="bg-white p-6 rounded-[2rem] rounded-tl-none shadow-md border border-indigo-50 hover:shadow-lg transition-all">
                                <h4 className="text-indigo-900 font-bold text-sm uppercase mb-1">Sesión 3</h4>
                                <p className="font-bold text-bosque text-lg">Características del docente en la Re-evolución Educativa.</p>
                            </div>
                        </div>

                        {/* Sesión 4 */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] top-4 w-6 h-6 bg-indigo-600 border-4 border-indigo-200 rounded-full group-hover:scale-125 transition-transform shadow-sm"></span>
                            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-[2rem] rounded-tl-none shadow-lg text-white transform hover:translate-x-2 transition-transform">
                                <h4 className="text-indigo-200 font-bold text-sm uppercase mb-1">Sesión 4 · Cierre</h4>
                                <p className="font-bold text-white text-lg">Del Homo Sapiens al Homo Consciens.</p>
                            </div>
                        </div>

                    </div>

                    {/* Columna Derecha: Detalles Prácticos (Tarjeta flotante) */}
                    <div className="bg-white p-8 rounded-[3rem] shadow-2xl border-t-8 border-indigo-500 relative overflow-hidden">
                        {/* Fondo sutil interno */}
                        <div className="absolute inset-0 bg-indigo-50 opacity-50 pattern-grid-lg"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-bosque mb-6 flex items-center gap-3">
                                <span className="text-3xl">🔭</span> Metodología
                            </h3>

                            <div className="space-y-6">

                                {/* Bloque Material */}
                                <div className="flex gap-4 items-start">
                                    <div className="bg-indigo-100 p-2 rounded-lg text-indigo-700 mt-1">
                                        📖
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-bosque">Cuadernillo Interactivo</h4>
                                        <p className="text-sm text-tierra">Se envía en PDF antes del curso. Diseñado con espacios para notas.</p>
                                    </div>
                                </div>

                                {/* Bloque WhatsApp */}
                                <div className="flex gap-4 items-start">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-700 mt-1">
                                        📲
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-bosque">Seguimiento Grupal</h4>
                                        <p className="text-sm text-tierra">
                                            Grupo de WhatsApp abierto por 1 mes. <br />
                                            <span className="text-xs text-gray-500">Incluye envío de links Zoom, ubicación y datos de pago.</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Bloque Horarios */}
                                <div className="bg-indigo-900 text-indigo-50 p-5 rounded-2xl shadow-inner mt-4">
                                    <h4 className="font-bold text-sm mb-3 uppercase tracking-wider border-b border-indigo-700 pb-2">⏱ Duración: 8 Horas</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>💻 Online:</span>
                                            <span className="font-bold">4 Sesiones</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>🤝 Presencial:</span>
                                            <span className="font-bold">1 Día (9h total)</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-indigo-300 mt-2 text-center italic">
                                        *Presencial incluye 2 descansos de 30 min.
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

export default CourseQuantum;