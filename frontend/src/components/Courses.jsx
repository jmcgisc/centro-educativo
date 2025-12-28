const courses = [
    { title: "Concientización", desc: "Cambios en la niñez basados en estudios científicos.", icon: "🌱" },
    { title: "Cultura de Paz", desc: "Aplicación de la paz en el aula y el hogar.", icon: "🕊️" },
    { title: "Comunicación No Violenta", desc: "Técnicas de comunicación consciente.", icon: "💬" },
    { title: "Danzas Circulares", desc: "Autoconocimiento a través del baile en círculo.", icon: "⭕" }
];

const Courses = () => {
    return (
        <section id="cursos" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-bosque">Nuestra Oferta Educativa</h2>
                    <p className="text-tierra mt-4 max-w-2xl mx-auto">
                        Cursos teórico-prácticos orientados a padres, profesores y profesionales[cite: 29].
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-crema p-8 rounded-[--radius-organico] border-b-4 border-hoja hover:shadow-2xl transition-all group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                {course.icon}
                            </div>
                            <h3 className="text-xl font-bold text-bosque mb-2">{course.title}</h3>
                            <p className="text-sm text-tierra/80 leading-relaxed">
                                {course.desc}
                            </p>
                            <button className="mt-6 text-bosque font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                Saber más <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;