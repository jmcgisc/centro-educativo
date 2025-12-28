import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Video de fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
            >
                <source src="/video-hero-2.mp4" type="video/mp4" />
            </video>

            {/* Versión móvil */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
            >
                <source src="/video-hero-mobile.mp4" type="video/mp4" />
            </video>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full pt-24 pb-12 lg:pt-32 lg:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Texto (Lado Izquierdo) */}
                        <div className="relative z-10 text-center lg:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-bosque text-sm font-semibold mb-4 border border-green-200">
                                Inscripciones Abiertas 2025
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                                Escuela <br />
                                <span className="text-hoja">Esenia Llank’ay</span>
                            </h1>
                            <p className="text-lg text-white/90 mb-2 leading-relaxed font-medium">
                                Escuela para Adultos Yachay
                            </p>
                            <p className="text-xl text-hoja mb-8 leading-relaxed font-bold italic">
                                "¡Somos Conocimiento, Entendimiento y Amor!"
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-bosque text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    Conoce nuestro método
                                </button>
                                <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white hover:bg-white/10 transition-all backdrop-blur-sm">
                                    Ver Instalaciones
                                </button>
                            </div>
                        </div>

                        {/* Lado Derecho: La Manzana con Hoja Mejorada */}
                        <div className="relative flex justify-center items-center mt-12 lg:mt-0">

                            {/* --- GRUPO DECORATIVO SUPERIOR --- */}
                            {/* Tallo (Pequeño palito marrón que conecta la hoja) */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-8 bg-amber-800 rounded-full z-10 -rotate-12 origin-bottom shadow-sm"></div>

                            {/* Hoja SVG (Forma orgánica detallada) */}
                            <div className="absolute -top-14 left-1/2 ml-1 w-20 h-20 text-hoja z-20 origin-bottom-left rotate-[15deg] drop-shadow-lg animate-pulse-slow">
                                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full filter drop-shadow-md">
                                    {/* Forma de hoja curvada */}
                                    <path d="M50 100 C 50 100 20 60 20 30 C 20 10 40 0 50 0 C 60 0 80 10 80 30 C 80 60 50 100 50 100 Z" />
                                    {/* Nervadura central (detalle visual) */}
                                    <path d="M50 100 Q 45 60 50 10" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
                                </svg>
                            </div>

                            {/* --- MANZANA (Contenedor de Imagen) --- */}
                            <div className="relative w-72 h-72 md:w-80 md:h-80 group transition-transform duration-700 hover:scale-105">

                                {/* Borde blanco y forma orgánica de manzana */}
                                <div className="absolute inset-0 border-[6px] border-white/90 shadow-2xl overflow-hidden z-10 bg-white"
                                    style={{
                                        // Forma de manzana: ancha arriba, estrecha abajo
                                        borderRadius: "55% 55% 45% 45% / 50% 50% 65% 65%"
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                                        alt="Niños aprendiendo"
                                        className="w-full h-full object-cover scale-110"
                                    />
                                    {/* Overlay verde suave */}
                                    <div className="absolute inset-0 bg-bosque/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>

                                {/* Brillo/Reflejo en la manzana (detalle 3D sutil) */}
                                <div className="absolute top-10 left-10 w-16 h-8 bg-white/20 blur-xl rounded-full z-20 rotate-45 pointer-events-none"></div>

                                {/* Sombra difusa detrás */}
                                <div className="absolute top-8 left-8 w-full h-full bg-black/40 blur-3xl -z-10 rounded-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;