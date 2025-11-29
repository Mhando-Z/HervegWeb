import Image from "next/image";
import React from "react";
import picture from "../../public/images/01.jpg";

function HeroSection() {
  return (
    <div className="h-screen">
      <Image
        src={picture}
        alt="hero section image"
        className="w-screen object-cover h-full"
      />
      <div></div>
    </div>
  );
}

export default HeroSection;
