import React from 'react';
import moment from 'moment';

import Navbar from '../../components/navbar/navbar.component';
import CharactersList from '../../components/characters-list/characters-list.component';

import { SeriesPageData } from '../../fixtures/series-id-page.data';

import './anime-details.styles.scss';

const AnimeDetails = ({ match }) => {
    console.log(SeriesPageData);

    const { data : { Media } } = SeriesPageData;
    const { 
        coverImage, 
        bannerImage, 
        description, 
        characters, 
        title, 
        genres,
        episodes,
        season,
        source,
        status,
        synonyms
     } = Media;

    return (
        <>
            <Navbar />

            <div className="anime-details">
                <div className="banner" style={{ backgroundImage: `url("${bannerImage}")`}} />
            
                <div className="content">
                    <div className="general">
                        <div className="display-photo" style={{ backgroundImage: `url("${coverImage.large}")`}}></div>

                        <div className="details">
                            <h1 className="title">{ title.english }</h1>

                            <div className="alternative-titles">
                                { Object.keys(title).map(k => {
                                    if (k != 'english') {
                                        return title[k] + ', ';
                                    }
                                })}
                            </div>

                            <div className="genres">
                                { genres.map((item, idx) => {
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
                                    <span className="label">Episodes: </span>{episodes}
                                </div>
                                <div>
                                    <span className="label">Status: </span>{status}
                                </div>
                                <div>
                                    <span className="label">Season: </span>{season}
                                </div>
                                <div>
                                    <span className="label">Source: </span>{source}
                                </div>
                            </div>

                            <div style={{padding: '5px 0'}}>
                                <h5>Synonyms</h5>
                                <span>{synonyms.join(', ')}</span>
                            </div>
                        </div>
                        
                        {/* main content */}
                        <div className="main">
                            <div>
                                <h3>Description</h3>
                                <p dangerouslySetInnerHTML={{__html: description}} />
                            </div>
                            
                            <div>
                                <h3 style={{padding: '20px 0'}}>Characters & Voice Actors</h3>
                                <CharactersList data={characters.edges}/>
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