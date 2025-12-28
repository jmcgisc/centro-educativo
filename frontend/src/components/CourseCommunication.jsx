import React from 'react';

const CourseCommunication = () => {
    return (
        <section className="py-20 bg-violet-50/30 relative overflow-hidden border-t border-gray-100">

            {/* Elementos decorativos (Burbujas de diálogo abstractas) */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-violet-100 rounded-tr-[50%] rounded-bl-[50%] rounded-tl-[20%] rounded-br-[50%] opacity-40 rotate-12 -z-10"></div>
            <div className="absolute bottom-10 right-10 w-52 h-52 bg-fuchsia-50 rounded-full opacity-50 blur-2xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 text-sm font-bold px-4 py-2 rounded-full border border-violet-200 mb-6">
                        <span className="text-lg">🗣️</span> El Arte de Hablar y Escuchar
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Comunicación <span className="text-violet-600">No Violenta</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        (Comunicación Consciente)<br />
                        Dejemos de usar los "NO" y aprendamos a conectar desde nuestros sentimientos y necesidades reales.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Columna Izquierda: El Camino de la Comunicación (Temario) */}
                    <div className="relative">
                        {/* Línea conectora central */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-violet-200 rounded-full hidden md:block"></div>

                        <div className="space-y-8">
                            {/* Sesión 1 */}
                            <div className="relative flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border-4 border-violet-100 text-violet-600 rounded-full flex items-center justify-center text-2xl shadow-sm z-10 group-hover:scale-110 transition-transform">
                                    🤔
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-violet-50 flex-1 hover:shadow-md transition-shadow">
                                    <h4 className="text-violet-900 font-bold text-sm uppercase mb-1">Sesión 1</h4>
                                    <p className="font-bold text-bosque">¿Qué es la CNV o Comunicación Asertiva?</p>
                                </div>
                            </div>

                            {/* Sesión 2 */}
                            <div className="relative flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border-4 border-violet-100 text-violet-600 rounded-full flex items-center justify-center text-2xl shadow-sm z-10 group-hover:scale-110 transition-transform">
                                    👣
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-violet-50 flex-1 hover:shadow-md transition-shadow">
                                    <h4 className="text-violet-900 font-bold text-sm uppercase mb-1">Sesión 2</h4>
                                    <p className="font-bold text-bosque">Los Pasos para la Comunicación Consciente.</p>
                                </div>
                            </div>

                            {/* Sesión 3 */}
                            <div className="relative flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border-4 border-violet-100 text-violet-600 rounded-full flex items-center justify-center text-2xl shadow-sm z-10 group-hover:scale-110 transition-transform">
                                    👁️
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-violet-50 flex-1 hover:shadow-md transition-shadow">
                                    <h4 className="text-violet-900 font-bold text-sm uppercase mb-1">Sesión 3</h4>
                                    <p className="font-bold text-bosque">Observación vs. Interpretación.</p>
                                </div>
                            </div>

                            {/* Sesión 4 */}
                            <div className="relative flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-white border-4 border-violet-100 text-violet-600 rounded-full flex items-center justify-center text-2xl shadow-sm z-10 group-hover:scale-110 transition-transform">
                                    ❤️
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-violet-50 flex-1 hover:shadow-md transition-shadow">
                                    <h4 className="text-violet-900 font-bold text-sm uppercase mb-1">Sesión 4</h4>
                                    <p className="font-bold text-bosque">Reconociendo sentimientos y necesidades.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Detalles (Tarjeta con borde violeta) */}
                    <div className="bg-white p-8 rounded-[--radius-organico] shadow-xl border-t-8 border-violet-400">
                        <h3 className="text-2xl font-bold text-bosque mb-6 flex items-center gap-2">
                            📋 Dinámica del Curso
                        </h3>

                        <div className="space-y-6 text-tierra">

                            <div className="bg-violet-50 p-4 rounded-xl">
                                <strong className="block text-violet-900 mb-1">📚 Teoría + Práctica</strong>
                                <p className="text-sm">Incluye ejemplos de actividades prácticas para aplicar en diferentes entornos sociales.</p>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-violet-500 font-bold text-xl">•</span>
                                    <div>
                                        <strong className="block text-bosque">Cuadernillo PDF Interactivo</strong>
                                        <p className="text-sm text-gray-600">Se envía antes para evitar tomar notas excesivas. Tú decides si imprimirlo.</p>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="text-violet-500 font-bold text-xl">•</span>
                                    <div>
                                        <strong className="block text-bosque">Grupo de WhatsApp</strong>
                                        <p className="text-sm text-gray-600">Abierto 1 mes post-curso. Aquí recibirás:</p>
                                        <div className="flex gap-2 mt-2">
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">Liga Zoom</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">Datos Pago</span>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">Material</span>
                                        </div>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="text-violet-500 font-bold text-xl">•</span>
                                    <div>
                                        <strong className="block text-bosque">Duración Real (Presencial)</strong>
                                        <p className="text-sm text-gray-600">Si tomas el intensivo de 1 día, son <strong>9 horas</strong> (incluye 2 descansos de 30 min).</p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CourseCommunication;