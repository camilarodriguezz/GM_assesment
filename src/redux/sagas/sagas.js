import { FETCH_RECORDS, FAIL_FETCH_RECORDS, RECEIVE_RECORDS_SUCCESS } from '../constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//api
const getRecords = async (artist) => {
    console.log('getRecords artist ', artist)
    return await axios.get(`https://itunes.apple.com/search?term=${artist}`)
        .then((res) => {
            const response = res.data;
            console.log('getRecords response => ', response);
            return response;
        })
        .catch((err) => {
            console.log('getRecords error => ', err)
        })
}

//Generator | worker Saga will be fired on FETCH_RECORDS actions
function* fetchRecordsSaga(action) {
    console.log('fetchRecordsSaga => ', action.payload);
    const artist = action.payload
    try {
        const response = yield call(getRecords, artist);
        console.log('fetchRecordsSaga response => ', response);
        yield put({ type: RECEIVE_RECORDS_SUCCESS, payload: response, artist: artist });
    } catch (e) {
        console.log('fetchRecordsSaga ERROR => ', response);
        yield put({ type: FAIL_FETCH_RECORDS, message: e.message });
    }
}

//Saga
//  Starts fetchRecordsSaga on each dispatched `FETCH_RECORDS` action.
// Allows concurrent fetches of records.
export default function* mySaga() {
    yield takeEvery(FETCH_RECORDS, fetchRecordsSaga);
};