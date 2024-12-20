import Header2sub from "@/app/components/header2sub";
import Footer from "@/app/components/general/Footer";
import Carousel from "@/app/components/carousel";
import Section from "@/app/components/general/Section";
import TwoColumns from "@/app/components/twoColumns";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Header Section */}
      <Section>
        <div className="mt-[50px]">
          <Header2sub
            titulo={"SERVICIO SOCIAL"}
            subtitulo={"OBJETIVO"}
            texto={
              "WitCode tiene como objetivo atacar la brecha de género en la tecnología por medio de una educación que brinde herramientas para nivelar las oportunidades de manera igualitaria en este ámbito. Lo anterior, mediante talleres a estudiantes de 1°a 3° de secundaria de la escuela Ciudad de los Niños."
            }
          />
        </div>
      </Section>

      {/* Carousel Section */}
        <Carousel />

      {/* TwoColumns Section */}
      <Section>
        <TwoColumns
          columns={[
            {
              heading: "Programa",
              items: ["Clases semanales sobre diferentes temas tecnológicos.", 
                      "Se tienen grupos de principiantes (para alumnas nuevas al programa) y avanzadas.", 
                      "Modalidad en línea y con sesiones presenciales de inicio y clausura."],
            },
            {
              heading: "Graduadas",
              items: ["29 principiantes", 
                      "3 Avanzadas", 
                      "8 auxiliares de tutor (piloto)"],
              optionalText: "Celebrando un total de 40 alumnas en el periodo agosto a diciembre del 2023."
            },
            
          ]}
        />
      </Section>

      {/* Footer Section */}
        <Footer />
    </div>
  );
};

export default Page;
