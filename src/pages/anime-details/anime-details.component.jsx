import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useQuery, gql } from "@apollo/client";

import Navbar from '../../components/navbar/navbar.component';
import CharactersList from '../../components/characters-list/characters-list.component';

import { SeriesPageData } from '../../fixtures/series-id-page.data';

import { GET_SERIES_PAGE_BY_ID } from '../../graphql/queries'; 

import './anime-details.styles.scss';

const AnimeDetails = ({ match }) => {
    const { loading, error, data } = useQuery(GET_SERIES_PAGE_BY_ID, {
        variables: {
            id: match.params.id,
            type: 'ANIME'
        }
    });

    if (loading) return <span>Loading...</span>;

    console.log(data)


    return (
        <>
            <Navbar />

            <div className="anime-details">
                <div className="banner" style={{ backgroundImage: `url("${data.Media.bannerImage}")`}} />
            
                <div className="content">
                    <div className="general">
                        <div className="display-photo" style={{ backgroundImage: `url("${data.Media.coverImage.large}")`}}></div>

                        <div className="details">
                            <h1 className="title">{ data.Media.title.english }</h1>

                            <div className="alternative-titles">
                                { Object.keys(data.Media.title).map(k => {
                                    if (k != 'english') {
                                        return data.Media.title[k] + ', ';
                                    }
                                })}
                            </div>

                            <div className="genres">
                                { data.Media.genres.map((item, idx) => {
                                    return <span key={idx}>{item}</span>
                                })}
                            </div> 

                            <div></div>
                        </div>
                    </div>

                    <div className="more-information">
                        {/* sidebar */}
                        <div className="sidebar">
                            <div>
                                <h5>Information</h5>
                                <div>
                                    <span className="label">Episodes: </span>{data.Media.episodes}
                                </div>
                                <div>
                                    <span className="label">Status: </span>{data.Media.status}
                                </div>
                                <div>
                                    <span className="label">Season: </span>{data.Media.season}
                                </div>
                                <div>
                                    <span className="label">Source: </span>{data.Media.source}
                                </div>
                            </div>

                            <div style={{padding: '5px 0'}}>
                                <h5>Synonyms</h5>
                                <span>{data.Media.synonyms.join(', ')}</span>
                            </div>
                        </div>
                        
                        {/* main content */}
                        <div className="main">
                            <div>
                                <h3>Description</h3>
                                <p dangerouslySetInnerHTML={{__html: data.Media.description}} />
                            </div>
                            
                            <div>
                                <h3 style={{padding: '20px 0'}}>Characters & Voice Actors</h3>
                                
                                <CharactersList data={data.Media.characters.edges}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            {/* <h1>Anime ID: {match.params.id}</h1> */}
       </>
    )
}

export default AnimeDetails;