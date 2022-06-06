import { all } from 'redux-saga/effects';
import { cartWatchers } from './sagas/cartSaga';
import { globalisationWatchers } from './sagas/globalisationSaga';
import { productWatchers } from './sagas/productSaga';

export default function* rootSaga() {
    const watchers = [
        ...productWatchers,
        ...globalisationWatchers,
        ...cartWatchers
    ];

    yield all(watchers.map(x => x()));
}