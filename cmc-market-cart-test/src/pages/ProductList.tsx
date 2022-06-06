import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItemsList from "../components/ProductItemsList";
import { GetProductsListRequestPayload } from "../redux/actions/productActions";
import { GET_PRODUCTS_LIST } from "../redux/actions/actionTypes";
import { RootState } from "../redux/rootReducer";

const ProductList = () => {
    const dispatch = useDispatch();
    const { productList } = useSelector((state: RootState) => state.products)
    const { selectedCountry } = useSelector((state: RootState) => state.globalisation)

    useEffect(() => {
        dispatch<GetProductsListRequestPayload>({
            type: GET_PRODUCTS_LIST
        });
    }, []);

    return (
        <div>
            <div><Link to="/checkout">Go To Checkout</Link></div>
            <h2>ProductList</h2>
            {(selectedCountry &&
                <ProductItemsList items={productList} />)}
        </div>
    );
}

export default ProductList;