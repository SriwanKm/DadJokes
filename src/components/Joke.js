import React, {Component, useEffect, useState} from 'react';
import axios from 'axios'

export default function Joke() {


    // const initialJoke =
    //     {
    //         joke: "This is some funny joke"
    //     }


    const [joke, setJoke] = useState('')
    useEffect(() => {
        getJoke()
    }, [])

    function getJoke() {
        axios.get('https://icanhazdadjoke.com/', {
            headers: {Accept: "Application/json"}
        })
            .then(res => setJoke(res.data))
            .catch(err => console.log(err))
    }

    const fetchJoke = () => {

        getJoke();

    }
    return (
        <div>
            <div className="card mt-4">
                <div className="card-header">
                    Dad Joke
                </div>
                <div className="card-body">
                    <h5 className="card-title">The funniest joke</h5>
                    <p className="card-text">{joke.joke}</p>
                    <a href="#" className="btn btn-primary text-white" onClick={fetchJoke}>Get more joke</a>
                </div>
            </div>
        </div>
    );

}

