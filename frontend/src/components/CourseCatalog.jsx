import React from 'react';

const coursesData = [
    {
        title: "Concientización de padres de familia y profesores",
        description: "Reflexionamos juntos sobre la urgencia de un cambio en la educación. Hacemos un análisis sobre los cambios en niños, niñas y jóvenes basados en estudios científicos y neurológicos. Un viaje de introspección para estar bien yo y poder ayudar a los demás.",
        details: "8 horas • Incluye cuadernillo",
        mode: "Online o Presencial",
        icon: "🧠"
    },
    {
        title: "Los niños, niñas y jóvenes de hoy, ¿cómo apoyarlos?",
        description: "Te platicamos porqué y cómo son diferentes hoy en día, con información sustentada en estudios científicos. Te ofrecemos alternativas para tratarlos con conocimiento, entendimiento y amor para mejorar la relación por completo.",
        details: "8 horas • Incluye cuadernillo",
        mode: "Online o Presencial",
        icon: "👶"
    },
    {
        title: "Metodologías para el Tercer Milenio",
        description: "Un panorama general sobre metodologías educativas de vanguardia y otras clásicas poco conocidas. Viviremos ejemplos prácticos para aplicarlas en casa, aula o consultorio. Herramientas prácticas para aplicar en los demás cursos.",
        details: "8 horas • Incluye cuadernillo",
        mode: "Online o Presencial",
        icon: "📚"
    },
    {
        title: "Aplicando la Cultura de Paz",
        description: "Aprenderemos qué es la Cultura de Paz, su origen y cómo aplicarla en todos los ámbitos, empezando por nosotros mismos. Actividades y dinámicas divertidas para lograr ambientes sanos y amorosos.",
        details: "8 horas • Incluye cuadernillo",
        mode: "Online o Presencial",
        icon: "🕊️"
    },
    {
        title: "Comunicación No Violenta (Consciente)",
        description: "Aprenderemos a dejar de utilizar los 'NO' y usar frases en positivo. Ejercicios prácticos de comunicación y resolución de conflictos con dinámicas sencillas aplicables a cualquier entorno.",
        details: "8 horas • Incluye cuadernillo",
        mode: "Online o Presencial",
        icon: "💬"
    },
    {
        title: "Juegos Cooperativos",
        description: "Dejemos la competencia y pasemos a la cooperación. Actividades que promueven el pensamiento lateral, la unión, la paz y el amor. Juegos aplicables en casa, escuela, trabajo y reuniones.",
        details: "8 horas • Incluye cuadernillo",
        mode: "Exclusivo Presencial",
        isPresencial: true,
        icon: "🤝"
    },
    {
        title: "Educación Cuántica Reconectiva",
        description: "¡Lo último en Educación! Aprenderemos un poco de Física Cuántica de forma divertida para entender cómo nuestro cerebro se conecta con el Universo. Una educación desde la conciencia, disminuyendo prácticas desmotivadoras.",
        details: "8 horas • Incluye cuadernillo",
        mode: "Online o Presencial",
        icon: "✨"
    },
    {
        title: "Acompañantes Pedagooogía 3000",
        description: "Fase 1 de P3000. La base de todos nuestros cursos. Obtienes el nombre oficial de Acompañante P3000 y formas parte de la Red Mundial. Incluye certificación de la Academia en Chile.",
        details: "16 horas • Certificación Internacional",
        mode: "Online o Presencial",
        highlight: true,
        icon: "🎓"
    },
    {
        title: "Danzas Circulares",
        description: "Totalmente práctico. Bailes en cadena y círculo de muchas culturas. Fortalecen lazos humanos, motivan y relajan. Se envía música y videos de los bailes grabados en vivo.",
        details: "4 horas • Práctico",
        mode: "Exclusivo Presencial",
        isPresencial: true,
        icon: "⭕"
    },
    {
        title: "Paz Interior",
        description: "Conocemos las características del guerrero espiritual, recorremos el Camino del Héroe y analizamos nuestra sombra. Un viaje hacia la Paz Interior a través de la imaginación y meditación.",
        details: "8 horas • Incluye meditación",
        mode: "Online o Presencial",
        icon: "🧘"
    }
];

const CourseCatalog = () => {
    return (
        <section className="py-20 px-4 bg-crema relative" id="catalogo">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mb-4">
                        ¿De qué trata cada curso?
                    </h2>
                    <p className="text-tierra text-lg max-w-2xl mx-auto">
                        Explora nuestra oferta educativa diseñada para despertar la conciencia y fomentar la paz.
                    </p>
                </div>

                {/* Grid de Cursos Regulares */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {coursesData.map((course, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-[--radius-organico] shadow-lg border-b-4 hover:shadow-2xl transition-all duration-300 flex flex-col group ${course.highlight ? 'border-amber-400 ring-2 ring-amber-100' : 'border-bosque'}`}
                        >
                            {/* Encabezado */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-4xl bg-stone-50 w-16 h-16 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    {course.icon}
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full ${course.isPresencial ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                                    {course.mode}
                                </span>
                            </div>

                            {/* Título */}
                            <h3 className="text-xl font-bold text-bosque mb-3 leading-tight min-h-[3.5rem]">
                                {course.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-tierra/80 text-sm leading-relaxed mb-6 flex-grow">
                                {course.description}
                            </p>

                            {/* Footer de la Card */}
                            <div className="pt-4 border-t border-gray-100 mt-auto">
                                <p className="text-xs font-semibold text-bosque flex items-center gap-2">
                                    <span>⏱</span> {course.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tarjeta Especial: Retiro Anual */}
                <div className="mt-16 relative rounded-[3rem] overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574"
                            alt="Bosque Retiro"
                            className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-bosque/40 mix-blend-multiply"></div>
                    </div>

                    <div className="relative z-10 p-8 md:p-16 text-center text-white">
                        <span className="inline-block border border-white/30 bg-white/10 backdrop-blur-md rounded-full px-4 py-1 text-sm font-semibold mb-6">
                            Evento Premium Anual
                        </span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">Taller-Retiro Anual</h3>
                        <p className="text-xl md:text-2xl font-light italic mb-8 max-w-3xl mx-auto">
                            "Un espacio para re-conocer-me, un regalo que me-merezco."
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-10 bg-black/20 p-8 rounded-3xl backdrop-blur-sm">
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-green-200">🍃 La Experiencia</h4>
                                <p className="text-sm text-gray-100 leading-relaxed">
                                    Desconéctate de todo durante 4 días en medio del bosque. Aprenderás a reconocer tu Ser, desprogramar el ego y crear tu realidad. [cite: 95, 96]
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-green-200">🔥 Actividades</h4>
                                <p className="text-sm text-gray-100 leading-relaxed">
                                    Ejercicios, historias, dinámicas y Danzas Circulares Sagradas. Espacios de reflexión y auto-análisis.
                                </p>
                            </div>
                        </div>
                        <button className="bg-white text-bosque font-bold px-8 py-3 rounded-full hover:bg-green-100 transition-colors shadow-lg transform hover:-translate-y-1">
                            Ver Próxima Fecha
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseCatalog;