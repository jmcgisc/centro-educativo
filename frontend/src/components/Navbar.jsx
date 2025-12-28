import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-bosque/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-10 h-10 bg-bosque rounded-full flex items-center justify-center text-white text-xl">
                            🌿 {/* Aquí iría el logo real más tarde */}
                        </div>
                        <span className="font-bold text-2xl text-bosque tracking-tight">
                            EcoSchool
                        </span>
                    </div>

                    {/* Menú Desktop */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['Inicio', 'Niveles', 'Filosofía', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-tierra hover:text-bosque font-medium transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="bg-bosque text-white px-6 py-2.5 rounded-full hover:bg-hoja transition-all duration-300 shadow-lg hover:shadow-green-200">
                            Admisiones
                        </button>
                    </div>

                    {/* Botón Móvil */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-bosque focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Móvil Desplegable */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Inicio', 'Niveles', 'Filosofía', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-tierra hover:text-bosque hover:bg-green-50"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;