import Footer from "@/app/components/general/Footer";
import Section from "@/app/components/general/Section";
import HeroSection from "@/app/components/serviciosocial/HeroSection";
import ObjectiveMission from "@/app/components/serviciosocial/ObjectiveMission";
import Timeline from "@/app/components/serviciosocial/Timeline";
import Carousel from "@/app/components/serviciosocial/CarouselServicioSocial";
import RolesGrid from "@/app/components/serviciosocial/RolesGrid";
import StatsSection from "@/app/components/serviciosocial/StatsSection";
import BenefitsList from "@/app/components/serviciosocial/BenefitsList";
import CTASection from "@/app/components/serviciosocial/CTASection";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* ¿Qué es WitCode? */}
      <Section>
        <div className="py-20">
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#911876] bg-clip-text text-transparent">
            ¿Qué es WitCode?
          </h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Nuestro programa de servicio social enfocado en disminuir la brecha de género en tecnología 
            mediante educación accesible e inclusiva
          </p>
          <ObjectiveMission />
          
          {/* Foto grupal */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="images/serviciosocial/abajo_de_que_es_witcode.JPG"
              alt="Foto grupal WitCode"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ¿Cómo funciona? */}
      <div className="bg-gradient-to-b from-white to-[#f8f6fc] py-20">
        <Section>
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#911876] bg-clip-text text-transparent">
            ¿Cómo funciona?
          </h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Tu experiencia como tutor/a en WitCode
          </p>
          <Timeline />
          
          {/* Carrusel de fotos */}
          <div className="mt-16">
            <Carousel />
          </div>
        </Section>
      </div>

      {/* Roles Disponibles */}
      <Section>
        <div className="py-20">
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#911876] bg-clip-text text-transparent">
            Roles disponibles
          </h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Encuentra tu forma de contribuir
          </p>
          <RolesGrid />
        </div>
      </Section>

      {/* Nuestro Impacto */}
      <StatsSection />

      {/* Beneficios */}
      <Section>
        <div className="py-20">
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#911876] bg-clip-text text-transparent">
            Beneficios
          </h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            ¿Por qué unirte a WitCode?
          </p>
          <BenefitsList />
        </div>
      </Section>

      {/* CTA Final */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;