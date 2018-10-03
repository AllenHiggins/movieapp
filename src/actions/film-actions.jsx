
export const filmGetListByTitle = (title) => {
    return (dispatch) => {
        // GET
        const URL = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=ad15983bd210a7516df5735e5abb5f4f`
        
        fetch(URL)
        .then( response => {
            return response.json();
        })
        .then( filmList => {
            dispatch({
                type:'GET_FILM_LIST',
                payload: filmList.results
            })
        })
        .catch( error => {
            console.log(`${error}`)
        })   
    }
}
