"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css";

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

interface ProjectCardProps {
  project: Project;
}



const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,       
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const shouldShowStats =  project.stats;

  return (
    <div className="project-card-wrapper">

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
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <div>
            {project.stats && project.stats.length > 0 && (
              <div className="stats-grid">
                {project.stats.map((stat, index) => (
                  <div key={index} className={`stat-box ${stat.isNumber ? 'number-stat' : 'text-stat'}`}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}    
          </div>
        </div>
        
      </div>
        
      
      
    </div>
  );
};

export default ProjectCard;