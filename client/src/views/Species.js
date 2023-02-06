import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

const Species = () => {

    const { page, species } = useParams();
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    const [count, setCount] = useState(page);
    var one = 1;

    const testCase = () => {
        if (species === "Human") { return 22 };
        if (species === "Alien") { return 11 };
        if (species === "Humanoid") { return 4 };
        if (species === "Robot" || species === "Mythological" || species === "Animal") { return 3 };
        if (species === "Poopybutthole" || species === "Unknown" || species === "Cronenberg" || species === "Disease") { return 1 };
    }


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/?page=' + page + '&species=' + species)
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
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count + '&species=' + species)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            } else {
                setCount(testCase());
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count + '&species=' + species)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            }
        } else {
            if (count < testCase()) {
                setCount(count + one);
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count + '&species=' + species)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            } else {
                setCount(1);
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count + '&species=' + species)
                .then((res) => {
                    console.log(res.data.results);
                    setCharacters(res.data.results);
                })
                .catch((err) => { console.log(err) })
            }
        }
        navigate('/'+ count +'/' + species);
    }


    return (
        <div className="allCharacters">
            <h1 className="title">Species: { species }</h1>
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

export default Species;