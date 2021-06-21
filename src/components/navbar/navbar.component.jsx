import React from 'react';

import './navbar.styles.scss';

import Searchbar from '../searchbar/searchbar.component';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Animetsureku</div>
            
            <div className="links">
                <span className="link">Browse</span>
                <span className="link">Schedules</span>
                <span className="link">Trending</span>
                <span className="link">Genre</span>
            </div>

            <div className="search">
                <Searchbar />
            </div>
        </div>
    )
}

export default Navbar;