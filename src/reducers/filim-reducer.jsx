export const filmReducer = (state = {
    filmList: []
}, action) => {
    switch(action.type){
        case 'GET_FILM_LIST':
            return {
                ...state,
                filmList: action.payload
            }
        default:
            return state;
    }
};