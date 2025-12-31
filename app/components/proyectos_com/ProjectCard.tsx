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
  yearlyData?: YearData[];
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
        <div className="timeline-panel">
          <div className="timeline-header">
            <div className="year-navigation">
              {project.yearlyData.map((yearData) => (
                <button
                  key={yearData.year}
                  className={`year-pill ${selectedYear === yearData.year ? 'active' : ''}`}
                  onClick={() => setSelectedYear(yearData.year)}
                >
                  {yearData.year}
                </button>
              ))}
            </div>
          </div>

          {selectedYearData && (
            <div className="timeline-content">
              <div className="content-wrapper">
                <div className="description-section">
                  <div className="description-text">
                    <p>{selectedYearData.description}</p>
                  </div>
                </div>
                
                <div className="media-section">
                  <div className="image-container">
                    <Slider {...settings}>
                      {selectedYearData.images.map((img, i) => (
                        <div key={i} className="slide-item">
                          <div className="image-wrapper">
                            <img
                              src={img}
                              alt={`${project.title} ${selectedYearData.year} - ${i + 1}`}
                              className="year-image"
                            />
                            
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;