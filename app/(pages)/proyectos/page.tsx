"use client";

import React, { useState } from "react";
import Section from '@/app/components/general/Section';
import ProjectCard from "@/app/components/proyectos_com/ProjectCard";
import NextProjectCard from "@/app/components/proyectos_com/NextProjectCard"; 
import Footer from "@/app/components/general/Footer";
import Header2sub from '@/app/components/header2sub';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface StatItem {
  value: string; 
  label: string;         
  isNumber?: boolean;   
}

interface Project {
  title: string;
  description: string;
  images: string[];
  stats?: StatItem[];
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
    title: "Journey to Internship",
    description:
      "Evento de dos días en el que las participantes tienen la oportunidad de visitar corporativos líderes en áreas STEAM y participar en talleres y cursos diseñados para fortalecer sus habilidades técnicas y profesionales, preparándolas para obtener su internship soñado.",
    images: [
      "/images/proyectos/JTI_1.JPG", "/images/proyectos/JTI_2.JPG", "/images/proyectos/JTI_3.JPG",
      "/images/proyectos/JTI_4.JPG", "/images/proyectos/JTI_5.JPG", "/images/proyectos/JTI_6.JPG",
      "/images/proyectos/JTI_7.JPG", "/images/proyectos/JTI_8.JPG", "/images/proyectos/JTI_9.JPG",],
    stats: [
      {value: "+50", label: "Participantes", isNumber: true},
      {value: "2 empresas sede de cada día del evento", label: "", isNumber: false},
      {value: "Oportunidad de potenciar habilidades técnicas y hacer networking ", label: "", isNumber: false}]
  },

  {
    title: "Desayuno por Día de la Mujer",
    description:
      "Evento de networking que consiste en un desayuno con panelistas e invitadas líderes en áreas STEAM. Durante el evento, las ponentes comparten sus trayectorias, logros y aprendizajes, además de brindar consejos prácticos e inspiración a las participantes para impulsar su desarrollo personal y profesional.",
    images: [
      "/images/proyectos/desayuno_2.JPG", "/images/proyectos/desayuno_1.JPG", "/images/proyectos/desayuno_3.JPG",
      "/images/proyectos/desayuno_4.JPG", "/images/proyectos/desayuno_5.JPG", "/images/proyectos/desayuno_6.JPG",
      "/images/proyectos/desayuno_7.JPG", "/images/proyectos/desayuno_8.JPG", "/images/proyectos/desayuno_9.JPG", "/images/proyectos/desayuno_10.JPG"],
    stats: [
      {value: "+100", label: "Participantes", isNumber: true},
      {value: "+5", label: "Panelistas líderes en STEAM", isNumber: true}]
  },

  {
    title: "Hack4Her",
    description:
      "El primer hackathon nacional para mujeres en México. Durante 24 horas, equipos de cuatro participantes trabajan en la solución de retos de programación propuestos por una empresa líder internacional, compitiendo por grandes premios y la oportunidad de destacar su talento a nivel nacional.",
    images: ["/images/proyectos/h4h_1.JPG", "/images/proyectos/h4h_2.JPG", "/images/proyectos/h4h_3.JPG",
      "/images/proyectos/h4h_4.JPG", "/images/proyectos/h4h_5.png", "/images/proyectos/h4h_6.JPG",
      "/images/proyectos/h4h_7.JPG", "/images/proyectos/h4h_8.JPG", "/images/proyectos/h4h_9.JPG", "/images/proyectos/h4h_10.JPG"],
    stats: [
      {value: "+350", label: "Participantes", isNumber: true},
      {value: "Desafíos reales de empresas internacionales", label: "", isNumber: false},
      {value: "+250 000", label: "Pesos en premios", isNumber: true},
      {value: "Oportunidad de networking con reclutadores", label: "", isNumber: false}]
  },

  {
    title: "EmpowerHack",
    description:
      "Mini hackathon dirigido a niñas de nivel secundaria, donde las participantes ponen en práctica los conocimientos básicos de programación adquiridos a través de nuestro programa de servicio social Witcode. El evento fomenta la creatividad, el trabajo en equipo y el interés por las áreas tecnológicas desde una edad temprana.",
    images: [
      "/images/proyectos/em_ha1.JPG", "/images/proyectos/em_ha2.JPG", "/images/proyectos/em_ha3.JPG",
      "/images/proyectos/em_ha4.JPG", "/images/proyectos/em_ha5.JPG", "/images/proyectos/em_ha6.JPG"],
    stats: [
      {value: "+60", label: "Participantes", isNumber: true},
      {value: "Participación de empresas líderes", label: "", isNumber: false},
      {value: "Oportunidad de ganar muchos premios", label: "", isNumber: false}]
  },
  {
    title: "Feria de Empresas Mujeres STEAM",
    description:
      "Feria con la participación de más de 15 empresas líderes, donde se presentan vacantes disponibles y se promueve el networking entre empresas y participantes. Las asistentes tienen la oportunidad de compartir su CV e interactuar de manera cercana y humana con reclutadores y representantes de las empresas.",
    images: [
      "/images/proyectos/feria_1.JPG", "/images/proyectos/feria_2.JPG", "/images/proyectos/feria_3.JPG",
      "/images/proyectos/feria_4.JPG", "/images/proyectos/feria_5.JPG", "/images/proyectos/feria_6.JPG"],
    stats: [
      {value: "+180", label: "Participantes", isNumber: true},
      {value: "+15", label: "Empresas líderes en STEAM", isNumber: true},
      {value: "Oportunidad de ser reclutado para un internship", label: "", isNumber: false},
      {value: "Networking de la mano de reclutadores", label: "", isNumber: false}]
  },

  {
    title: "Reunión Nacional de Mujeres STEAM",
    description:
      "Evento de networking que reúne a más de 100 mujeres desde nivel secundaria hasta universitario, junto con empresarias, profesionistas y maestras. A través de diversas actividades, se comparten experiencias, aprendizajes y consejos clave para sobresalir y desarrollarse con éxito en las áreas STEAM.",
    images: [
      "/images/proyectos/reunion_1.JPG", "/images/proyectos/reunion_2.JPG", "/images/proyectos/reunion_3.JPG",
      "/images/proyectos/reunion_4.JPG", "/images/proyectos/reunion_5.JPG", "/images/proyectos/reunion_6.JPG"],
    stats: [
      {value: "+150", label: "Participantes", isNumber: true},
      {value: "+10", label: "Panelistas", isNumber: true},
      {value: "Oportunidad de networking con mujeres en la industria STEAM", label: "", isNumber: false},
      {value: "Oportunidad de aprender de expertas", label: "", isNumber: false}]
  },
];

const nextProjects: NextProject[] = [
  {
    day: "29",
    month: "Noviembre",
    title: "Run4Wit",
    image:  "/images/proyectos/run4wit_ex.png",
    link: "https://www.instagram.com/p/DRfvTJcjSN1/?img_index=1",
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
      
      <div className="mb-20">
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
              paddingTop:'2rem',
              paddingLeft:'3rem',
              paddingRight: '3rem',
              paddingBottom: '0.2rem',
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
