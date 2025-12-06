import React from "react";
import HeroSect from "./HeroSect";
import OurStory from "./OurStory";
import VisionValues from "./Vision";

function AboutUs() {
  return (
    <div>
      {/* hero section */}
      <HeroSect />
      {/* ourstory section */}
      <OurStory />
      {/* vision section */}
      <VisionValues />
    </div>
  );
}

export default AboutUs;
