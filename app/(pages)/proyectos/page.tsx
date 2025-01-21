"use client";

import React from 'react';
import Slider from '@/app/components/slider';
import Section from '@/app/components/general/Section';
import Footer from '@/app/components/general/Footer';
import Header2sub from '@/app/components/header2sub';

const ProyectosPage: React.FC = () => {
  return (
    <main>
      <div className="overflow-scroll">
        <Section>
        <div className="mt-[50px] mb-[70px]">
        <Header2sub
            titulo={"PROYECTOS"}
            subtitulo={"\n"}
            texto={
             "\n"
            }
          />
          </div>
        </Section>

        <Slider />

        <Footer />
      </div>
    </main>
  );
};

export default ProyectosPage;
