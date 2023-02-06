import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

const HomePage = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(`http://rickandmortyapi.com/api/character/1,2,3,4,5`)
            .then((res) => {
                console.log(res.data);
                setCharacters(res.data);
            })
            .catch((err) => { console.log(err) })
    }, []);

    return (
        <div>
            <div className="top">
                <h1>Rick and Morty API</h1>
            </div>
            <div className="bottom">
                <div className="boxHolder">
                    <Link to="/characters/1" className="box">Characters</Link>
                    <Link to="/locations" className="box">Locations</Link>
                    <Link to="/episodes" className="box">Episodes</Link>
                </div>
                <div className="homeCards">
                    {
                        characters.map((character, i) =>
                            <div key={i}>
                                <CharacterCard image={character.image} name={character.name} species={character.species} id={character.id}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;