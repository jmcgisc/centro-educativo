
import React from 'react';

const CourseChildren = () => {
    return (
        <section className="py-20 bg-stone-50 relative border-t border-gray-200">

            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado del Curso */}
                <div className="text-center mb-16">
                    <span className="bg-orange-100 text-orange-800 text-sm font-bold px-4 py-2 rounded-full border border-orange-200">
                        Curso Esencial
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mt-6 mb-6">
                        Los niños, niñas y jóvenes de hoy, <br /> <span className="text-hoja">¿cómo apoyarlos?</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Un curso teórico-práctico fundamentado en estudios científicos para entender los cambios generacionales y ofrecer alternativas basadas en el amor.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">

                    {/* Columna 1: Contenido y Temario (Izquierda) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Tarjeta de Enfoque */}
                        <div className="bg-white p-8 rounded-[--radius-organico] border-l-8 border-orange-300 shadow-sm">
                            <h3 className="text-2xl font-bold text-bosque mb-4">🧒 Enfoque Práctico</h3>
                            <p className="text-tierra mb-4">
                                No solo entenderemos el "por qué", sino el "cómo". El curso incluye:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg">
                                    <span className="text-orange-400 text-xl">🧬</span>
                                    <span className="font-medium text-tierra">Estudios Científicos</span>
                                </div>
                                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg">
                                    <span className="text-orange-400 text-xl">🧩</span>
                                    <span className="font-medium text-tierra">Ejemplos de Actividades</span>
                                </div>
                                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg">
                                    <span className="text-orange-400 text-xl">❤️</span>
                                    <span className="font-medium text-tierra">Trato con Amor</span>
                                </div>
                                <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-lg">
                                    <span className="text-orange-400 text-xl">💡</span>
                                    <span className="font-medium text-tierra">Nuevos Paradigmas</span>
                                </div>
                            </div>
                        </div>

                        {/* Temario (Timeline) */}
                        <div className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl">
                            <h3 className="text-2xl font-bold text-bosque mb-8 text-center">🌱 Ruta de Aprendizaje</h3>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-300 before:to-transparent">

                                {[
                                    { title: "Sesión 1", desc: "Cambios fisiológicos, psicoemocionales y neurológicos." },
                                    { title: "Sesión 2", desc: "La biocuántica, cambios genéticos." },
                                    { title: "Sesión 3", desc: "Cambios de paradigmas hacia una Nueva Educación." },
                                    { title: "Sesión 4", desc: "Del Homo Sapiens al Homo Consciens. Aprender a pensar sintiendo." }
                                ].map((sesion, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-300 bg-white text-orange-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                                            {index + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm transition-transform hover:-translate-y-1">
                                            <h4 className="font-bold text-bosque">{sesion.title}</h4>
                                            <p className="text-tierra text-sm mt-1">{sesion.desc}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Columna 2: Logística (Derecha) */}
                    <div className="space-y-6">

                        {/* Logística WhatsApp (Reusamos el estilo verde/WhatsApp) */}
                        <div className="bg-[#25D366]/5 p-6 rounded-3xl border border-[#25D366]/20">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">📱</span>
                                <h4 className="text-lg font-bold text-green-800">Organización</h4>
                            </div>
                            <p className="text-sm text-green-900 mb-4">
                                Se creará un <strong>grupo de WhatsApp</strong> exclusivo que permanecerá abierto 1 mes post-curso[cite: 133].
                            </p>
                            <ul className="text-sm text-green-800 space-y-2 bg-white/50 p-3 rounded-xl">
                                <li className="flex gap-2"><span>📎</span> Envío de Cuadernillo PDF</li>
                                <li className="flex gap-2"><span>🔗</span> Liga de Zoom / Ubicación</li>
                                <li className="flex gap-2"><span>💳</span> Datos Bancarios</li>
                            </ul>
                        </div>

                        {/* Material Didáctico */}
                        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">📖</span>
                                <h4 className="text-lg font-bold text-bosque">Cuadernillo Interactivo</h4>
                            </div>
                            <p className="text-sm text-tierra mb-3">
                                Diseñado con espacios para rellenar. No necesitas tomar tantos apuntes[cite: 130].
                            </p>
                            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded-lg italic">
                                * Tú decides si imprimirlo o usarlo digitalmente en tablet/laptop[cite: 131].
                            </div>
                        </div>

                        {/* Duración */}
                        <div className="bg-bosque text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
                            <h4 className="text-lg font-bold mb-3">⏱ Duración: 8 Horas</h4>
                            <ul className="text-sm space-y-3 text-green-100">
                                <li className="border-b border-white/20 pb-2">
                                    <strong>Online:</strong> 4 sesiones (Sábados o Mar/Jue).
                                </li>
                                <li>
                                    <strong>Presencial:</strong> 1 día intensivo (9 horas totales con 2 descansos de 30 min)[cite: 135].
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseChildren;