// src/components/SectionHack4Her.tsx
import Image from "next/image";
import bg1 from "../../../public/images/hack4her/bg1.png";
import bg2 from "../../../public/images/hack4her/bg2.png";
import bg3 from "../../../public/images/hack4her/bg3.png";
import bg4 from "../../../public/images/hack4her/bg4.png";
import bg5 from "../../../public/images/hack4her/bg5.png";
import bg6 from "../../../public/images/hack4her/bg6.png";

const SectionHack4Her = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full h-auto md:h-screen bg-hack4her-bg">
    {/* content */}
    <div className="relative z-20">
      {children}
    </div>

    {/* Top-right */}
    <Image
      src={bg1}
      alt="bg1"
      className="absolute top-0 right-0 w-1/2 sm:w-1/3 md:w-1/4 z-0"
    />

    {/* Top-center */}
    <Image
      src={bg2}
      alt="bg2"
      className="hidden sm:block absolute top-0 left-1/3 w-1/2 sm:w-1/2 md:w-1/3 z-0"
    />

    {/* Top-left */}
    <Image
      src={bg3}
      alt="bg3"
      className="hidden md:block absolute top-0 left-0 w-1/3 z-0"
    />

    {/* Bottom-left */}
    <Image
      src={bg5}
      alt="bg5"
      className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 md:w-1/4 z-0"
    />

    {/* Bottom-center */}
    <Image
      src={bg4}
      alt="bg4"
      className="hidden sm:block absolute bottom-0 right-1/3 w-1/2 sm:w-1/2 md:w-1/3 z-0"
    />

    {/* Bottom-right */}
    <Image
      src={bg6}
      alt="bg6"
      className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 md:w-1/4 z-0"
    />
  </div>
);

export default SectionHack4Her;
