import React from 'react';
import Banner from './Banner';
import ProjectsName from './Projects/ProjectsName';
import About from '../about/About';
import Skill from '../skill/Skill';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProjectsName></ProjectsName>
            <About></About>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;