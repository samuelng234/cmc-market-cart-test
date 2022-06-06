import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

// Create sagas middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );
    // Running sagas
    sagaMiddleware.run(rootSaga);
    return store;
}