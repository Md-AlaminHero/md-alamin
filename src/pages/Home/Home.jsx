import React from 'react';
import Banner from './Banner';
import About from '../about/About';
import Skill from '../skill/Skill';
import Contact from '../contact/Contact';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;