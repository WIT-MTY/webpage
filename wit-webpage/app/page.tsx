import Footer from "./components/general/Footer";
import Info from "./components/general/Info";

export default function Home() {
  return (
    <main>
      <div className="overflow-scroll">

        <div className="flex flex-row justify-center">
        
          <div className="basis-1/2 ">
            <div className="px-10">
              foto bonita
            </div>

            <hr className="w-auto" />
            <Info title="Sobre nosotras" button="Conócenos" image="/images/sobreNosotras.jpeg" description="Women in Technology es un grupo estudiantil del Tecnológico de Monterrey, Campus Monterrey. \ Somos una comunidad de mujeres que busca atender la brecha de género en el ámbito de la tecnología." />
            
            <hr />
            <Info right title="Proyectos" button="Ir a proyectos" image="/images/proyectos.jpeg" description="El grupo estudiantil realiza diversas actividades y eventos durante el semestre: conferencias, Journey to Internship, talleres, Día de la Mujer, entre otros. \¡Conoce los proyectos!" />
          </div>

        </div>
        <Footer />
      </div>
    </main>
  )
}
