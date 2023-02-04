import React from "react";
import mySecoundaryImage from "../../images/20220911_155925-01-02.jpeg";


const About = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" id="about" className=" mt-20">
      <h1 className=" text-5xl font-bold text-center">About Me</h1>
      <h1 className="mt-5 text-2xl font-bold text-center text-[#006eff]">I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</h1>
      <div className="hero mt-20">
        <div className="hero-content flex-col gap-10 lg:flex-row justify-around">
          <img data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" src={mySecoundaryImage} className="h-1/2 lg:h-1/4 w-1/2 lg:w-1/4 shadow-xl shadow-slate-900" />
          <div>
            <p className=" text-xl font-semibold">Hello! My name is Din Islam Rajin. I am a professionla web developer. I enjoy creating things that live on the internet. My interest in web development started back in 2020. There were so many changes that happened to me. I completed two courses fully and one course is running. My passions always help me to survive</p>
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

export default About;
