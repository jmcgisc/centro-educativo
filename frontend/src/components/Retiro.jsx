const Retiro = () => {
    return (
        <section className="py-24 bg-bosque text-crema relative overflow-hidden">
            {/* Círculos decorativos que parecen hojas */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hoja/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Taller-Retiro Anual</h2>
                    <p className="text-xl mb-8 font-light italic">
                        "Un espacio para re-conocer-me, un regalo que me-merezco"[cite: 94].
                    </p>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3">
                            <span className="text-hoja text-2xl">✓</span> 4 días en plena naturaleza[cite: 96, 106].
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-hoja text-2xl">✓</span> Desprogramación del ego y autoconocimiento[cite: 95, 254].
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-hoja text-2xl">✓</span> Incluye Danzas Circulares Sagradas[cite: 255].
                        </li>
                    </ul>
                    <button className="bg-hoja text-bosque font-bold px-10 py-4 rounded-full hover:bg-white transition-colors shadow-xl">
                        Ver convocatoria
                    </button>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3">
                    <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071"
                        alt="Bosque sagrado"
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Retiro;