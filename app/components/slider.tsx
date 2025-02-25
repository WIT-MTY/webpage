import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const slides = [
  {
    subheading: 'SEMESTRAL',
    image: '/images/proyectos/proy6.jpg',
    title: 'Conferencias motivacionales',
    description: 'El grupo invita al alumnado a una serie de conferencias y talleres de diferentes temas motivacionales y sobre experiencias de mujeres dentro y fuera del área de ingeniería.',
  },
  {
    subheading: 'ANUAL',
    image: '/images/proyectos//proy8.png',
    title: 'Journey to Internship',
    description: 'Las y los estudiantes del Tecnológico de Monterrey son invitados a una serie de conferencias y talleres impartidos por empresas con reconocimiento nacional y/o internacional con el objetivo de prepararse para internships.',
  },
  {
    subheading: 'ANUAL',
    image: '/images/proyectos/proy7.jpg',
    title: 'Comida día de la mujer',
    description: 'El grupo organiza una comida del día de la mujer con estudiantes, profesoras, entre otros.',
  },
  {
    subheading: 'PROXIMAMENTE',
    image: '/images/proyectos/hack4her_flyer.png',
    title: 'Hack4Her',
    description: 'Hack4Her es un hackathon organizado por mujeres y dirigido a mujeres. El objetivo es fomentar la participación de mujeres en hackathons y en el área de la tecnología.',
  },
  {
    subheading: 'PROXIMAMENTE',
    image: '/images/proyectos/empowerhack_flyer.png',
    title: 'EmpowerHack',
    description: 'Un hackathon dirijido a chicas de preparatoria con el proposito de fomentar la participación de mujeres en la tecnología desde una edad temprana.',
  },
];

const SliderComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>
            <h3 className="slide-subheading no-background" style={{ position: 'absolute', top: '60px', left: '30px', zIndex: '3' }}>{slide.subheading}</h3>
            <div className="overlay">
              <div className="slide-title-description no-background">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

