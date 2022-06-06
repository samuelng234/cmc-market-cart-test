import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Product } from '../../models/product';
import { GET_PRODUCTS_LIST } from '../actions/actionTypes';
import { setProductList } from '../reducers/productReducer';

const mainAxios = axios.create({
    baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'https://localhost:7056' : ''
});

const getProductdata = () => {
    return mainAxios.get("/Product");
}

function* getProductList() {
    try {
        const { data }: { data: Product[] } = yield call(getProductdata);

        yield put(setProductList(data));
    } catch (error) {
        console.log(error);
    }
}

function* watchGetProductList() {
    yield takeLatest(GET_PRODUCTS_LIST, getProductList);
}

export const productWatchers = [
    watchGetProductList
];