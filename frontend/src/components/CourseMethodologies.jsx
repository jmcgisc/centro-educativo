import React from 'react';

const CourseMethodologies = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">

            {/* Decoración de fondo (Formas abstractas tipo "herramientas") */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-20 right-10 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 text-sm font-bold px-4 py-2 rounded-full border border-teal-200 mb-6">
                        <span className="text-lg">🛠</span> Nuevas Herramientas
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-6">
                        Metodologías para el <span className="text-teal-600">Tercer Milenio</span>
                    </h2>
                    <p className="text-xl text-tierra max-w-3xl mx-auto leading-relaxed">
                        Descubre las nuevas formas de enseñanza-aprendizaje basadas en ciencia. <br />
                        <span className="text-teal-700 font-medium">Teoría + Ejemplos Prácticos</span> para aplicar hoy mismo.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Columna Izquierda: El Temario (Ocupa 7 columnas) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-stone-50 p-8 rounded-[3rem] border border-stone-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-bosque mb-8 flex items-center gap-3">
                                📚 Temario del Curso
                            </h3>

                            <div className="space-y-6">
                                {/* Sesión 1 */}
                                <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-teal-500 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-teal-800">Sesión 1</h4>
                                        <span className="text-xs text-gray-400 font-mono">01</span>
                                    </div>
                                    <p className="text-lg font-semibold text-bosque">Herramientas bio-inteligentes</p>
                                </div>

                                {/* Sesión 2 */}
                                <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-teal-500 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-teal-800">Sesión 2</h4>
                                        <span className="text-xs text-gray-400 font-mono">02</span>
                                    </div>
                                    <p className="text-lg font-semibold text-bosque">Herramientas bio-mórficas</p>
                                </div>

                                {/* Sesión 3 (Con etiquetas) */}
                                <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-blue-800">Sesión 3: Integración de Métodos</h4>
                                        <span className="text-xs text-gray-400 font-mono">03</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['Educación Waldorf', 'Método Kilpatrick', 'Pedagogía Sistémica'].map((tag) => (
                                            <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Sesión 4 (Con etiquetas) */}
                                <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-purple-800">Sesión 4: Aplicación Social</h4>
                                        <span className="text-xs text-gray-400 font-mono">04</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['Juegos Cooperativos', 'Arte', 'Cultura de Paz'].map((tag) => (
                                            <span key={tag} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Detalles Logísticos (Ocupa 5 columnas) */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Tarjeta Informativa Principal */}
                        <div className="bg-teal-900 text-white p-8 rounded-[--radius-organico] shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl group-hover:rotate-12 transition-transform duration-700">⚙️</div>

                            <h3 className="text-xl font-bold mb-4 border-b border-teal-700 pb-2">Logística del Curso</h3>

                            <ul className="space-y-4 text-teal-50">
                                <li className="flex items-start gap-3">
                                    <span className="bg-teal-800 p-1 rounded text-xs mt-1">8h</span>
                                    <p className="text-sm">Curso teórico-práctico dividido en 4 sesiones (Online) o 1 día intensivo (Presencial).</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-teal-800 p-1 rounded text-xs mt-1">PDF</span>
                                    <p className="text-sm">Cuadernillo interactivo incluido. Se envía digitalmente antes del inicio.</p>
                                </li>
                            </ul>

                            <div className="mt-6 bg-teal-800/50 p-4 rounded-xl border border-teal-700">
                                <p className="text-xs font-mono text-teal-200 mb-1">_ NOTA PRESENCIAL</p>
                                <p className="text-sm">En formato de 1 día, contempla <strong>9 horas totales</strong> (incluye dos descansos de 30 min).</p>
                            </div>
                        </div>

                        {/* Tarjeta WhatsApp */}
                        <div className="bg-white p-6 rounded-3xl border-2 border-dashed border-gray-200 text-center">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                                💬
                            </div>
                            <h4 className="font-bold text-bosque mb-2">Comunidad de Seguimiento</h4>
                            <p className="text-sm text-tierra/80 mb-4">
                                Grupo de WhatsApp activo durante el curso y <strong>1 mes después</strong> para resolver dudas.
                            </p>
                            <div className="text-xs text-gray-500 bg-gray-50 py-2 px-4 rounded-lg inline-block">
                                Recibe aquí: Ligas Zoom, Ubicación y Datos de Pago
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CourseMethodologies;