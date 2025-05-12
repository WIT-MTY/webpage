import Footer from "./components/general/Footer";
import Info from "./components/general/Info";
import Image from "next/image";
import Section from "./components/general/Section";

export default function Home() {
  return (
    <main className="pt-24">
      <div className="overflow-scroll">

        <Section>
          <div className="my-10 relative">
            <img
              className="object-center object-cover w-full block"
              src="/images/nuevoWIT.png"
              alt="wit"
            />
          </div>

        </Section>

        <hr />

        <Section>
          <Info title="Sobre nosotras" button="Conócenos" image="/images/wit25.JPG" href="/integrantes" description="Women in Technology es un grupo estudiantil del Tecnológico de Monterrey, Campus Monterrey. \ Somos una comunidad de mujeres que busca atender la brecha de género en el ámbito de la tecnología." />
        </Section>

        <hr />

        <Section>
          <Info right title="Proyectos" button="Ir a proyectos" image="/images/proyectos/JTI24_3.JPG" href="/proyectos" description="El grupo estudiantil realiza diversas actividades y eventos durante el semestre: conferencias, Journey to Internship, talleres, Día de la Mujer, entre otros. \¡Conoce los proyectos!" />
        </Section>

        <Footer />
      </div>
    </main>
  )
}
