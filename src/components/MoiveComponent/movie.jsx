import React from 'react'

const Movie = (props) => {
    if(props.count % 2 === 0){
        console.log(props.count)
    }
    return (
        <table style={{backgroundColor: props.count % 2 === 0 ? 'rgb(231, 231, 231)': 'white' }} > 
          <tbody>
            <tr>
                <td>
                    {props.posterpath === null 
                        ? <img width="100" src="Movies-icon.png" alt="No Poster" /> 
                        : <img width="100" src={`https://image.tmdb.org/t/p/w185/${props.posterpath}`} alt="Poster"/>
                    } 
                </td>
                <td>
                    <h3>{props.title}</h3>
                    <p>{props.overview}</p>
                </td>
            </tr>
          </tbody>
        </table>
    )
}

export default Movie;