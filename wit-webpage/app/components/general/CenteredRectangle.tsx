'use client'
import React from 'react';
import clsx from 'clsx';
import Image from "next/image";

interface CenteredRectangleProps {
    title: string;
    description: string;
    images: string;
}

const CenteredRectangle: React.FC<CenteredRectangleProps> = ({ title, description, images }) => {
    const titleCaps = title.toUpperCase();

    return (
        <div className='box-border p-12 border rounded-lg shadow-2xl'>
            <div className="flex flex-col justify-between gap-10">
                <div className={clsx(
                    "basis-auto flex flex-col",
                )}>
                    <h1 className="text-primary font-montserrat text-2xl mb-1 tracking-tight text-center">
                        {titleCaps}
                    </h1>

                    <p className='text-base font-light text-center'>
                        {description}
                    </p>
                    <div>
                        <ImageSponsors images={images}/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ImageSponsors = ({images}:{images:string}) => {
    return (
        <div className='items-start basis-1/3 static z-10'>
            <Image className='object-center object-scale-down h-1/2 w-auto' src={images} alt={images} fill />
        </div>
    )
}

export default CenteredRectangle;