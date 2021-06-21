import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { useHistory } from 'react-router-dom';

import { SEARCH_QUERY } from '../../graphql/queries';

import './searchbar.styles.scss';

const Searchbar = () => {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const { loading, error, data, refetch } = useQuery(SEARCH_QUERY, {
        variables:{query: '', type: 'ANIME', skip: !search}
    });

    useEffect(() => {
        const searchTerm = setTimeout(() => {
          if (!search) return;
          refetch({query: search})
        }, 1500);

        return () => clearTimeout(searchTerm);
    }, [search])

    useEffect(() => {
        setIsloading(loading);
    }, [loading])

    return (
        <div className="searchbar">
            <input className="search-input" type="text" placeholder="search here..." onChange={ (e) => setSearch(e.target.value) } />
            <div className="result-items-container" style={{ display: search ? 'block' : 'none' }}>
                { isLoading ? 
                    <div>Loading...</div>
                 :
                    data && 
                    data.Page.media.map((item) => (
                        <div key={item.id} className="item" onClick={() => history.push(`/anime/${item.id}`)}>
                            {/* <img src={item.coverImage.medium} alt="" /> */}
                            <span>
                                { item.title.english || item.romaji }
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Searchbar;