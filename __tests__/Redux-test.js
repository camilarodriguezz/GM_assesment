import * as actions from '../src/redux/actions';
import reducer from '../src/redux/reducer';

let initialState = {
    currentArtist: '',
    records: [],
    error: null,
};

describe('ACTIONS', () => {
    it('should create an action with correct type', () => {
        const expectedAction = {
            type: 'FETCH_RECORDS',
            payload: 'Shakira'
        }
        expect(actions.fetchRecords('Shakira')).toEqual(expectedAction)
    })
});

describe('REDUCER', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState, {})
    })
});