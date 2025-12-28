import React from 'react';

const images = [
    // Foto de niños/grupo (Representando la comunidad del PDF)
    {
        src: "https://images.unsplash.com/photo-1544654563-3807208d3e63?q=80&w=800",
        alt: "Comunidad y Aprendizaje",
        class: "md:row-span-2 h-full" // Esta será alta
    },
    // Naturaleza / Bosque (Representando el entorno del Retiro)
    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800",
        alt: "Entorno Natural",
        class: "h-64"
    },
    // Manos / Arte (Representando talleres creativos/origami)
    {
        src: "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?q=80&w=800",
        alt: "Talleres Creativos",
        class: "h-64"
    },
    // Danza / Movimiento (Representando Danzas Circulares)
    {
        src: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=800",
        alt: "Danzas Circulares",
        class: "md:col-span-2 h-72" // Esta será ancha
    },
];

const Collage = () => {
    return (
        <section className="py-20 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-bosque mb-4">
                        Vida en la Escuela
                    </h2>
                    <p className="text-tierra max-w-2xl mx-auto italic">
                        "Cocreando juntos una sociedad justa y consciente" [cite: 19]
                    </p>
                </div>

                {/* Grid Asimétrico (Collage) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-[--radius-organico] shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-transparent hover:border-hoja/30 ${img.class}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay al pasar el mouse */}
                            <div className="absolute inset-0 bg-bosque/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg tracking-wide border-2 border-white px-4 py-2 rounded-full">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Collage;