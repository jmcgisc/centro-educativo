import React from 'react';

const RetiroDetail = () => {
    return (
        <section className="py-24 bg-stone-100 relative overflow-hidden">

            {/* Fondo inmersivo (Bosque abstracto) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-t from-green-900 via-green-800 to-transparent rounded-t-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado Emocional */}
                <div className="text-center mb-20">
                    <span className="bg-green-800 text-green-50 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                        🌲 Experiencia Vivencial
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-green-900 mt-8 mb-4 font-serif">
                        Taller-Retiro Anual
                    </h2>
                    <div className="max-w-3xl mx-auto relative">
                        <h3 className="text-2xl md:text-3xl text-green-700 italic font-medium leading-relaxed">
                            "Un espacio para re-conocer-me, <br /> un regalo que me-merezco"
                        </h3>
                        <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
                    </div>
                    <p className="mt-8 text-lg text-stone-600 max-w-2xl mx-auto">
                        4 días en medio del bosque. Teoría, reflexión, cuentos, dinámicas y Danzas Circulares para llegar al verdadero autoconocimiento.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Columna Izquierda: El Árbol del Conocimiento (Temario) */}
                    <div className="relative">
                        {/* Línea conectora del árbol */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 bg-stone-300 rounded-full -z-10"></div>

                        <div className="space-y-12">

                            {/* Sesión 1: TRONCO (El núcleo) */}
                            <div className="relative flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-amber-800 text-amber-100 rounded-full flex items-center justify-center text-4xl shadow-xl border-4 border-white z-10 mb-4 group-hover:scale-110 transition-transform">
                                    🪵
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-amber-800 w-full hover:shadow-2xl transition-shadow relative">
                                    <span className="absolute top-4 right-6 text-amber-900/20 font-bold text-4xl">01</span>
                                    <h4 className="text-amber-900 font-bold text-xl uppercase mb-2 tracking-wide">Sesión 1: Tronco</h4>
                                    <ul className="space-y-2 text-stone-600 text-sm">
                                        <li className="font-medium">• Parte 1: Mi Yo Cuántico</li>
                                        <li className="font-medium">• Parte 2: Conexión cerebro-corazón-tubo digestivo en coherencia</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Sesión 2: RAÍCES (La profundidad) */}
                            <div className="relative flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-stone-700 text-stone-100 rounded-full flex items-center justify-center text-4xl shadow-xl border-4 border-white z-10 mb-4 group-hover:scale-110 transition-transform">
                                    🌱
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-stone-700 w-full hover:shadow-2xl transition-shadow relative">
                                    <span className="absolute top-4 right-6 text-stone-900/20 font-bold text-4xl">02</span>
                                    <h4 className="text-stone-800 font-bold text-xl uppercase mb-2 tracking-wide">Sesión 2: Raíces</h4>
                                    <ul className="space-y-2 text-stone-600 text-sm">
                                        <li className="font-medium">• Parte 1: Mi cambio de pensamientos para cambiar mi realidad</li>
                                        <li className="font-medium">• Parte 2: Mi atención cambia mi realidad</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Sesión 3: COPA (La expansión) */}
                            <div className="relative flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-green-600 text-green-100 rounded-full flex items-center justify-center text-4xl shadow-xl border-4 border-white z-10 mb-4 group-hover:scale-110 transition-transform">
                                    🌳
                                </div>
                                <div className="bg-gradient-to-b from-green-50 to-white p-8 rounded-[2rem] shadow-lg border-b-8 border-green-600 w-full hover:shadow-2xl transition-shadow relative">
                                    <span className="absolute top-4 right-6 text-green-900/20 font-bold text-4xl">03</span>
                                    <h4 className="text-green-800 font-bold text-xl uppercase mb-2 tracking-wide">Sesión 3: Copa</h4>
                                    <ul className="space-y-2 text-green-900 text-sm">
                                        <li className="font-medium">• Parte 1: Mi conciencia crea todo</li>
                                        <li className="font-medium">• Parte 2: Mi nuevo Yo</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Columna Derecha: Logística All-Inclusive */}
                    <div className="space-y-8 lg:sticky lg:top-24">

                        {/* Tarjeta Principal */}
                        <div className="bg-green-900 text-green-50 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            {/* Hojas decorativas */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-green-800 rounded-bl-[100px] -z-0"></div>

                            <h3 className="text-3xl font-bold mb-6 relative z-10">🏕 Logística del Retiro</h3>

                            <div className="space-y-6 relative z-10">

                                <div className="flex gap-4">
                                    <div className="bg-green-800 p-3 rounded-xl h-fit">🗓</div>
                                    <div>
                                        <strong className="block text-lg">4 Días de Inmersión</strong>
                                        <p className="text-green-200 text-sm">Inicia día 1 (tarde) - Termina día 4 (comida).</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-green-800 p-3 rounded-xl h-fit">🛌</div>
                                    <div>
                                        <strong className="block text-lg">Hospedaje Incluido</strong>
                                        <p className="text-green-200 text-sm">Cabañas sencillas o dobles en lugar especial.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-green-800 p-3 rounded-xl h-fit">🍽</div>
                                    <div>
                                        <strong className="block text-lg">Alimentos Incluidos</strong>
                                        <p className="text-green-200 text-sm">Todas las comidas + Coffee Breaks.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-green-800 p-3 rounded-xl h-fit">🎁</div>
                                    <div>
                                        <strong className="block text-lg">Kit de Bienvenida</strong>
                                        <p className="text-green-200 text-sm">Cuadernillo, música y videos de Danzas.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Tarjeta de Pagos */}
                        <div className="bg-amber-100 p-8 rounded-3xl border-2 border-amber-200 text-center">
                            <h4 className="text-amber-900 font-bold text-xl mb-2">💰 Facilidades de Pago</h4>
                            <p className="text-amber-800 text-sm mb-4">
                                Queremos que vivas esta experiencia.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <span className="block text-amber-600 text-xs font-bold uppercase">Opción A</span>
                                    <strong className="text-amber-900">1 Pago Único</strong>
                                </div>
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <span className="block text-amber-600 text-xs font-bold uppercase">Opción B</span>
                                    <strong className="text-amber-900">10 Mensualidades</strong>
                                </div>
                            </div>

                            <p className="text-xs text-amber-700 italic">
                                * Aparta tu lugar con el primer pago (no reembolsable en caso de cancelación).
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default RetiroDetail;