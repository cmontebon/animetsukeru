import React from 'react';

import './searchbar.styles.scss';

const Searchbar = () => {
    return (
        <div className="searchbar-container">
            <input className="searchbar" type="text" placeholder="search here..." />
            <div className="result-items-container">
                <div className="item">
                    Anime 1
                </div>
                <div className="item">
                    Anime 2
                </div>
                <div className="item">
                    Anime 3
                </div>
                <div className="item">
                    Anime 1
                </div>
                <div className="item">
                    Anime 2
                </div>
                <div className="item">
                    Anime 3
                </div>
                <div className="item">
                    Anime 1
                </div>
                <div className="item">
                    Anime 2
                </div>
                <div className="item">
                    Anime 3
                </div>
            </div>
        </div>
    )
}

export default Searchbar;