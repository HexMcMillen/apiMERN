import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {

    const { image, name, species, id } = props

    return (
        <div className="characterCard">
            <img src={ image } />
            <div className="characterInfo">
                <Link to={'/character/' + id}>{name}</Link> | 
                <Link to={'/1/' + species}> {species}</Link>
            </div>
        </div>
    );
}

export default CharacterCard;