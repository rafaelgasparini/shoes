import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from "./modules/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const echancer = process.env.NODE_ENV === 'development' ?
    compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
    ) :
    applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, echancer);

sagaMiddleware.run(rootSaga);

export default store;