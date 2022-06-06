import { all } from 'redux-saga/effects';
import { globalisationWatchers } from './sagas/globalisationSaga';
import { productWatchers } from './sagas/productSaga';

export default function* rootSaga() {
    const watchers = [
        ...productWatchers,
        ...globalisationWatchers
    ];

    yield all(watchers.map(x => x()));
}