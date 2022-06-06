import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

export const UseNumberAsCurrency = (value: number) => {
    const { selectedCountry } = useSelector((state: RootState) => state.globalisation)

    return new Intl.NumberFormat(`en-${selectedCountry?.code}`, { style: 'currency', currency: selectedCountry?.currencyCode }).format(value);
}

export const UseCalculateExchangeRate = (value: number) => {
    const { selectedCountry } = useSelector((state: RootState) => state.globalisation)

    return selectedCountry && value * selectedCountry?.exchangeRate;
}