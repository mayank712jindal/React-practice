import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Movies = () => {

    const [number, updateNum] = useState(1);
    const [movies, setMovies] = useState();

    useEffect(() => {
        // fetch(`https://api.tvmaze.com/shows/${number}`)
        //     .then(data => data.json())
        //     .then(res => setMovies(res.image.medium))

        async function fetchMovie() {
            const res = await axios.get(`https://api.tvmaze.com/shows/${number}`);
            console.log(res.data.image.medium)
            setMovies(res.data.image.medium);
        }
        fetchMovie()
    }, [number])

    return (

        <>
            <select value={number} onChange={(e) => { updateNum(e.target.value) }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br /><br />
            <img src={movies} alt="image" />
        </>
    )
}

export default Movies