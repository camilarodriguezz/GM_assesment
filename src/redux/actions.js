import { FETCH_RECORDS, FAIL_FETCH_RECORDS, RECEIVE_RECORDS_SUCCESS } from './constants';


export const fetchRecords = (artist) => {
    console.log('fetchRecords artist ', artist)
    return {
        type: FETCH_RECORDS,
        payload: artist
    }
}

export const receiveRecords = (response) => {
    console.log('receiveRecords response ', response)
    return {
        type: RECEIVE_RECORDS_SUCCESS,
        payload: response
    }
}

export const failFetchRecords = (error) => {
    console.log('failFetchRecords error ', error)
    return {
        type: FAIL_FETCH_RECORDS,
        payload: error
    }
}