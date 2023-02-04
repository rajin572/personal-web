import React from "react";
import ImageGallery from "react-image-gallery";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import LimitedNav from "../Navbar/LimitedNav";

const ProjectDetails = () => {
  const data = useLoaderData();
  const { project_name, slider_image, description, short_points, long_points, technology, live_site } =
    data;
  console.log(data);
  return (
    <div>
      <LimitedNav></LimitedNav>
      <div className="my-10 min-h-full px-5 lg:px-10 gap-5  w-full mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center align-baseline">
        <div className="shadow-xl rounded border-2 border-black">
          <ImageGallery items={slider_image} />
        </div>
        <div className="">
          <h3 className="text-4xl font-bold">{project_name}</h3>
          <p className="font-semibold text-xl my-2">{description}</p>
          <p className="mt-5">
            {short_points.map((point, i) => (
              <p key={i}>● {point}</p>
            ))}
          </p>
          <p className="">
            {long_points.map((point, i) => (
              <p key={i}>● {point}</p>
            ))}
          </p>
          <p className="mt-5">
            <span className=" font-bold">Technology:</span>{technology}
          </p>
          <div className="mt-10 flex justify-around">
            <a href={live_site} target="_blank" rel="noopener noreferrer"><button className="btn bg-[#006eff] border-[#006eff]">Live Website</button></a>
            <a href='#' rel="noopener noreferrer"><button className="btn bg-[#006eff] border-[#006eff]">Github Client</button></a>
            <a href='#' rel="noopener noreferrer"><button className="btn bg-[#006eff] border-[#006eff]">Github Server</button></a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetails;
