import React from "react";

export const HeroImageComponent = () => {
  return (
    <div className="[background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('./assets/images/hero-image.jpg')] h-96 md:h-[700px] bg-fixed bg-cover bg-no-repeat bg-center flex flex-col justify-center">
      <div className="lg:p-10 ">
        <h2 className="text-white text-center uppercase text-5xl md:text-8xl font-bold leading-tight">
          Gestión
          <br />
          de
          <br />
          productos
        </h2>
      </div>
    </div>
  );
};
