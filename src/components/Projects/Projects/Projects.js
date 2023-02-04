import React from "react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Projects = ({data}) => {
  return (
    <div id="projects" className=" mt-20">
      <h1 className=" text-5xl font-bold text-center">Projects</h1>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center align-middle px-10">
        {
          data.map(singleProject => <ProjectsCard key={singleProject.id} singleProject={singleProject}></ProjectsCard>)
        }
      </div>
    </div>
  );
};

export default Projects;
