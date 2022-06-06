import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CartItem } from '../../models/cartItem';
import { CALCULATE_SHIPPING } from '../actions/actionTypes';
import { CalculateShippingRequestPayload } from '../actions/cartActions';
import { setTotalShippingCost } from '../reducers/cartReducer';

const mainAxios = axios.create({
    baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'https://localhost:7056/Cart' : ''
});

const calculateShippingCost = (items: CartItem[]) => {
    return mainAxios.post("/shipping", { items: items });
}

function* calculateShipping(action: CalculateShippingRequestPayload) {
    try {
        const { data }: { data: number } = yield call(calculateShippingCost, action.items);

        yield put(setTotalShippingCost(data));
    } catch (error) {
        console.log(error);
    }
}

function* watchCalculateShipping() {
    yield takeLatest(CALCULATE_SHIPPING, calculateShipping);
}

export const cartWatchers = [
    watchCalculateShipping
];