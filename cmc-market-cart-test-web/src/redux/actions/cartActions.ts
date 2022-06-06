import { Action } from '@reduxjs/toolkit';
import { CartItem } from '../../models/cartItem';
import { CALCULATE_SHIPPING } from './actionTypes';

export type CalculateShippingRequestPayload = Action<typeof CALCULATE_SHIPPING> & {
    items: CartItem[]
};