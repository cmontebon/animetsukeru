import React from 'react';
import { useHistory } from 'react-router-dom';

import Searchbar from '../searchbar/searchbar.component';

import './navbar.styles.scss';

const Navbar = () => {
    const history = useHistory();

    return (
        <div className="navbar">
            <div className="logo" onClick={() => history.push('/')}>
                ANIMETSUREKU
            </div>
            
            {/* <div className="links">
                <span className="link">Browse</span>
                <span className="link">Schedules</span>
                <span className="link">Trending</span>
                <span className="link">Genre</span>
            </div> */}

            <div className="search">
                <Searchbar />
            </div>
        </div>
    )
}

export default Navbar;