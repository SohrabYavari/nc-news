import React from "react";
import Banner from "../global/Banner";
import About from "../about/About";

export default function HomePage() {
  return (
    <section id="home" className="justify-center items-center flex flex-col">
      <div className="min-h-screen flex justify-center items-center md:w-3/4 ">
        <Banner />
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <About />
      </div>
    </section>
  );
}
