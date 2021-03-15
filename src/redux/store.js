import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import mySaga from './sagas/sagas';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([mySaga()])
}

sagaMiddleware.run(rootSaga);

export default store;