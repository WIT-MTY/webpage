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
              src="/images/wit.png"
              alt="wit"
            />
            <img
              className="object-center object-cover w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="/images/logo-white.png"
              alt="logo-white"
            />
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

        <Footer />
      </div>
    </main>
  )
}
