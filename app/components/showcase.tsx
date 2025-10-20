import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
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
    images: ["/images/proyectos/proy6.jpg", "/images/proyectos/proy6_2.jpg"],
  },
  {
    title: "Journey to Internship",
    description:
      "Serie de conferencias y talleres impartidos por empresas reconocidas para preparar a estudiantes para internships.",
    images: ["/images/proyectos/JTI24_5.JPG", "/images/proyectos/JTI24_2.JPG"],
  },
  {
    title: "Desayuno del día de la mujer",
    description:
      "Desayuno conmemorativo donde alumnas, docentes y profesionales dialogan sobre experiencias y liderazgo femenino.",
    images: ["/images/proyectos/desayuno.JPG"],
  },
];

// Componente para una sola tarjeta de proyecto
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_current, next) => setActiveIndex(next),
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-100 rounded-2xl shadow-md mb-8">
      {/* Slider de imágenes */}
      <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {project.images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={project.title}
                className="rounded-xl w-full h-80 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {project.title}
        </h2>
        <p className="text-gray-600 text-lg">{project.description}</p>
      </div>
    </div>
  );
};

// Componente que renderiza todas las tarjetas
const ProjectShowcase: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;
