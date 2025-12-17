"use client";

import React, { useState } from "react";
import Section from '@/app/components/general/Section';
import ProjectCard from "@/app/components/proyectos_com/ProjectCard";
import NextProjectCard from "@/app/components/proyectos_com/NextProjectCard"; 
import Footer from "@/app/components/general/Footer";
import Header2sub from '@/app/components/header2sub';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  description: string;
  images: string[];
}

interface NextProject {
  day: string;
  month: string;
  title: string;
  image: string;
  link?: string; 
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

const nextProjects: NextProject[] = [
  {
    day: "5",
    month: "Febrero",
    title: "Evento 1",
    image:  "/images/proyectos/hack4her_flyer.png",
    link: "https://www.websiteplanet.com/es/webtools/lorem-ipsum/",
  },
  {
    day: "22",
    month: "Abril",
    title: "Evento 2",
    image: "/images/proyectos/empower_hack.jpeg",
    link: "https://www.websiteplanet.com/es/webtools/lorem-ipsum/",
  },
  {
    day: "15",
    month: "Marzo",
    title: "Evento 3",
    image: "/images/proyectos/empower_hack.jpeg",
    link: "https://www.websiteplanet.com/es/webtools/lorem-ipsum/",
  },
  {
    day: "1",
    month: "Mayo",
    title: "Evento 4",
    image: "/images/proyectos/empower_hack.jpeg",
    link: "https://www.websiteplanet.com/es/webtools/lorem-ipsum/",
  },
];


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
      
      <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Próximos Eventos
          </h2>
          
          <div className="next-projects-container" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            
            <div className="hidden md:flex" style={{
              display: 'flex',
              gap: '2rem',
              overflowX: 'auto',
              paddingBottom: '1rem',
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--principal-morado-claro) #f1f1f1'
            }}>
              {nextProjects.map((project, index) => (
                <div key={index} style={{
                  minWidth: '400px',
                  flex: '0 0 auto'
                }}>
                  <NextProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>


      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}

       
      </div>
      <Footer/>
    </main>
  );
};

export default ProjectShowcase;
