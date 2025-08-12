import { Link } from "react-router";
import img from "../../assets/Alamin.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialIcon from "../../Shared/SocialIcon";

const Banner = () => {
    const [text] = useTypewriter({
        words: [
            "Frontend Developer",
            "Full-Stack Web Developer",
            "MERN Stack Developer",
            "React Developer",
            "Backend Developer",
        ],
        loop: 0,
        typeSpeed: 120,
        // delaySpeed: 1300
    });
    return (
        <div className="bg-[#20303F] ">
            <div className="container mx-auto md:flex justify-between items-center px-16">
                <div>
                    <p className="text-3xl lg:text-5xl font-bold text-yellow-600 pt-5">
                        Hi
                        <br /> This is Md Al Amin
                    </p>
                    <p className="my-5">
                        <span className="text-2xl text-[#F5EEDD]">I am a </span> <span className="text-3xl text-teal-400 font-semibold">{text}</span>
                        <Cursor cursorColor="white" />
                    </p>
                    <SocialIcon></SocialIcon>
                    <div className="mt-5">
                        <Link to={"/contact"}>
                            <button
                                type="button"
                                className="px-4 py-2 rounded text-white  mr-3 bg-blue-500 hover:bg-blue-700"
                            >
                                Hire Me
                            </button>
                        </Link>
                        <Link
                            to={
                                "#"
                            }
                        >
                            <button
                                type="button"
                                className="px-4 py-2 rounded text-white  bg-blue-500 hover:bg-blue-700"
                            >
                                Download CV
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="z-10">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;