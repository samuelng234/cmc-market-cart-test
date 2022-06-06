
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import ProductList from './pages/ProductList';
import { GET_COUNTRY_LIST, GET_CURRENCY_CODE } from './redux/actions/actionTypes';
import { GetCountryListRequestPayload, GetCurrencyCodeRequestPayload } from './redux/actions/globalisationActions';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetCurrencyCodeRequestPayload>({
            type: GET_CURRENCY_CODE
        });

        dispatch<GetCountryListRequestPayload>({
            type: GET_COUNTRY_LIST
        });
    }, []);

    return (
    <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/checkout" element={<Checkout />}/>
    </Routes>
    );

}

export default App;