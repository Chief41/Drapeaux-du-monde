import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>Découvre Nos drapeaux et les capitales</p>
        </div>
    );
};

export default About;