import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {

    const { page } = useParams();
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    const [count, setCount] = useState(page);
    var one = 1;


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/?page=' + page)
            .then((res) => {
                console.log(res.data.results);
                setCharacters(res.data.results);
            })
            .catch((err) => { console.log(err) })
    }, []);

    const onClick = (value) => {
        if (value == 0) {
            if (count > 1) {
                setCount(count - one);
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            } else {
                setCount(42)
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            }
        } else {
            if (count < 42) {
                setCount(count + one);
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            } else {
                setCount(1);
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            }
        }
        navigate('/characters/' + count);
    }


    return (
        <div className="allCharacters">
            <h1 className="title">Characters</h1>
            <div style={{ display: "flex" }}>
                <button onClick={(e) => onClick(0)} >Prev</button>
                <div className="displayCharacters">
                    {
                        characters.map((character, i) =>
                            <div key={i}>
                                <CharacterCard image={character.image} name={character.name} species={character.species} id={ character.id }/>
                            </div>
                        )
                    }
                </div>
                <button onClick={(e) => onClick(1)} >Next</button>
            </div>
        </div>
    );
}

export default Characters;