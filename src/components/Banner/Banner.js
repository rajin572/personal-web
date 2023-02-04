import React from "react";
import myImage from "../../images/IMG_20220617_173900-01c (3).png";
import backgroundImage from "../../images/12151159_4880206.jpg";

const Banner = () => {
  return (
    <div
      id="home"
      style={{
        background: `url(${backgroundImage})`,
        backgroundPosition:'cemter',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={myImage} className=" h-3/4  w-full lg:w-1/2" />
          <div>
            <h4 className=" text-2xl ">Hi, my name is</h4>
            <h1 className=" text-5xl font-bold text-[#006eff]">
              Din Islam Rajin.
            </h1>
            <h1 className=" text-5xl font-bold">I build things for the web.</h1>
            <a href="https://drive.google.com/file/d/1lAiZWVjI-hVazFMIcLpPVnuWVa2cdHJO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className=" my-5 btn bg-[#006eff] border-[#006eff]">
            DownLoad Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
