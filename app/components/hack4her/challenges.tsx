import React from 'react'
import SectionHack4Her from './sectionHack4Her'

interface Challenge {
  title: string
  description: string
  imageUrl: string
}

// Datos de los desafíos integrados directamente
const challengesData: Challenge[] = [
  {
    title: 'Desafio 1',
    description: 'Potencia la estrategia de growth enfocada en promociones y precios.',
    imageUrl: '/images/proyectos/desayuno.jpg'
  },
  {
    title: 'Desafio 2',
    description: 'Seguring the Digital Nest: identificando vulnerabilidades.',
    imageUrl: '/images/proyectos/desayuno.jpg'
  },
  {
    title: 'Desafio 3',
    description: 'Hackea el chum: anticipando e identificando la posible baja de clientes.',
    imageUrl: '/images/proyectos/desayuno.jpg'
  },
  {
    title: 'Desafio 4',
    description: 'Hackea el chum: anticipando e identificando la posible baja de clientes.',
    imageUrl: '/images/proyectos/desayuno.jpg'
  }
]

const ChallengesSection: React.FC = () => {
  return (
    <SectionHack4Her>
      <div className="relative w-full px-0 py-20 flex flex-col items-center">
        {/* Título de sección */}
        <div className="relative text-center mb-8">
          <div className="inline-block bg-white rounded-full px-6 py-4 shadow-lg">
            <h1 className="text-hack4her-bg font-montserrat font-extrabold text-4xl md:text-5xl">
              Desafíos
            </h1>
          </div>
        </div>

        {/* Contenedor blanco sin bordes redondeados y ancho completo */}
        <div className="bg-white p-8 shadow-lg w-full mx-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
            {challengesData.map((challenge, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                {/* Imagen de fondo */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${challenge.imageUrl})` }}
                />
                {/* Overlay animado: solo título, expande en hover */}
                <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 flex flex-col items-center justify-start p-4 text-center transition-all duration-300 ease-out group-hover:h-full group-hover:justify-center">
                  <h3 className="mt-2 text-xl md:text-2xl font-bold text-white leading-snug">
                    {challenge.title}
                  </h3>
                  <p className="text-white text-base md:text-lg mt-1 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionHack4Her>
  )
}

export default ChallengesSection
