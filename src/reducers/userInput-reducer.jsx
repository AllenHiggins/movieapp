export const userInputReducer = (state = {
    title: 'Marvel'
}, action) => {
    switch(action.type){
        case 'USER_INPUT_FILMTITLE':
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
};