"use client";
import React from "react";
import Image from "next/image";
import "./NextProjectCard.css";
import Link from "next/link";

interface NextProject {
  day: string;
  month: string;
  title: string;
  image: string;
  link?: string; 

}

interface NextProjectCardProps {
  project: NextProject;
}

const NextProject: React.FC<NextProjectCardProps> = ({ project }) => {

  const isExternalLink = project.link?.startsWith('http');
  const defaultLinkText = "Saber más";
  
  return (
    <div className="next-project-card">
      <div className="next-project-image-container">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="next-project-image"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        <div className="date-overlay">
          <div className="date-content">
            <span className="date-day">{project.day}</span>
            <span className="date-month">{project.month}</span>
          </div>
        </div>
      </div>

    
      <div className="next-project-content">
        <h2 className="project-title">{project.title}</h2>
         {project.link && (
          <div className="project-link-container">
            {isExternalLink ? (
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {defaultLinkText}
               
              </a>
            ) : (
              
              <Link 
                href={project.link}
                className="project-link"
              >
                {defaultLinkText}
              
              </Link>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default NextProject;