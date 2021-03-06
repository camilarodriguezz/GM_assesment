import { FETCH_RECORDS, FAIL_FETCH_RECORDS, RECEIVE_RECORDS_SUCCESS } from './constants';

let initialState = {
    currentArtist: '',
    records: [],
    error: null,
};

export default reducer = (state = initialState, action) => {
    console.log('reducer.state => ', state)
    console.log('reducer.action => ', action)
    switch (action.type) {
        case RECEIVE_RECORDS_SUCCESS:
            return Object.assign({}, state, {
                records: action.payload.results.sort(function(a,b){
                    return new Date(a.releaseDate) - new Date(b.releaseDate);
                  }),
                currentArtist: action.artist,
            });
        case FAIL_FETCH_RECORDS:
            return Object.assign({}, state, {
                error: action.message
            });
        default:
            return state;
    };
};

console.log('initialState reducer', initialState)

// records.sort(function(a,b){
//     return new Date(b.releaseDate) - new Date(a.releaseDate);
//   });