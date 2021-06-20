import React from 'react';

import Searchbar from '../../components/searchbar/searchbar.component';

import './homepage.styles.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <h1>Animetsureku</h1>

            <div className="searchbar">
                <Searchbar />
            </div>

            <div className="sub-urls">
                <span>Browse</span>
                <span>Schedules</span>
                <span>Trending</span>
                <span>Genre</span>
            </div>
        </div>
    )
    
}

export default Homepage;