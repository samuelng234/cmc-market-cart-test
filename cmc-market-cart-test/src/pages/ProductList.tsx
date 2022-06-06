import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItems from "../components/ProductItems";
import { GetProductsListRequestPayload } from "../redux/actions/actions";
import { GET_PRODUCTS_LIST } from "../redux/actions/actionTypes";
import { RootState } from "../redux/rootReducer";

const ProductList = () => {
    const dispatch = useDispatch();
    const { productList } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch<GetProductsListRequestPayload>({
            type: GET_PRODUCTS_LIST
        });
    }, []);

    return (
        <div>
            <h2>ProductList</h2>
            <ProductItems items={productList} />
        </div>
    );
}

export default ProductList;