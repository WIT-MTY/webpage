import Footer from "@/app/components/general/Footer";
import Section from "@/app/components/general/Section";
import Banner from "@/app/components/serviciosocial/Banner";
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
      {/* Banner */}
      <Banner />

      {/* ¿Qué es WitCode? */}
      <Section>
        <div className="py-20 relative">
          {/* Decorative elements */}
          <div className="absolute top-10 left-0 w-32 h-32 rounded-full bg-[#B49CFF]/10 blur-3xl" />
          <div className="absolute bottom-10 right-0 w-40 h-40 rounded-full bg-[#ff5795]/10 blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#6411AD] bg-clip-text text-transparent">
              ¿Qué es WitCode?
            </h2>
            <p className="text-center text-[#2e2d2d] text-lg mb-16 max-w-2xl mx-auto">
              Nuestro programa de servicio social enfocado en disminuir la brecha de género en tecnología
              mediante educación accesible e inclusiva
            </p>
            <ObjectiveMission />

            {/* Foto grupal */}
            <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#c6c8ee]/30 hover:border-[#6411AD]/50 transition-all duration-500 hover:scale-[1.02]">
              <img
                src="images/serviciosocial/abajo_de_que_es_witcode.JPG"
                alt="Foto grupal WitCode"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ¿Cómo funciona? */}
      <div className="relative bg-gradient-to-b from-white via-[#f8f6fc] to-white py-20 overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #6411AD 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <Section>
          <div className="relative z-10">
            <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#6411AD] bg-clip-text text-transparent">
              ¿Cómo funciona?
            </h2>
            <p className="text-center text-[#2e2d2d] text-lg mb-16 max-w-2xl mx-auto">
              Tu experiencia como tutor/a en WitCode
            </p>
            <Timeline />

            {/* Carrusel de fotos */}
            <div className="mt-16">
              <Carousel />
            </div>
          </div>
        </Section>
      </div>

      {/* Roles Disponibles */}
      <Section>
        <div className="py-20 relative">
          <div className="relative z-10">
            <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#6411AD] bg-clip-text text-transparent">
              Roles disponibles
            </h2>
            <p className="text-center text-[#2e2d2d] text-lg mb-16 max-w-2xl mx-auto">
              Encuentra tu forma de contribuir
            </p>
            <RolesGrid />
          </div>
        </div>
      </Section>

      {/* Nuestro Impacto */}
      <StatsSection />

      {/* Beneficios */}
      <Section>
        <div className="py-20 relative">
          {/* Decorative gradient blobs */}
          <div className="absolute top-0 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#6411AD]/10 to-transparent blur-2xl" />
          <div className="absolute bottom-0 right-10 w-56 h-56 rounded-full bg-gradient-to-br from-[#ff5795]/10 to-transparent blur-2xl" />

          <div className="relative z-10">
            <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-center mb-5 bg-gradient-to-r from-[#47126b] to-[#6411AD] bg-clip-text text-transparent">
              Beneficios
            </h2>
            <p className="text-center text-[#2e2d2d] text-lg mb-16 max-w-2xl mx-auto">
              ¿Por qué unirte a WitCode?
            </p>
            <BenefitsList />
          </div>
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