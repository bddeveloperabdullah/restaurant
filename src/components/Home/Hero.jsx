import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('bg-1.jpg')`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div className="space-y-6">
          <p className="text-[11px] font-semibold leading-[13px]">
            290 Street Springs 260. +1 345 356 80
          </p>
          <h2 className="font-marcellus text-4xl lg:text-[77px] lg:leading-[79px]">
            A Unique Italian <br /> Restaurant in NYC.
          </h2>

          {/* Animated Button */}
          <button className="group relative overflow-hidden bg-primary py-4.5 px-16 rounded-md text-black cursor-pointer transition-all duration-500 hover:bg-[#BBA07A]">
            {/* Default Text */}
            <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
              MAKE A RESERVATION
            </span>
            {/* Hover Text */}
            <span className="absolute left-0 top-full w-full text-white transition-all duration-500 group-hover:top-1/2 group-hover:-translate-y-1/2">
              RESERVE A TABLE
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
