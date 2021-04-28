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
      payload: 'Shakira',
    };
    expect(actions.fetchRecords('Shakira')).toEqual(expectedAction);
  });
});

describe('REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState, {});
  });
});

describe('REDUCER FETCH RECORDS', () => {
  it('should return records organized by date', () => {
    const action = {
      type: 'RECEIVE_RECORDS_SUCCESS',
      payload: {
        results: [
          {releaseDate: '2007-02-12T08:00:00Z'},
          {releaseDate: '2001-02-12T08:00:00Z'},
          {releaseDate: '2004-02-12T08:00:00Z'},
        ],
      },
    };
    const expectedData = {
      records: [
        {releaseDate: '2007-02-12T08:00:00Z'},
        {releaseDate: '2004-02-12T08:00:00Z'},
        {releaseDate: '2001-02-12T08:00:00Z'},
      ],
      currentArtist: undefined,
      error: null,
    };
    expect(reducer(initialState, action)).toEqual(expectedData);
  });
});
