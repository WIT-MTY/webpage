'use client'
import React from 'react';
import clsx from 'clsx';

interface CenteredRectangleProps {
    images: string;
    description: string;
}

// const CenteredRectangle: React.FC<CenteredRectangleProps> = ({ images, description }) => {
//     const text = separateString(description);

//     function separateString(inputString:string) {
//         const index = inputString.indexOf('\\');
        
//         if (index !== -1) {
//           const part1 = inputString.substring(0, index);
//           const part2 = inputString.substring(index + 1);
//           return [part1, part2];
//         } else {
//           // If there is no backslash, return the original string in the first part and an empty string in the second part
//           return [inputString, ''];
//         }
//     }

//     return ()
// }

// export default CenteredRectangle;