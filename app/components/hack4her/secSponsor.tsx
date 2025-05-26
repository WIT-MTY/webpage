import Image from 'next/image';
import robot1 from '../../../public/images/hack4her/robot1.png';
import SectionHack4Her from './sectionHack4Her';

const Sponsor: React.FC = () => {
  return (
    <SectionHack4Her>
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-0 px-0 z-20">
        {/* Robot encima de la caja */}
        <div className="relative w-full flex justify-center">
          <Image src={robot1} alt="Robot 1" className="w-1/3 max-w-sm" />
        </div>

        {/* Caja blanca de ancho completo sin límites */}
        <div className="bg-white p-10 shadow-lg w-1/2 rounded-lg mx-0 mt-[-60px]">
          <div className="flex flex-col items-center justify-center w-full text-center">
            <img
              src="/images/hack4her/H4H-logo.svg"
              alt="Logo Hack4Her"
              className="w-3/4 max-w-md"
            />

            <h1 className="text-hack4her-bg font-montserrat font-extrabold text-xl md:text-5xl mb-8">
              en colaboración con:
            </h1>

            <img
              src="/images/AC Digital Nest logo color_sin fondo.png"
              alt="Logo Arca Continental"
              className="w-full max-w-xl mt-3"
            />

            <p className="text-hack4her-bg font-montserrat font-bold md:text-xl mt-8">
              ¡Gracias a nuestro colaborador en esta misión! Impulsando el talento femenino, creando oportunidades y construyendo un futuro más inclusivo.
            </p>
          </div>
        </div>
      </div>
    </SectionHack4Her>
  );
};

export default Sponsor;
