'use client'
import React from 'react';
import Image from 'next/image';
import NavButton from '../Nav/NavButton';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface InfoProps {
    title: string;
    description: string;
    button: string;
    image: string;
    right?: boolean;
    href: string;
}

const Info: React.FC<InfoProps> = ({ title, description, button, image, right, href }) => {
    const titleCaps = title.toUpperCase();

    const text = separateString(description);
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    }

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
        <div className='w-auto py-20 font-montserrat tracking-wide'>
            <div className="flex flex-col sm:flex-row justify-between gap-10">
                {right && (
                    <ImageWit image={image}/> 
                )}

                <div className={clsx(
                    "basis-1/3 flex flex-col",
                    right ? "items-end text-end" : "items-start text-start"
                )}>
                    <h1 className="text-primary font-bold font-montserrat text-2xl mb-3 ">
                        {titleCaps}
                    </h1>
                    <p className='text-sm font-light'>
                        {text[0]}
                    </p>

                    {text.length > 1 && (
                        <p className='font-light text-sm mt-5'>
                            {text[1]}
                        </p>
                    )}
                    <div className='mt-8'>
                        <NavButton label={button} onClick={handleClick}/>
                    </div>
                
                </div>
                {!right && (
                    <ImageWit image={image}/> 
                )}
            </div>
        </div>
    )
}

export const ImageWit = ({image}:{image:string}) => {
    return (
        <div className='items-start basis-2/3 relative z-10'>
            <Image className='object-center object-cover' src={image} alt={image} fill />
        </div>
    )
}

export default Info;