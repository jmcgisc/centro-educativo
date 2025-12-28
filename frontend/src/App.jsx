import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Retiro from './components/Retiro';
import Collage from './components/Collage';
import Organization from './components/Organization';
import CourseDetail from './components/CourseDetail';
import CourseCatalog from './components/CourseCatalog';
import HowWeHelp from './components/HowWeHelp';
import CourseChildren from './components/CourseChildren';
import CourseMethodologies from './components/CourseMethodologies';
import CoursePeace from './components/CoursePeace';
import CourseCommunication from './components/CourseCommunication';
import CourseGames from './components/CourseGames';
import CourseQuantum from './components/CourseQuantum';
import CourseP3000 from './components/CourseP3000';
import CourseDances from './components/CourseDances';
import CourseInnerPeace from './components/CourseInnerPeace';
import RetiroDetail from './components/RetiroDetail';
import Registration from './components/Registration';
import Costs from './components/Costs';

function App() {
  return (
    <div className="min-h-screen font-sans bg-crema text-tierra selection:bg-hoja selection:text-white">
      {/* 1. Barra de Navegación Fija */}
      <Navbar />

      <main className="space-y-0">
        {/* 2. Portada (Hero) */}
        <section id="inicio">
          <Hero />
        </section>

        {/* 2. HowWeHelp  */}
        <section id="wehelp">
          <HowWeHelp />
        </section>

        {/* 3. Sección de Cursos (Grid de Tarjetas) */}
        <section id="cursos">
          <Courses />
        </section>

        {/* 4. Sección del Retiro (Destacado visual) */}
        <section id="retiro">
          <Retiro />
        </section>

        {/* 5. Sección del Collage */}
        <section id="collage">
          <Collage />
        </section>

        {/* 5. Sección del Catalogo */}
        <section id="catalogo">
          <CourseCatalog />
        </section>

        {/* 6. Sección de Organización */}
        <section id="organizacion">
          <Organization />
        </section>

        {/* 7. Sección de Detalle del Curso */}
        <section id="curso">
          <CourseDetail />
        </section>

        {/* 8. Sección de Detalle del Curso */}
        <section id="curso">
          <CourseChildren />
        </section>

        {/* 9. Sección de Metodologías */}
        <section id="metodologias">
          <CourseMethodologies />
        </section>

        {/* 10. Sección de Detalle del Curso */}
        <section id="cursopeace">
          <CoursePeace />
        </section>

        {/* 11. Sección de Detalle del Curso */}
        <section id="cursocommunication">
          <CourseCommunication />
        </section>

        {/* 13. Sección de Detalle del Curso */}
        <section id="cursogames">
          <CourseGames />
        </section>

        {/* 14. Sección de Detalle del Curso */}
        <section id="cursoquantum">
          <CourseQuantum />
        </section>

        {/* 15. Sección de Detalle del Curso */}
        <section id="cursoP3000">
          <CourseP3000 />
        </section>

        {/* 16. Sección de Detalle del Curso */}
        <section id="cursodances">
          <CourseDances />
        </section>

        {/* 17. Sección de Detalle del Curso */}
        <section id="cursoinnerpeace">
          <CourseInnerPeace />
        </section>

        {/* 18. Sección de Detalle del Retiro */}
        <section id="retirodetail">
          <RetiroDetail />
        </section>

        {/* 19. Sección de Detalle del Retiro */}
        <section id="retirodetail">
          <RetiroDetail />
        </section>

        {/* 20. Sección de Detalle del Retiro */}
        <section id="registration">
          <Registration />
        </section>

        {/* 21. Sección de Detalle del Costos */}
        <section id="costos">
          <Costs />
        </section>

        {/* Aquí pondremos el Collage enseguida */}
      </main>

      {/* Footer temporal */}
      <footer className="bg-bosque text-white py-8 text-center mt-12">
        <p>© 2025 Escuela Esenia Llank'ay - Conocimiento, Entendimiento y Amor</p>
      </footer>
    </div>
  );
}

export default App;