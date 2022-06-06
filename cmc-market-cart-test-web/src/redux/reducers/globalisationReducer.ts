import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../models/country";

export type GlobalisationState = {
    defaultCountry?: Country,
    selectedCountry?: Country,
    countries: Country[],
}

export const initialState: GlobalisationState = {
    defaultCountry: undefined,
    selectedCountry: undefined,
    countries: []
}

const globalisationSlice = createSlice({
    name: "globalisation",
    initialState,
    reducers: {
        setDefaultCountry(state, action: PayloadAction<Country>) {
            state.defaultCountry = action.payload;
        },
        setSelectedCountry(state, action: PayloadAction<Country>) {
            state.selectedCountry = action.payload;
        },
        setCountryList(state, action: PayloadAction<Country[]>) {
            state.countries = action.payload;
        }
    }
});

export const {
    setDefaultCountry,
    setSelectedCountry,
    setCountryList
} = globalisationSlice.actions;

export default globalisationSlice.reducer;