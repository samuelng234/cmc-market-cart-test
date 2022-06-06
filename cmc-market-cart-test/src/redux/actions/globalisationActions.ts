import { Action } from '@reduxjs/toolkit';
import { GET_CURRENCY_CODE, GET_COUNTRY_LIST } from './actionTypes';

export type GetCurrencyCodeRequestPayload = Action<typeof GET_CURRENCY_CODE>;

export type GetCountryListRequestPayload = Action<typeof GET_COUNTRY_LIST>;