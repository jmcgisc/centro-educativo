import React from 'react';

const Hero = () => {
    return (
        <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Texto */}
                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-bosque text-sm font-semibold mb-4 border border-green-200">
                            Inscripciones Abiertas 2025
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-bosque leading-tight mb-6">
                            Educación que <br />
                            <span className="text-hoja">florece</span> contigo.
                        </h1>
                        <p className="text-lg text-tierra mb-8 leading-relaxed">
                            Un espacio donde el aprendizaje echa raíces. Fomentamos la curiosidad natural de tus hijos en un entorno verde, seguro y lleno de vida.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-bosque text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                Conoce nuestro método
                            </button>
                            <button className="px-8 py-4 rounded-full font-semibold text-bosque border-2 border-bosque hover:bg-green-50 transition-all">
                                Ver Instalaciones
                            </button>
                        </div>
                    </div>

                    {/* Imagen con forma orgánica */}
                    <div className="relative">
                        {/* Elemento decorativo detrás (hoja abstracta) */}
                        <div className="absolute -top-10 -right-10 w-full h-full bg-hoja/20 rounded-full blur-3xl transform rotate-12"></div>

                        {/* Contenedor de la imagen */}
                        <div className="relative rounded-organico overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-700 ease-in-out group">
                            {/* Placeholder de imagen - Aquí iría una foto real de niños o árboles */}
                            <div className="w-full h-[500px] bg-gray-200 relative group-hover:scale-105 transition-transform duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                                    alt="Niños aprendiendo en la naturaleza"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay verde suave */}
                                <div className="absolute inset-0 bg-bosque/10"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;