import React from 'react';

import Navbar from '../../components/navbar/navbar.component';

import './anime-details.styles.scss';

const AnimeDetails = ({ match }) => {
    

    return (
        <>
            <Navbar />

            <div className="anime-details">
                <div className="banner" style={{ backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/103900-I3gUCm5xlsyX.jpg")'}} />
            
                <div className="content">
                    <div className="general">
                        <div className="display-photo" style={{ backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/103900-I3gUCm5xlsyX.jpg")'}}></div>

                        <div className="details">
                            <h1 className="title">Kobayashi-san Chi no Maid Dragon S</h1>

                            <div className="alternative-titles">
                                小林さんちのメイドラゴンS, Miss Kobayashi's Dragon Maid
                            </div>

                            <div className="genres">
                                <span>ecchi</span>
                                <span>romance</span>
                                <span>thriller</span>
                                <span>mystery</span>
                            </div> 

                            <div></div>
                        </div>
                    </div>

                    <div className="more-information">
                        {/* sidebar */}
                        <div className="sidebar">
                            <h5>Information</h5>
                            <div>
                                <span className="label">Episodes: </span>Unknown
                            </div>
                            <div>
                                <span className="label">Status: </span>Not aired yet
                            </div>
                            <div>
                                <span className="label">Aired: </span>Jul 8, 2021 to ?
                            </div>
                            <div>
                                <span className="label">Studios: </span>Kyoto Animation
                            </div>
                        </div>
                        {/* main content */}
                        <div className="main">
                            <div>
                                <h3>Description</h3>
                                <p>Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans. nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.</p>
                            </div>
                            <div>
                                <h3>Characters and Voice Actors</h3>
                                <div className="characters-list">
                                    <div 
                                        className="item"
                                        style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png")'}}
                                    >

                                        <div className="voice-actor"> 
                                            <div 
                                                className="avatar"
                                                style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/staff/medium/n100295-d7CPqlz4jGaT.png")'}}
                                            />
                                            <div className="details">
                                                <div>Minatozaki Sana</div>
                                                <div>as Mikasa Ackerman</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        className="item"
                                        style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png")'}}
                                    >

                                        <div className="voice-actor"> 
                                            <div 
                                                className="avatar"
                                                style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/staff/medium/n100295-d7CPqlz4jGaT.png")'}}
                                            />
                                            <div className="details">
                                                <div>Minatozaki Sana</div>
                                                <div>as Mikasa Ackerman</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        className="item"
                                        style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png")'}}
                                    >

                                        <div className="voice-actor"> 
                                            <div 
                                                className="avatar"
                                                style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/staff/medium/n100295-d7CPqlz4jGaT.png")'}}
                                            />
                                            <div className="details">
                                                <div>Minatozaki Sana</div>
                                                <div>as Mikasa Ackerman</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        className="item"
                                        style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png")'}}
                                    >

                                        <div className="voice-actor"> 
                                            <div 
                                                className="avatar"
                                                style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/staff/medium/n100295-d7CPqlz4jGaT.png")'}}
                                            />
                                            <div className="details">
                                                <div>Minatozaki Sana</div>
                                                <div>as Mikasa Ackerman</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        className="item"
                                        style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png")'}}
                                    >

                                        <div className="voice-actor"> 
                                            <div 
                                                className="avatar"
                                                style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/staff/medium/n100295-d7CPqlz4jGaT.png")'}}
                                            />
                                            <div className="details">
                                                <div>Minatozaki Sana</div>
                                                <div>as Mikasa Ackerman</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        className="item"
                                        style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png")'}}
                                    >

                                        <div className="voice-actor"> 
                                            <div 
                                                className="avatar"
                                                style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/staff/medium/n100295-d7CPqlz4jGaT.png")'}}
                                            />
                                            <div className="details">
                                                <div>Minatozaki Sana</div>
                                                <div>as Mikasa Ackerman</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        className="item"
                                        style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/character/medium/b40881-F3gr1PkreDvj.png")'}}
                                    >

                                        <div className="voice-actor"> 
                                            <div 
                                                className="avatar"
                                                style={{backgroundImage: 'url("https://s4.anilist.co/file/anilistcdn/staff/medium/n100295-d7CPqlz4jGaT.png")'}}
                                            />
                                            <div className="details">
                                                <div>Minatozaki Sana</div>
                                                <div>as Mikasa Ackerman</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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