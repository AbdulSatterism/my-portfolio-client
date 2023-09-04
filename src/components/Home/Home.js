import React from 'react';
import HomeInfo from '../Page/HomeInfo/HomeInfo';
import Skills from '../Page/Skill/Skills';
import Projects from '../Page/Project/Projects';

const Home = () => {
    return (
        <div>
            <HomeInfo></HomeInfo>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;