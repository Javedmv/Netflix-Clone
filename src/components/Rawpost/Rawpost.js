import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { imageUrl,API_KEY_HERE } from '../../Constants'
import './rawpost.css'
import axios from '../../axios'

function Rawpost({title,urls,isSmall}) {
  const [movies,setMovies] = useState([]);
  const [urlId,setUrlId] = useState('');

  useEffect(() => {
    axios.get(urls).then((res) => setMovies(res.data.results)).catch((err) => console.log(err));
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  function handleMovieTrailer(id){
    axios.get(`/movie/${id}/videos?api_key=${API_KEY_HERE}&language=en-US`).then((res) => {
      if(res.data.length !== 0){
        setUrlId(res.data.results[0]);
      }else{
        console.log('traliler not available');
      }
    }
  )
  }
  return (
    <div className='row'>
        <h2 style={{color:'white'}}>{title}</h2>
        <div className='posters'>
            { movies.map((movie) => (
              <>
                <img onClick={()=> handleMovieTrailer(movie.id)} className={isSmall?'smallPoster':'poster'} src={imageUrl+movie.backdrop_path} alt='poster' key={movie.id} /> 
                <h3 className='poster-text'>{movie.title || movie.name}</h3>
              </>
            )
          ) }
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default Rawpost