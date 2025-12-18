"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css";

interface YearData {
  year: number;
  images: string[];
  description: string;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  // Nuevo parámetro para datos históricos por año
  yearlyData?: YearData[];
  // Parametro para definir si es un evento recurrente
  isRecurring?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  
  const [showDetails, setShowDetails] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(
    project.yearlyData && project.yearlyData.length > 0 
      ? project.yearlyData[0].year 
      : null
  );
  
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,       
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const selectedYearData = project.yearlyData?.find(
    data => data.year === selectedYear
  );

  return (
    <div>
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
        {project.yearlyData && project.yearlyData.length > 0 && (
            <button 
              className="ver-mas-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Ver menos" : "Ver más"}
            </button>
          )}
      </div>
    </div>

    {showDetails && project.yearlyData && (
        <div className="historical-panel">
          <div className="years-selector">
            <div className="years-buttons">
              {project.yearlyData.map((yearData) => (
                <button
                  key={yearData.year}
                  className={`year-btn ${
                    selectedYear === yearData.year ? "active" : ""
                  }`}
                  onClick={() => setSelectedYear(yearData.year)}
                >
                  {yearData.year}
                </button>
              ))}
            </div>
          </div>

          {selectedYearData && (
            <div className="year-details">

              <div className="historical-description">
                <p>{selectedYearData.description}</p>
              </div>

              <div className="historical-slider">
                <Slider {...settings}>
                  {selectedYearData.images.map((img, i) => (
                    <div key={i} className="slide-item">
                      <img
                        src={img}
                        alt={`${project.title} ${selectedYearData.year} - ${i + 1}`}
                        className="historical-image"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

            </div>
          )}
        </div>
        
      )}
    </div>


  );
};

export default ProjectCard;