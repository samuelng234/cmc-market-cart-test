import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Country } from '../../models/country';
import { Product } from '../../models/product';
import { GET_CURRENCY_CODE, GET_COUNTRY_LIST } from '../actions/actionTypes';
import { setDefaultCountry, setSelectedCountry, setCountryList } from '../reducers/globalisationReducer';

const mainAxios = axios.create({
    baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'https://localhost:7056/Globalistion' : ''
});

const getCurrencyCodeData = () => {
    return mainAxios.get("/default");
}

const getCountryListData = () => {
    return mainAxios.get("/countries");
}

function* getCurrencyCode() {
    try {
        const { data }: { data: Country } = yield call(getCurrencyCodeData);

        yield put(setDefaultCountry(data));
        yield put(setSelectedCountry(data));
    } catch (error) {
        console.log(error);
    }
}

function* getCountryList() {
    try {
        const { data }: { data: Country[] } = yield call(getCountryListData);

        yield put(setCountryList(data));
    } catch (error) {
        console.log(error);
    }
}

function* watchGetCurrencyCode() {
    yield takeLatest(GET_CURRENCY_CODE, getCurrencyCode);
}

function* watchGetCountryList() {
    yield takeLatest(GET_COUNTRY_LIST, getCountryList);
}

export const globalisationWatchers = [
    watchGetCurrencyCode,
    watchGetCountryList
];