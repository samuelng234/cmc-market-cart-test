import { all } from 'redux-saga/effects';
import { productWatchers } from './sagas/productSaga';

export default function* rootSaga() {
    const watchers = [
        ...productWatchers
    ];

    yield all(watchers.map(x => x()));
}