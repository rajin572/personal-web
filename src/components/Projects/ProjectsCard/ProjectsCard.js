import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({singleProject}) => {
  const {id, project_name, image, description, short_points, technology} = singleProject
  console.log(singleProject);
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
    <figure>
      <img src={image} alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-bold text-2xl">{project_name}</h2>
      <p className="font-semibold text-xl">{description}</p>
      <p>
        {
          short_points.map((point, i) => <p key={i}>● {point}</p>)
        }
      </p>
      <p>
        <span className=" font-bold">Technology:</span>{technology}
      </p>
      <div className="card-actions">
        <Link to={`/projectDetails/${id}`} className="w-full"><button className="w-full btn bg-[#006eff] border-[#006eff]">View Details</button></Link>
      </div>
    </div>
  </div>
  );
};

export default ProjectsCard;
