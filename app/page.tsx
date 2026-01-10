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

        /* Estilos para botón con efecto ripple */
        .btn-interactive-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #6411AD 0%, #8B5CF6 100%);
          color: white;
          padding: 14px 40px;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(100, 17, 173, 0.3);
        }

        .btn-interactive-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-interactive-primary:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-interactive-primary:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 8px 25px rgba(100, 17, 173, 0.5);
        }

        .btn-interactive-primary:active {
          transform: scale(0.98) translateY(0);
        }

        .btn-interactive-primary span {
          position: relative;
          z-index: 1;
        }

        /* Estilos para botón con flecha deslizante */
        .btn-interactive-secondary {
          position: relative;
          overflow: hidden;
          background: #6411AD;
          color: white;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          border: 2px solid #6411AD;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .btn-interactive-secondary::after {
          content: '→';
          position: absolute;
          right: 20px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .btn-interactive-secondary:hover {
          background: transparent;
          color: #6411AD;
          transform: scale(1.05);
          padding-right: 45px;
          box-shadow: 0 5px 20px rgba(100, 17, 173, 0.3);
        }

        .btn-interactive-secondary:hover::after {
          opacity: 1;
          right: 15px;
        }

        .btn-interactive-secondary:active {
          transform: scale(0.98);
        }

        .btn-interactive-secondary span {
          position: relative;
          z-index: 1;
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
              <button className="btn-interactive-secondary w-fit mt-4">
                <span>Conócenos</span>
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
          src="/images/home/home_14.JPG"
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
              <button className="btn-interactive-secondary w-fit mt-4">
                <span>Ir a proyectos</span>
              </button>
            </a>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  )
}