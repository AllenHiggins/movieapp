import React from 'react'

import MovieList from '../components/MoiveComponent/movieList'

const FilimContainer = (props) => {
    const { filmlist } =  props 
   
    return (
      <div className="FilimContainer">
        {    
          filmlist.length === 0 ? <p>Searching...</p> : <MovieList filmlist={filmlist}/>
        }
      </div>
    );
}

export default FilimContainer;