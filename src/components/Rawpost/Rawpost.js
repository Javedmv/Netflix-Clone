import React, { useEffect, useState } from 'react'
import { imageUrl, API_KEY_HERE } from '../../Constants'
import './rawpost.css'
import axios from '../../axios'

function Rawpost() {
  const [movies,setMovies] = useState([]);
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY_HERE}&with_networks=213`).then((res) => setMovies(res.data.results)).catch((err) => console.log(err));
  },[])

  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className='posters'>
            { movies.map((movie) => <img className='poster' src={imageUrl+movie.backdrop_path} alt='poster' /> ) }
        </div>
    </div>
  )
}

export default Rawpost