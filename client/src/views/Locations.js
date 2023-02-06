import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import LocationCard from "../components/LocationCard";

const Locations = () => {

    const { page } = useParams();
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate();
    const [count, setCount] = useState(page);
    var one = 1;


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location')
            .then((res) => {
                console.log(res.data.results);
                setLocations(res.data.results);
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
                    setLocations(res.data.results);
                })
                .catch((err) => { console.log(err) })
            } else {
                setCount(42)
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count)
                .then((res) => {
                    console.log(res.data.results);
                    setLocations(res.data.results);
                })
                .catch((err) => { console.log(err) })
            }
        } else {
            if (count < 42) {
                setCount(count + one);
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count)
                .then((res) => {
                    console.log(res.data.results);
                    setLocations(res.data.results);
                })
                .catch((err) => { console.log(err) })
            } else {
                setCount(1);
                axios.get('https://rickandmortyapi.com/api/character/?page=' + count)
                .then((res) => {
                    console.log(res.data.results);
                    setLocations(res.data.results);
                })
                .catch((err) => { console.log(err) })
            }
        }
        navigate('/locations/' + count);
    }


    return (
        <div className="allLocations">
            <h1 className="title">Locations</h1>
            <div style={{ display: "flex" }}>
                <div className="displayLocations">
                    {
                        locations.map((location, i) =>
                            <div key={i}>
                                <LocationCard name={location.name} dimension={location.dimension} type={location.type} residents={location.residents}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Locations;