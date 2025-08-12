import { SkillBar } from "react-skillbars";

// import SkillBar from "react-skillbars";
const Skill = () => {
    const skills = [
        {
            type: "HTML",
            level: 90,
            color: {
                bar: "#3498db",
                title: { text: "#fff", background: "#2980b9" },
            },
        },
        {
            type: "CSS",
            level: 80,
            color: {
                bar: "#4288d0",
                title: { text: "#fff", background: "#124e8c" },
            },
        },
        {
            type: "JavaScript",
            level: 80,
            color: {
                bar: "#2c3e50",
                title: { text: "#fff", background: "#2c3e50" },
            },
        },
        {
            type: "React",
            level: 80,
            color: {
                bar: "#5a68a5",
                title: { text: "#fff", background: "#46465e" },
            },
        },
        {
            type: "Bootstrap",
            level: 80,
            color: {
                bar: "#525252",
                title: { text: "#fff", background: "#333333" },
            },
        },
        {
            type: "Tailwind",
            level: 80,
            color: {
                bar: "black",
                title: { text: "#111", background: "#fff" },
            },
        },
        {
            type: "Node JS",
            level: 65,
            color: {
                bar: "#2ecc71",
                title: { text: "#fff", background: "#27ae60" },
            },
        },
        {
            type: "Express JS",
            level: 65,
            color: {
                bar: "#3498db",
                title: { text: "#fff", background: "#2980b9" },
            },
        },
        {
            type: "MongoDB",
            level: 70,
            color: {
                bar: "#4288d0",
                title: { text: "#fff", background: "#124e8c" },
            },
        },
        {
            type: "Redux",
            level: 70,
            color: {
                bar: "#2c3e50",
                title: { text: "#fff", background: "#2c3e50" },
            },
        },
        {
            type: "Next JS",
            level: 65,
            color: {
                bar: "#5a68a5",
                title: { text: "#fff", background: "#46465e" },
            },
        },
        {
            type: "TypeScript",
            level: 60,
            color: {
                bar: "black",
                title: { text: "#111", background: "#fff" },
            },
        },
    ];
    return (
        <div className="bg-[#405366]">
            <div className="container mx-auto px-16 py-10">
                <h3 className="text-4xl text-yellow-600 font-bold text-center mb-8 ">
                    My Skills
                </h3>
                <SkillBar skills={skills}></SkillBar>
            </div>
        </div>
    );
};

export default Skill;