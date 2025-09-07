import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import SocialIcon from "../../Shared/SocialIcon";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hjoxosm",
                "template_th9pf8i",
                form.current,
                "g4ZoE_d0oCaLznDch"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="">
            <div className="container mx-auto px-10 py-14">
                <h3 className="text-4xl text-yellow-600 font-bold text-center ">
                    Contact Me
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 px-10 py-10">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-semibold">
                                    Name
                                </span>
                            </label>
                            <br/>
                            <input
                                required
                                type="text"
                                placeholder="Name"
                                name="from_name"
                                className="input input-bordered bg-[#343A40] text-white "
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-semibold">
                                    Email
                                </span>
                            </label>
                            <br/>
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                name="from_email"
                                className="input input-bordered bg-[#343A40] text-white"
                            />
                        </div>
                        <label className="label">
                            <span className="label-text text-white text-lg font-semibold">
                                Message
                            </span>
                        </label>
                        <textarea
                            required
                            placeholder="Your Message"
                            name="message"
                            className="textarea textarea-bordered textarea-lg w-full bg-[#343A40] text-white"
                        ></textarea>
                        <button
                            type="submit"
                            className="px-4 py-2 mt-4 rounded text-white bg-blue-500 hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                    <div>
                        <h3 className="text-2xl text-yellow-600 mb-5">Contact Info</h3>
                        <p className="flex items-center text-lg text-white mb-3">
                            <span className="mr-3">
                                <MdLocationOn />
                            </span>
                            Dhaka,Bangladesh
                        </p>
                        <p className="flex items-center text-lg text-white mb-3">
                            <span className="mr-3">
                                <FaPhoneAlt />
                            </span>
                            +8801533686793                            
                        </p>
                        <p className="flex items-center text-lg text-white mb-3">
                            <span className="mr-3">
                                <MdEmail />
                            </span>
                            alaminrajf8@gmail.com
                        </p>
                        <SocialIcon></SocialIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;