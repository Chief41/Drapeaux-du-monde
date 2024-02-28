import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to="/"><li>Accueil</li></NavLink>
            <NavLink to="/about"><li>A propos</li></NavLink>
        </div>
    );
};

export default Navigation;