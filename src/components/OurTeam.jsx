"use client";

import Image from "next/image";
import React from "react";

import agents from "../../public/images/01.jpg";

function OurTeam() {
  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 items-center mb-12">
        <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 text-center leading-tight">
          Meet Our Agents
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl text-center leading-relaxed">
          Herveg is comprised of professional agents who help simplify various
          agricultural tasks. Our dedicated team assists with registering
          packages for farmers, ensuring timely delivery once payments are
          completed, and providing comprehensive training and education. We
          empower farmers to transition seamlessly to modern farming practices.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <Image
          src={agents}
          alt="Herveg professional agents in the field"
          className="w-full h-[400px] md:h-[500px] lg:h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

        {/* Optional Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-roboto font-bold ">
              Committed to Excellence
            </h3>
            <p className="text-sm md:text-base text-gray-200 max-w-2xl">
              Supporting farmers every step of the way with expertise and
              dedication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
