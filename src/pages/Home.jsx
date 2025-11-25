import React from "react";

import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "../components/home/Services";
import Commitment from "../components/home/Commitment";
import CTA from "../components/home/CTA";
import Testimonials from "../components/home/Testimonials";
import Blog from "../components/home/Blog";
import Process from "../components/home/Process";


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Commitment />
      <Process /> 
      <Testimonials />
      <Blog />
      <CTA />
    </div>
  );
}
