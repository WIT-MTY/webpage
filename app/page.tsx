import Footer from "./components/general/Footer";
import Info from "./components/general/Info";
import Image from "next/image";
import Section from "./components/general/Section";
import AnimatedPhotoGrid from "./components/AnimatedPhotoGrid";
import SponsorsCarousel from "./components/SponsorsCarousel";

export default function Home() {
  return (
    <main>
      {/* Hero Section con fotos animadas - EMPIEZA DESDE ARRIBA */}
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatedPhotoGrid />
        
        {/* Overlay con z-index bajo para que el navbar quede encima */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#6411AD]/40 to-black/50"></div>
          
          {/* Logo y texto */}
          <div className="relative z-20 text-center px-4">
            <div className="animate-fade-in">
              <img 
                src="/images/logo_wit/logo_nuevo_blanco.png" 
                alt="WIT Logo" 
                className="w-80 h-auto mx-auto drop-shadow-2xl lg:w-96 mb-8"
              />
            </div>
            
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
              Women in Tech
            </h1>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
          opacity: 0;
        }
      `}} />

      {/* Sección de Patrocinadores */}
      <Section>
        <SponsorsCarousel />
      </Section>

      <Section>
        <div id="sobre-nosotras" className="flex flex-col md:flex-row items-stretch justify-center w-screen min-h-screen md:min-h-[90vh] bg-[#6411AD1A] text-gray-900">
          {/* Imagen */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-[90vh]">
            <img
              src="/images/wit25.JPG"
              className="w-full h-full object-cover object-center"
              alt="Sobre nosotras"
            />
          </div>
          {/* Texto */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-20 py-12 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Sobre{" "}
              <span className="text-[#6411AD]">
                Nosotras
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-[#2e2d2d] max-w-xl">
              Women in Technology es un grupo estudiantil del Tecnológico de Monterrey, Campus Monterrey.
              Somos una comunidad de mujeres que busca reducir la brecha de género en el ámbito de la tecnología.
            </p>
            <a href="/integrantes"> 
              <button className="w-fit mt-4 px-8 py-3 rounded-full bg-[#6411AD] text-white font-semibold hover:bg-[#47126b] transition">
                Conócenos
              </button>
            </a>
          </div>
        </div>
      </Section>

      <hr className="border-[#B49CFF33]" />

      <Section>
          <div className="flex flex-col md:flex-row-reverse items-stretch justify-center w-screen min-h-screen md:min-h-[90vh] bg-[#6411AD1A] text-gray-900">
          {/* Imagen */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-[90vh]">
            <img
          src="/images/H4HPREMIOS-33.jpg"
          className="w-full h-full object-cover"
          style={{ objectPosition: '20% center' }}
          alt="Proyectos"
            />
          </div>
          {/* Texto */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-20 py-12 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-[#6411AD]">
                Proyectos
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-[#2e2d2d] max-w-xl">
              El grupo estudiantil realiza diversas actividades y eventos durante el semestre:
              conferencias, Journey to Internship, talleres, Día de la Mujer, entre otros.
              <br />
              <span className="font-medium text-[#47126b]">¡Conoce los proyectos!</span>
            </p>
            <a href="/proyectos">
              <button className="w-fit mt-4 px-8 py-3 rounded-full bg-[#6411AD] text-white font-semibold hover:bg-[#47126b] transition">
                Ir a proyectos
              </button>
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}