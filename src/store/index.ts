import {
    createStore,
    applyMiddleware
} from "redux"
import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import gameReducer from "./reducers"
import watcherSagas from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(gameReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherSagas);

export default store