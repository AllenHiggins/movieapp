import React from 'react'

import Movie from './movie'

const MoiveList = (props) => {
    
    const { filmlist } = props
    let count = 0
    return ( 
        filmlist.map( film => {    
           count++
            return (
                <Movie 
                    count={count}
                    key={film.id}
                    title={film.title}
                    posterpath={film.poster_path}
                    overview= {film.overview}/>
            )
        })
    )
}

export default MoiveList;