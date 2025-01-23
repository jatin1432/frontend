import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <img
        src="../Rectangle 1.jpg"
        alt="hero-image"
        className="w-full h-auto max-h-[500px] object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">Shop</h1>
        <h3 className="flex text-sm lg:text-base font-semibold">
          Home &gt; <span className="font-normal ml-1">Shop</span>
        </h3>
      </div>
    </div>
  );
};

export default HeroSection;
