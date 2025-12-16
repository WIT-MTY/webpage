"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css";

interface Project {
  title: string;
  description: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,       
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="project-card">
      
      {/* Slider a la izquierda */}
      <div className="slider-container">
        <Slider {...settings}>
          {project.images.map((img, i) => (
            <div key={i} className="slide-item">
              <img
                src={img}
                alt={`${project.title} ${i + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Texto a la derecha */}
      <div className="text-container">
        <h2 className="project-title">
          {project.title}
        </h2>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;