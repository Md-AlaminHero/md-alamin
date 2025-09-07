import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    // console.log(projects);

    return (
        <div className="">
            <div className="container mx-auto ">
                <h2 className="text-4xl text-yellow-600 font-bold text-center py-12">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-8">
                    {projects &&
                        projects.map((project, index) => (
                            <ProjectCard key={index} project={project}></ProjectCard>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;