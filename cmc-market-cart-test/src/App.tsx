
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/checkout" element={<Checkout />}/>
    </Routes>
  );

}

export default App;