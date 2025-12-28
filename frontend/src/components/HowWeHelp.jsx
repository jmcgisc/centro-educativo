import React from 'react';

const HowWeHelp = () => {
    return (
        <section className="py-20 relative bg-white overflow-hidden">

            {/* Decoración de fondo (hojas abstractas) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado: El Problema / La Pregunta */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-8">
                        ¿Cómo podemos ayudarte?
                    </h2>

                    <div className="bg-crema p-8 rounded-[--radius-organico] shadow-lg border-2 border-dashed border-hoja/30 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <p className="text-xl md:text-2xl text-tierra font-medium italic leading-relaxed">
                            "¿Eres padre-madre de familia, profesor, psicólogo, entrenador, etc, y no sabes cómo ayudar a los niños y jóvenes de hoy?"
                        </p>
                        <div className="mt-6 flex justify-center">
                            <span className="bg-bosque text-white px-6 py-2 rounded-full font-bold text-sm shadow-md animate-bounce">
                                ¡Nosotros te acompañamos!
                            </span>
                        </div>
                    </div>
                </div>

                {/* Las Soluciones: Dos Columnas */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Columna 1: Escuela Yachay (Formación Adultos) */}
                    <div className="bg-green-50/50 p-8 rounded-[3rem] border border-green-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm text-bosque">
                            🎓
                        </div>
                        <h3 className="text-2xl font-bold text-bosque mb-4">
                            Escuela para Adultos Yachay
                        </h3>
                        <p className="text-tierra/80 leading-relaxed mb-6 flex-grow">
                            Ofrecemos cursos y talleres especializados para <strong>padres de familia, docentes, entrenadores, psicólogos</strong> y todos los adultos que traten con niños, niñas y jóvenes.
                        </p>
                        <p className="text-sm font-semibold text-hoja">
                            Tu formación es el primer paso para ayudarlos a ellos.
                        </p>
                    </div>

                    {/* Columna 2: Actividades Presenciales (Instituciones) */}
                    <div className="bg-orange-50/50 p-8 rounded-[3rem] border border-orange-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm text-tierra">
                            🏫
                        </div>
                        <h3 className="text-2xl font-bold text-tierra mb-4">
                            Actividades Especiales Presenciales
                        </h3>
                        <p className="text-tierra/80 leading-relaxed mb-6 flex-grow">
                            Llevamos la experiencia a tu espacio. Actividades en <strong>escuelas</strong> (para alumnos y maestros), <strong>empresas, centros comunitarios, familias</strong> y actividades para adultos mayores.
                        </p>
                        <div className="mt-auto">
                            <a href="#catalogo" className="inline-flex items-center text-orange-800 font-bold hover:gap-2 transition-all group">
                                Consulta nuestro catálogo de actividades
                                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Cierre Inspirador */}
                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-handwriting text-bosque/80 font-bold">
                        ¡Nosotros te guiamos!
                    </h3>
                    <div className="w-24 h-1 bg-hoja mx-auto mt-4 rounded-full"></div>
                </div>

            </div>
        </section>
    );
};

export default HowWeHelp;