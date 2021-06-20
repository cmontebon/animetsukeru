import React, { useState, useEffect } from 'react';

import {useQuery, gql } from "@apollo/client";
import { useHistory } from 'react-router-dom';

import './searchbar.styles.scss';

const SEARCH_QUERY = gql`
query ($query: String, $type: MediaType) {
  Page {
    media(search: $query, type: $type) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        medium
        large
        color
      }
      bannerImage
      format
      type
      averageScore
      popularity
      episodes
      season
      hashtag
      isAdult
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
    }
  }
}`;

const Searchbar = () => {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const { loading, error, data, refetch } = useQuery(SEARCH_QUERY, {
        variables:{query: '', type: 'ANIME', skip: !search}
    });

    useEffect(() => {
        setTimeout(() => {
            refetch({query: search})
        }, 3000)
    }, [search])

    useEffect(() => {
        setIsloading(loading);
    }, [loading])

    return (
        <div className="searchbar-container">
            <input className="searchbar" type="text" placeholder="search here..." onChange={ (e) => setSearch(e.target.value) } />
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