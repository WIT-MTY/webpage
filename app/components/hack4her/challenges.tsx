import React from 'react'
import SectionHack4Her from './sectionHack4Her'

interface Challenge {
  title: string
  imageUrl: string
}

const challengesData: Challenge[] = [
  {
    title: 'DIME AI aplicado a la Operación',
    imageUrl: '/images/reto1.jpeg'
  },
  {
    title: 'Reinventando el acceso, simple, seguro y amigable.',
    imageUrl: '/images/reto2.jpeg'
  },
  {
    title: 'Predicción de fallas de Smart Coolers',  
    imageUrl: '/images/reto3.jpeg'
  },
  {
    title: 'Live Loyalty Hack - Reembolso de Puntos en Tiempo Real',
    imageUrl: '/images/reto4.jpeg'
  }
]

const ChallengesSection: React.FC = () => {
  return (
    <SectionHack4Her>
      <div className="w-full px-4 py-20 flex flex-col items-center">
        {/* Título */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-full px-6 py-4 shadow-lg">
            <h1 className="text-hack4her-bg font-montserrat font-extrabold text-4xl md:text-5xl">
              Desafíos
            </h1>
          </div>
        </div>

        {/* Contenedor full-width */}
          {/* Flex sin overflow, gap uniforme */}
          <div className="mt-20 flex gap-6">
            {challengesData.map((c, i) => (
              <div
                key={i}
                className="group relative flex-1 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                {/* Imagen adaptada */}
                <img
                  src={c.imageUrl}
                  alt={c.title}
                  className="w-full h-48 md:h-56 object-cover "
                />

                {/* Texto en pie */}
                <div className="mt-auto p-4 bg-white h-24 flex flex-col justify-center">
    <h3 className="font-bold text-lg text-gray-900 text-center">{c.title}</h3>
  </div>
              </div>
            ))}
        </div>
      </div>
    </SectionHack4Her>
  )
}

export default ChallengesSection
