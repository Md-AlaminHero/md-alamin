import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const ProjectsName = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <>
            <h1 className='font-bold text-4xl text-center mt-10 text-yellow-500'>Projects</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 lg:px-20'>
                {
                    projects.map((project, index) => <>

                        <div key={index} className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-amber-300 hover:shadow-sm transition-shadow duration-300 flex flex-col h-full">
                            <img
                                className="w-full h-48 object-cover"
                                src={project.image}
                                alt={project.project_name}
                            />
                            <div className="p-5 flex justify-between items-center flex-grow">
                                <p className='text-2xl text-yellow-700 font-bold'>{project.project_name}</p>
                                <Link to={`/project/${project.project_id}`}>
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-colors duration-200 cursor-pointer mt-4">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>
        </>
    );
};

export default ProjectsName;