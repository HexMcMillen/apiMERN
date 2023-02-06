import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OneCharacter = () => {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
    const [origin, setOrigin] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        axios.get('http://rickandmortyapi.com/api/character/' + id)
            .then( (res) => { 
                // console.log(res); 
                setName(res.data.name);
                setImage(res.data.image);
                setSpecies(res.data.species);
                setStatus(res.data.status);
                setOrigin(res.data.origin.name);
                setLocation(res.data.location.name); })
            .catch( (err) => { console.log(err) })
    },[]);

    return (
        <div className="oneCharacterBox">
            <div className="oneCharacter">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="info">
                    <h1>Name: { name }</h1>
                    <h1>Species: <Link to={`/1/${species}`}>{ species }</Link></h1>
                    <h1>Status: { status }</h1>
                    <h1>Origin: <Link to={'/locations'}>{ origin }</Link></h1>
                    <h1>Current Location: <Link to={'/locations'}>{ location }</Link></h1>
                </div>
            </div>
        </div>
    );
}

export default OneCharacter;