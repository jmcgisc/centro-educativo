import React from 'react';

const Costs = () => {
    return (
        <section className="py-20 bg-stone-50 border-t border-stone-200" id="costos">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">Inversión Educativa</h2>
                    <p className="text-tierra text-lg">Precios transparentes y opciones flexibles para tu formación.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Tarjeta 1: Cursos Estándar (Online/Presencial) */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-hoja to-bosque"></div>
                        <h3 className="text-2xl font-bold text-bosque mb-6">Cursos de 8 Horas</h3>

                        <div className="space-y-6">
                            {/* Online */}
                            <div className="bg-stone-50 p-4 rounded-xl">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-tierra">💻 Modalidad Online</h4>
                                    <span className="text-2xl font-bold text-bosque">$2,900</span>
                                </div>
                                <p className="text-sm text-gray-500">Opción de 4 pagos de $725 [cite: 403]</p>
                            </div>

                            {/* Presencial */}
                            <div className="bg-stone-50 p-4 rounded-xl">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-tierra">🤝 Modalidad Presencial</h4>
                                    <span className="text-2xl font-bold text-bosque">$3,900</span>
                                </div>
                                <p className="text-sm text-gray-500">Opción de 4 pagos de $975 [cite: 405]</p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta 2: Grupos y Certificación */}
                    <div className="space-y-8">

                        {/* Certificación P3000 */}
                        <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100 shadow-md relative">
                            <span className="absolute top-4 right-4 text-2xl">🎓</span>
                            <h3 className="text-xl font-bold text-amber-900 mb-2">Certificación Acompañantes P3000</h3>
                            <p className="text-sm text-amber-700 mb-4">Curso intensivo de 16 horas</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-amber-800">$7,700 MXN</span>
                                <span className="text-sm text-amber-600">por persona [cite: 420]</span>
                            </div>
                        </div>

                        {/* Grupos Presenciales */}
                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-md">
                            <h3 className="text-lg font-bold text-bosque mb-4">🏫 Grupos en tus Instalaciones</h3>
                            <ul className="space-y-3 text-sm text-tierra">
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span>Taller 8 Horas:</span>
                                    <strong className="text-bosque">$700 / persona [cite: 408]</strong>
                                </li>
                                <li className="flex justify-between">
                                    <span>Taller 4 Horas:</span>
                                    <strong className="text-bosque">$350 / persona [cite: 410]</strong>
                                </li>
                            </ul>
                            <p className="text-xs text-gray-400 mt-3 italic">* Mínimo 10 personas, máximo 30 [cite: 407]</p>
                        </div>

                    </div>
                </div>

                {/* Sección de Descuentos */}
                <div className="mt-12 bg-green-900 text-white p-8 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <h3 className="text-2xl font-bold mb-6 relative z-10">🎁 Descuentos por Pronto Pago</h3>

                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                            <span className="text-3xl font-bold text-green-300">-15%</span>
                            <p className="text-sm mt-1">Pagando 1 mes antes [cite: 412]</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                            <span className="text-3xl font-bold text-green-300">-10%</span>
                            <p className="text-sm mt-1">Pagando 2 semanas antes [cite: 412]</p>
                        </div>
                    </div>
                    <p className="text-xs text-green-200/60 mt-6 italic">
                        * Aplica a todos los cursos y talleres. A partir del día siguiente a las 2 semanas antes, el costo es sin descuento. [cite: 412]
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Costs;