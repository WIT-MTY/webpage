import React from 'react';
import Image from 'next/image';

interface CenteredRectangleProps {
  title: string;
  description: string;
  images: string[];
}

const CenteredRectangle: React.FC<CenteredRectangleProps> = ({ title, description, images }) => {
    const titleCaps = title.toUpperCase();

    return (
        <div className='box-border p-7 border rounded-[25px] shadow-[0_0px_30px_-2px_rgba(0,0,0,0.3)] text-center'>
            <h1 className='text-primary font-montserrat text-2xl mt-3 mb-1 tracking-tight'>
                {titleCaps}
            </h1>

            <p className='text-base font-light'>
                {description}
            </p>

            <div className='flex justify-center items-center'>
                {images.map((image, index) => (
                    <div key={index} className='ml-5'>
                    <ImageSponsors image={image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ImageSponsors = ({ image }: { image: string }) => {
  return (
    <div className='items-center'>
      <div className='max-w-xs mx-auto'>
        <Image
          className='object-contain max-w-full max-h-full'
          src={image}
          alt={image}
          layout='responsive'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default CenteredRectangle;