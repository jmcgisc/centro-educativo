import React from 'react';

const Organization = () => {
    return (
        <section className="py-20 bg-bosque/5 relative overflow-hidden">
            {/* Elemento decorativo de fondo */}
            <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[50%]"></div>

            <div className="max-w-7xl mx-auto px-4 mt-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-bosque mb-4">
                        ¿Cómo están organizados los cursos?
                    </h2>
                    <p className="text-tierra max-w-2xl mx-auto">
                        Información detallada sobre horarios, duración y modalidades.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* Tarjeta Modalidad Online */}
                    <div className="bg-white p-8 rounded-[--radius-organico] shadow-lg border-l-8 border-hoja relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                            💻
                        </div>
                        <h3 className="text-2xl font-bold text-bosque mb-6 flex items-center gap-2">
                            Modalidad Online
                            <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full border border-green-200 uppercase tracking-wider">Vía Zoom + PDF</span>
                        </h3>

                        <div className="space-y-6 text-tierra">

                            {/* Horarios Estándar */}
                            <div>
                                <h4 className="font-bold text-bosque mb-2 flex items-center gap-2">
                                    🕒 Cursos Estándar (8 horas)
                                </h4>
                                <p className="text-sm mb-2">Distribuidas en sesiones de 2 horas:</p>
                                <ul className="text-sm space-y-2 bg-green-50 p-4 rounded-xl border border-green-100">
                                    <li className="flex justify-between">
                                        <span>Opción A (Sábados):</span>
                                        <span className="font-bold">09:00 - 11:00</span>
                                    </li>
                                    <li className="flex justify-between border-t border-green-200 pt-2">
                                        <span>Opción B (Mar y Jue):</span>
                                        <span className="font-bold">19:00 - 21:00</span>
                                    </li>
                                    <li className="text-xs text-right text-gray-500 mt-1 italic">* Horarios Ciudad de México</li>
                                </ul>
                            </div>

                            {/* Excepción P3000 */}
                            <div className="bg-crema p-4 rounded-xl border border-dashed border-tierra/30">
                                <h4 className="font-bold text-bosque text-sm mb-1">⚠️ Excepción: Acompañantes P3000</h4>
                                <ul className="text-sm space-y-1 list-disc pl-4">
                                    <li><strong>Duración:</strong> 16 horas totales.</li>
                                    <li><strong>Horario:</strong> 4 Sábados de 09:00 a 13:30.</li>
                                    <li><strong>Incluye:</strong> 30 minutos de descanso.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta Modalidad Presencial */}
                    <div className="bg-white p-8 rounded-[--radius-organico] shadow-lg border-r-8 border-tierra relative group hover:-translate-y-2 transition-transform duration-300 h-full">
                        <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                            🤝
                        </div>
                        <h3 className="text-2xl font-bold text-tierra mb-6 flex items-center gap-2">
                            Modalidad Presencial
                            <span className="text-xs bg-orange-100 text-orange-800 py-1 px-2 rounded-full border border-orange-200 uppercase tracking-wider">A la medida</span>
                        </h3>

                        <div className="space-y-6 text-tierra">
                            <div>
                                <h4 className="font-bold text-tierra mb-2">📍 Flexibilidad Total</h4>
                                <p className="text-sm leading-relaxed">
                                    Se realizan previa organización con los interesados. Nos adaptamos a la medida en cuanto al <strong>lugar, la hora, el día y su distribución</strong>.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                <h4 className="font-bold text-tierra mb-3 border-b border-orange-200 pb-2">Exclusivos Presenciales</h4>

                                <div className="mb-4">
                                    <strong className="block text-bosque text-sm">⭕ Taller de Danzas Circulares</strong>
                                    <p className="text-sm">Duración de 4 horas. Se organiza lugar y horario según solicitud o invitación.</p>
                                </div>

                                <div>
                                    <strong className="block text-bosque text-sm">🌲 Taller-Retiro Anual</strong>
                                    <p className="text-sm">Experiencia inmersiva de 4 días en un ambiente de naturaleza.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Organization;