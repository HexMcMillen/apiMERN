import axios from "axios";
import React, { useEffect, useState } from "react";
import EpisodeCard from "../components/EpisodeCard";

const Episodes = () => {

    const [seasonOne, setSeasonOne] = useState([]);
    const [seasonTwo, setSeasonTwo] = useState([]);
    const [seasonThree, setSeasonThree] = useState([]);
    const [seasonFour, setSeasonFour] = useState([]);
    const [seasonFive, setSeasonFive] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11')
            .then( (res) => { setSeasonOne(res.data) })
            .catch( (err) => { console.log(err) })
    },[]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/12,13,14,15,16,17,18,19,20,21')
            .then( (res) => { setSeasonTwo(res.data) })
            .catch( (err) => { console.log(err) })
    },[]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/22,23,24,25,26,27,28,29,30,31')
            .then( (res) => { setSeasonThree(res.data) })
            .catch( (err) => { console.log(err) })
    },[]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/32,33,34,35,36,37,38,39,40,41')
            .then( (res) => { setSeasonFour(res.data) })
            .catch( (err) => { console.log(err) })
    },[]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/42,43,44,45,46,47,48,49,50,51')
            .then( (res) => { setSeasonFive(res.data) })
            .catch( (err) => { console.log(err) })
    },[]);

    return (
        <div className="allCharacters">
            <h1 className="title">Episodes</h1>
            <h1 className="episodeTitle">Season One</h1>
            <div className="episodeHandler">
                {
                    seasonOne.map( (episode, i) => 
                        <div key={i}>
                            <EpisodeCard name={episode.name} episode={episode.episode} date={episode.air_date} characters={episode.characters} />
                        </div>
                    )
                }
            </div>
            <h1 className="episodeTitle">Season Two</h1>
            <div className="episodeHandler">
                {
                    seasonTwo.map( (episode, i) => 
                        <div key={i}>
                            <EpisodeCard name={episode.name} episode={episode.episode} date={episode.air_date} characters={episode.characters} />
                        </div>
                    )
                }
            </div>
            <h1 className="episodeTitle">Season Three</h1>
            <div className="episodeHandler">
                {
                    seasonThree.map( (episode, i) => 
                        <div key={i}>
                            <EpisodeCard name={episode.name} episode={episode.episode} date={episode.air_date} characters={episode.characters} />
                        </div>
                    )
                }
            </div>
            <h1 className="episodeTitle">Season Four</h1>
            <div className="episodeHandler">
                {
                    seasonFour.map( (episode, i) => 
                        <div key={i}>
                            <EpisodeCard name={episode.name} episode={episode.episode} date={episode.air_date} characters={episode.characters} />
                        </div>
                    )
                }
            </div>
            <h1 className="episodeTitle">Season Five</h1>
            <div className="episodeHandler">
                {
                    seasonFive.map( (episode, i) => 
                        <div key={i}>
                            <EpisodeCard name={episode.name} episode={episode.episode} date={episode.air_date} characters={episode.characters} />
                        </div>
                    )
                }
            </div>
        </div>
        
    );
}

export default Episodes;