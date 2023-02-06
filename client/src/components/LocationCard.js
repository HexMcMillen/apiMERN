import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {

    const { name, dimension, type, residents } = props

    return (
        <div className="locationCard">
            <div className="locationInfo">
                <h1 className="locationName">{ name }</h1> 
                <h1>{ dimension }</h1>
                <h1>{ type }</h1>
                <h1 className="residents">Number of Residents: { residents.length }</h1>
            </div>
        </div>
    );
}

export default LocationCard;