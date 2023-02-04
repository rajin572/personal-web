import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
<footer className="footer p-10 bg-white py-10 mt-20 border-t-2  border-[#006eff]">
  <div>
    <p className="font-bold text-4xl text-[#006eff]">
        Din Islam Rajin
    </p>
    <p className="font-bold text-3xl"> Copyright © 2022 - All right reserved</p>
  </div> 
  <div>
    <span className="font-bold text-2xl">Follow Me On</span> 
    <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/dirrazin.69" target="_blank">
                <FaFacebookF className=" h-7 w-7"/>
            </a>
            <a href="https://www.instagram.com/dir_razin_69/" target="_blank">
            <FaInstagram className=" h-7 w-7" ></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/in/din-islam-rajin-11469a18b" target="_blank">
                <FaLinkedinIn className=" h-7 w-7"></FaLinkedinIn>
            </a>
          </div>
  </div>
</footer>
    </div>
  );
};

export default Footer;
