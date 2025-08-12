import img from "../../assets/Alamin.png";

const About = () => {
    return (
        <div className="bg-[#20303F] ">
            <div className="container mx-auto text-white md:flex md:flex-row-reverse gap-5 items-center px-10">
                <div className="md:w-[40%] z-10">
                    <img src={img} alt="" className="" />
                </div>
                <div className="md:w-[60%]">
                    <h3 className="text-4xl text-yellow-600 font-bold mb-8 py-4">Educational Qualification</h3>
                    <p className="text-white text-lg pb-3">
                        <span className="font-bold text-2xl">Name & Background:</span> Md Al Amin, Physics graduate from the University of Dhaka.
                        <br />
                        <span className="font-bold text-2xl">Relevant Coursework:</span> Quantum Mechanics, Electrodynamics, Classical Mechanics, Thermodynamics, Statistical Physics, Solid State Physics, Mathematical Methods for Physics, Computational Physics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;