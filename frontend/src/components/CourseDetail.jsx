import React from 'react';

const CourseDetail = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado del Curso */}
                <div className="text-center mb-16">
                    <span className="bg-green-100 text-bosque text-sm font-bold px-4 py-2 rounded-full border border-green-200">
                        Curso Destacado
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mt-6 mb-6">
                        Concientización de padres de familia y profesores
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Un viaje teórico-práctico de 8 horas para entender los cambios de la niñez y juventud actuales, basados en estudios científicos. [cite: 127]
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">

                    {/* Columna 1: Metodología (Izquierda) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Tarjeta de Dinámica */}
                        <div className="bg-crema p-8 rounded-[--radius-organico] border-l-8 border-hoja shadow-sm">
                            <h3 className="text-2xl font-bold text-bosque mb-4">🧩 Dinámica del Curso</h3>
                            <p className="text-tierra mb-4">
                                No es solo teoría. La mayor parte incluye ejercicios prácticos en forma de:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {['Dinámicas vivenciales', 'Juegos', 'Videos', 'Discusión y Opinión'].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                                        <span className="text-hoja text-xl">✓</span>
                                        <span className="font-medium text-tierra">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-4 italic">
                                * [cite: 128] Incluye teoría y en su mayoría ejercicios prácticos.
                            </p>
                        </div>

                        {/* Sección de Temario (Timeline) */}
                        <div className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl">
                            <h3 className="text-2xl font-bold text-bosque mb-8 text-center">🍃 Temario del Viaje</h3>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-hoja before:to-transparent">

                                {[
                                    { title: "Sesión 1", desc: "Bienvenida, presentación, organización. Los niños, niñas y jóvenes de hoy y mañana." },
                                    { title: "Sesión 2", desc: "Del Homo Sapiens al Homo Consciens." },
                                    { title: "Sesión 3", desc: "Cultura de Paz y Comunicación No Violenta, una mirada general." },
                                    { title: "Sesión 4", desc: "Los Cuatro Acuerdos de Miguel Ruiz, un viaje de introspección." }
                                ].map((sesion, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-hoja bg-white text-hoja shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                            {index + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                                            <h4 className="font-bold text-bosque">{sesion.title}</h4>
                                            <p className="text-tierra text-sm mt-1">{sesion.desc}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <p className="text-center text-xs text-gray-400 mt-8">[cite: 120, 122, 123, 124]</p>
                        </div>
                    </div>

                    {/* Columna 2: Logística y Materiales (Derecha / Sticky) */}
                    <div className="space-y-6">

                        {/* Materiales */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                            <div className="text-4xl mb-4">📚</div>
                            <h4 className="text-xl font-bold text-bosque mb-2">Material Incluido</h4>
                            <p className="text-sm text-tierra mb-4">
                                Recibirás un <strong>cuadernillo de trabajo interactivo en PDF</strong> antes del curso. [cite: 129]
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                                <li>Diseñado para rellenar y tomar notas (menos apuntes, más atención). [cite: 130]</li>
                                <li>Tú decides si imprimirlo o usarlo en tablet/laptop. [cite: 132]</li>
                            </ul>
                        </div>

                        {/* Seguimiento WhatsApp */}
                        <div className="bg-[#25D366]/10 p-6 rounded-3xl border border-[#25D366]/30">
                            <div className="text-4xl mb-4">📱</div>
                            <h4 className="text-xl font-bold text-green-800 mb-2">Comunidad WhatsApp</h4>
                            <p className="text-sm text-green-900 mb-4">
                                Al inscribirte, te unimos a un grupo exclusivo donde recibirás:
                            </p>
                            <ul className="text-sm text-green-800 space-y-1 mb-4">
                                <li>📍 Ligas de Zoom o Ubicación GPS</li>
                                <li>💰 Datos para pagos</li>
                                <li>📂 Cuadernillo PDF</li>
                            </ul>
                            <div className="bg-white/60 p-3 rounded-lg text-xs text-green-900 font-semibold text-center">
                                ✨ El grupo queda abierto 1 mes post-curso para seguimiento y dudas. [cite: 133]
                            </div>
                        </div>

                        {/* Nota sobre Modalidad Presencial */}
                        <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                            <h4 className="text-lg font-bold text-orange-900 mb-2">⚡ Nota Presencial</h4>
                            <p className="text-sm text-orange-800">
                                Si tomas este curso en modalidad intensiva de un solo día, contempla que dura <strong>9 horas</strong> en total, ya que realizamos dos descansos de 30 minutos para recargar energía. [cite: 135]
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseDetail;