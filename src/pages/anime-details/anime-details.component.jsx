import React from 'react';

const AnimeDetails = ({ match }) => {
    return (
        <h1>Anime ID: {match.params.id}</h1>
    )
}

export default AnimeDetails;