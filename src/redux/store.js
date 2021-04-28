import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import mySaga from './sagas/sagas';
import { all } from 'redux-saga/effects';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount Saga middleware on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//Sagas organized in rootSaga
function* rootSaga() {
    yield all([mySaga()])
}

// run the saga
sagaMiddleware.run(rootSaga);

export default store;