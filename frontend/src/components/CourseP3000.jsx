import React from 'react';

const CourseP3000 = () => {
    return (
        <section className="py-20 bg-yellow-50/40 relative overflow-hidden border-t border-yellow-100">

            {/* Decoración de fondo (Brillo solar / Iluminación) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado Premium */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 text-sm font-bold px-6 py-2 rounded-full border border-amber-200 mb-6 shadow-sm ring-1 ring-amber-200/50">
                        <span className="text-lg">🏅</span> Certificación Oficial
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Acompañantes <span className="text-amber-600">Pedagooogía 3000</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Un viaje profundo de <strong>16 horas</strong> para certificarte como Acompañante Consciente. <br />
                        Basado en la investigación científica de Noemí Paymal y los cambios evolutivos actuales.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Columna Izquierda: El Temario "Flor de 7 Pétalos" (Ocupa 7 columnas) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-amber-50 relative overflow-hidden">
                            {/* Adorno de esquina */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10"></div>

                            <h3 className="text-2xl font-bold text-bosque mb-8 flex items-center gap-3">
                                🌻 Temario de la Certificación
                            </h3>

                            <div className="space-y-6 relative">
                                {/* Línea conectora */}
                                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-amber-100"></div>

                                {/* Sesión 1 */}
                                <div className="relative flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white border-2 border-amber-400 rounded-full flex items-center justify-center text-amber-600 font-bold z-10 shadow-sm group-hover:scale-110 transition-transform">
                                        1
                                    </div>
                                    <div className="flex-1 bg-amber-50/50 p-4 rounded-xl border-l-4 border-amber-400 hover:bg-amber-50 transition-colors">
                                        <h4 className="font-bold text-amber-900">Cerebro CIAAR</h4>
                                        <p className="text-sm text-tierra">Y características evolutivas de niños, niñas y jóvenes.</p>
                                    </div>
                                </div>

                                {/* Sesión 2 */}
                                <div className="relative flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white border-2 border-red-400 rounded-full flex items-center justify-center text-red-500 font-bold z-10 shadow-sm group-hover:scale-110 transition-transform">
                                        2
                                    </div>
                                    <div className="flex-1 bg-red-50/50 p-4 rounded-xl border-l-4 border-red-400 hover:bg-red-50 transition-colors">
                                        <h4 className="font-bold text-red-900">La Escuela de los 7 Pétalos</h4>
                                        <p className="text-sm text-tierra">El corazón de la propuesta pedagógica.</p>
                                    </div>
                                </div>

                                {/* Sesión 3 */}
                                <div className="relative flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-500 font-bold z-10 shadow-sm group-hover:scale-110 transition-transform">
                                        3
                                    </div>
                                    <div className="flex-1 bg-blue-50/50 p-4 rounded-xl border-l-4 border-blue-400 hover:bg-blue-50 transition-colors">
                                        <h4 className="font-bold text-blue-900">33 Herramientas Pedagógicas</h4>
                                        <p className="text-sm text-tierra">Recursos prácticos para el acompañamiento.</p>
                                    </div>
                                </div>

                                {/* Sesión 4 */}
                                <div className="relative flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white border-2 border-green-400 rounded-full flex items-center justify-center text-green-600 font-bold z-10 shadow-sm group-hover:scale-110 transition-transform">
                                        4
                                    </div>
                                    <div className="flex-1 bg-green-50/50 p-4 rounded-xl border-l-4 border-green-400 hover:bg-green-50 transition-colors">
                                        <h4 className="font-bold text-green-900">Cultura de Paz</h4>
                                        <p className="text-sm text-tierra">Integración y aplicación final.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Detalles Intensivos (Ocupa 5 columnas) */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Tarjeta Dorada de Duración */}
                        <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-8 rounded-[--radius-organico] shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-20 text-8xl rotate-12 group-hover:rotate-0 transition-transform duration-700">📜</div>

                            <h3 className="text-2xl font-bold mb-2">Formato Extendido</h3>
                            <p className="text-amber-100 text-sm mb-6 border-b border-amber-400/50 pb-4">
                                Este curso requiere mayor profundidad y práctica.
                            </p>

                            <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                                <span className="text-3xl">⏱</span>
                                <div>
                                    <strong className="block text-xl">16 Horas Totales</strong>
                                    <span className="text-xs text-amber-50">El doble de contenido estándar</span>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2 text-sm text-amber-50">
                                <p className="flex justify-between">
                                    <span>📅 Online:</span>
                                    <strong>4 Sábados</strong>
                                </p>
                                <p className="flex justify-between">
                                    <span>⏳ Sesiones:</span>
                                    <strong>4 horas c/u</strong>
                                </p>
                                <p className="text-xs text-center mt-2 bg-black/10 rounded py-1">
                                    *Incluye descanso de 30 min por sesión
                                </p>
                            </div>
                        </div>

                        {/* Tarjeta Logística Estándar */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    📲
                                </div>
                                <h4 className="font-bold text-bosque">Kit de Organización</h4>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✔</span>
                                    <span><strong>Grupo WhatsApp:</strong> Seguimiento 1 mes post-curso. Envío de ligas y datos bancarios.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✔</span>
                                    <span><strong>Cuadernillo PDF:</strong> Interactivo para rellenar (envío previo).</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CourseP3000;