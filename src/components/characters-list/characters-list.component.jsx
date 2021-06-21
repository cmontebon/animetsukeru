import React from 'react';

import './characters-list.styles.scss';

const CharactersList = ({data}) => {
    return (
        <div className="characters-list">
            { data.map(item => (
                <div 
                    key={item.node.id}
                    className="item"
                    style={{backgroundImage: `url("${item.node.image.large}")`}}
                >
                    { item.voiceActors.length > 0 && 
                        <div className="voice-actor"> 
                            <div 
                                className="avatar"
                                style={{backgroundImage: `url("${item.voiceActors[0].image.medium}")`}}
                            />
                            <div className="details">
                                <div>{item.voiceActors[0].name.first + ' ' + item.voiceActors[0].name.last}</div>
                                <div>as {item.node.name.first + ' ' + item.node.name.last}</div>
                            </div>
                        </div>
                    }
                </div>
            ))}

            
        </div>
    )
}

export default CharactersList;