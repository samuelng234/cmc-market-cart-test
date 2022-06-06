import { Action } from '@reduxjs/toolkit';
import { GET_PRODUCTS_LIST } from './actionTypes';

export type GetProductsListRequestPayload = Action<typeof GET_PRODUCTS_LIST>;