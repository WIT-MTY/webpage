'use client'
import React from 'react';
import clsx from 'clsx';

interface InfoHeaderProps {
    title: string;
    description: string;
}

const InfoHeader: React.FC<InfoHeaderProps> = ({ title, description }) => {
    const titleCaps = title.toUpperCase();
    const text = separateString(description);

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
        <div className='w-auto font-montserrat tracking-wide'>
            <div className="flex flex-col sm:flex-row justify-between gap-10">
                <div className={clsx(
                    "basis-auto flex flex-col",
                )}>
                    <h1 className="text-primary font-bold font-montserrat text-5xl mb-3 ">
                        {titleCaps}
                    </h1>

                    <p className='text-slate-600 text-base font-thin'>
                        {text[0]}
                    </p>

                    {text.length > 1 && (
                        <p className='text-slate-600 font-thin text-base mt-3'>
                            {text[1]}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InfoHeader;