import React from "react";

const EpisodeCard = (props) => {

    const { name, episode, date, characters } = props

    return (
        <div className="episodeCard">
            <h1 className="header">{ episode }:</h1>
            <h1 className="header">{ name }</h1>
            <div>
                <h1 className="episodeInfo">Air Date: { date }</h1>
                <h1 className="episodeInfo">Number of Characters Featured:</h1>
                <h1 className="episodeInfo">{ characters.length }</h1>
            </div>
        </div>
    );
}

export default EpisodeCard;