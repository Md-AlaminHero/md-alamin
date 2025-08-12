import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const SocialIcon = () => {
  return (
    <div className="text-3xl text-blue-500 flex gap-5 my-6">
      <Link to={"https://www.facebook.com/md.al.amin.200289"}>
        <FaFacebookSquare className="transform hover:-translate-y-1 hover:text-blue-600" />
      </Link>
      <Link to={"https://www.linkedin.com/in/md-alamin-pro/"}>
        <FaLinkedin className="transform hover:-translate-y-1 hover:text-blue-600" />
      </Link>
      <Link to={"https://github.com/Md-AlaminHero"}>
        <FaGithub className="transform hover:-translate-y-1 hover:text-blue-600" />
      </Link>
      <Link to={"#"}>
        <FaTwitter className="transform hover:-translate-y-1 hover:text-blue-600" />
      </Link>
    </div>
  );
};

export default SocialIcon;