import img from "../../assets/Alamin.png";

const About = () => {
    return (
        <div className="bg-[#20303F] ">
            <div className="container mx-auto text-white md:flex gap-5 items-center px-10">
                <div className="md:w-[40%] z-10">
                    <img src={img} alt="" className="" />
                </div>
                <div className="md:w-[60%]">
                    <h3 className="text-4xl text-yellow-600 font-bold mb-8 py-4">About Me</h3>
                    <p className="text-white text-lg pb-3">
                        <span className="font-bold text-2xl">Name & Background:</span> Md Al Amin, Physics graduate from the University of Dhaka and MERN stack learner.
                        <br/>
                        <span className="font-bold text-2xl">Programming Journey:</span> Started with curiosity about how websites work, leading to building interactive, user-friendly web applications.
                        <br/>
                        <span className="font-bold text-2xl">Work Preference:</span> Enjoys working on full-stack projects, handling both front-end and back-end development.
                        <br/>
                        <span className="font-bold text-2xl">Hobbies & Interests:</span> Exploring tech trends, playing cricket, and spending time with friends.
                        <br/>
                        <span className="font-bold text-2xl">Personality:</span> Curious, dedicated, and adaptable; enjoys problem-solving and continuous learning.
                    </p>
                    <hr/>
                    <div className="flex gap-10 mt-5 py-3">
                        <div className="w-1/2">
                            <span className="text-2xl font-semibold">Name:</span>
                            <p className="text-lg">Md Al Amin</p>
                            <span className="text-2xl font-semibold">Phone:</span>
                            <p className="text-lg">+8801533686793</p>
                        </div>
                        <div>
                            <span className="text-2xl font-semibold">Email:</span>
                            <p className="text-lg">alaminrajf8@gmail.com</p>
                            <span className="text-2xl font-semibold">LinkedIn:</span>
                            <p className="text-lg">
                                https://www.linkedin.com/in/md-alamin-pro/
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;