import React from 'react';
import NavItem from './Components/NavItem';

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <NavItem text="sunsets" />
                <NavItem text="waterfalls" />
                <NavItem text="rainbows" />
            </ul>
        </nav>
    )
};

export default MainNav;