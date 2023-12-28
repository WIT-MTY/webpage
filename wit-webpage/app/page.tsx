import Footer from "./components/general/Footer";
import Info from "./components/general/Info";
import Image from "next/image";
import Section from "./components/general/Section";

export default function Home() {
  return (
    <main>
      <div className="overflow-scroll">

        <Section>
            <div className="my-10 aspect-video relative">
              <Image className='object-center object-cover' src="/images/wit.png" fill alt="wit" />
            </div>
        </Section>

        <hr />

        <Section>
          <Info title="Sobre nosotras" button="Conócenos" image="/images/sobreNosotras.jpeg" href="/integrantes" description="Women in Technology es un grupo estudiantil del Tecnológico de Monterrey, Campus Monterrey. \ Somos una comunidad de mujeres que busca atender la brecha de género en el ámbito de la tecnología." />
        </Section>

        <hr />

        <Section>
          <Info right title="Proyectos" button="Ir a proyectos" image="/images/proyectos.jpeg" href="/proyectos" description="El grupo estudiantil realiza diversas actividades y eventos durante el semestre: conferencias, Journey to Internship, talleres, Día de la Mujer, entre otros. \¡Conoce los proyectos!" />
        </Section>

        {/* <div className="flex flex-row justify-center">
        
          <div className="basis-1/2 ">

            <div className="w-full my-10 aspect-video relative">
              <Image className='object-center object-cover' src="/images/wit.png" fill alt="wit" />
            </div>

            <hr className="w-auto " />
            
            <hr />
          </div>

        </div> */}
        <Footer />
      </div>
    </main>
  )
}
