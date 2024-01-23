'use client'
import clsx from 'clsx'
import React from 'react'

interface Header2sub {
    titulo: string;
    subtitulo: string;
    texto: string
}

const Header2sub: React.FC<Header2sub> = ({ titulo, subtitulo, texto }) => {

    function separateString(inputString:string) {
        const index = inputString.indexOf('\\');
        
        if (index !== -1) {
          const part1 = inputString.substring(0, index);
          const part2 = inputString.substring(index + 1);
          return [part1, part2];
        } else {
          // If there is no backslash, return the original string in the first part and an empty string in the second part
          return [inputString, ''];
        }
    }

  return (
    <div className="w-auto font-montserrat tracking-wide">
      <div className='flex flex.col sm:flex-row justify-between gap-10'></div>
      <div className={clsx( 
        "basis-auto flex flex-col",
      )}>
         <h1 className='text-primary font-bold font-montserrat text-5xl mb-3'>
            {titulo} 
         </h1>

         <h2 className='text-primary font-normal font-montserrat text-3xl mb-3'>
            {subtitulo}
         </h2>
         
         
         <p className='text-slate-600 font-thin text-base mt-1'>
            {texto}</p>
      </div>
    </div>
  )
}

export default Header2sub
