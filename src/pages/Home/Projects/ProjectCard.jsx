import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
    const { image, project_name, feature, live_site, technology, github_client } =
        project;
    return (
        <div className="card bg-[#20303F] shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
                <h2 className="text-center text-xl font-semibold">{project_name}</h2>
                <p>{feature}</p>
                <div className="flex flex-wrap gap-2">
                    {technology.map((item, index) => (
                        <span className="badge badge-info" key={index}>
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between text-2xl mt-3">
                    <Link to={live_site}>
                        <TbWorldWww className="transform hover:-translate-y-1 hover:text-blue-600" />
                    </Link>
                    <Link to={github_client}>
                        <FaGithub className="transform hover:-translate-y-1 hover:text-blue-600" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;