"use client";

import React, { useState } from "react";
import Section from '@/app/components/general/Section';
import ProjectCard from "@/app/components/proyectos_com/ProjectCard";
import Footer from "@/app/components/general/Footer";
import Header2sub from '@/app/components/header2sub';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Conferencias motivacionales",
    description:
      "El grupo invita al alumnado a una serie de conferencias y talleres de diferentes temas motivacionales y sobre experiencias de mujeres dentro y fuera del área de ingeniería.",
    images: [
      "/images/proyectos/proy6.jpg",
      "/images/proyectos/proy6.jpg",
      "/images/proyectos/proy6.jpg"
    ],
  },
  {
    title: "Journey to Internship",
    description:
      "Serie de conferencias y talleres impartidos por empresas reconocidas para preparar a estudiantes para internships.",
    images: [
      "/images/proyectos/JTI24_5.JPG",
      "/images/proyectos/JTI24_5.JPG",
      "/images/proyectos/JTI24_5.JPG"
    ],
  },
  {
    title: "Desayuno del día de la mujer",
    description:
      "Desayuno conmemorativo donde alumnas, docentes y profesionales dialogan sobre experiencias y liderazgo femenino.",
    images: [
      "/images/proyectos/desayuno.JPG",
      "/images/proyectos/desayuno.JPG",
      "/images/proyectos/desayuno.JPG"
    ],
  },
  {
    title: "Hack4Her",
    description:
      "Hack4Her es un hackathon organizado por mujeres y dirigido a mujeres. El objetivo es fomentar la participación de mujeres en hackathons y en el área de la tecnología.",
    images: [
      "/images/proyectos/hack4her_flyer.png",
      "/images/proyectos/hack4her_flyer.png",
      "/images/proyectos/hack4her_flyer.png"
    ],
  },
  {
    title: "EmpowerHack",
    description:
      "Un hackathon dirigido a chicas de secundaria con el propósito de fomentar la participación de mujeres en la tecnología desde una temprana edad.",
    images: [
      "/images/proyectos/empower_hack.jpeg",
      "/images/proyectos/empower_hack.jpeg",
      "/images/proyectos/empower_hack.jpeg"
    ],
  },
];


// Componente principal que renderiza todas las tarjetas
const ProjectShowcase: React.FC = () => {
  return (
    <main>
      <div className="overflow-scroll p-10 md:pt-24">
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
        
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}

       
      </div>
      <Footer/>
    </main>
  );
};

export default ProjectShowcase;
