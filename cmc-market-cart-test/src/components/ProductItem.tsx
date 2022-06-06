import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Product } from "../models/product";
import { addItemToCart } from "../redux/reducers/cartReducer";

export type ProductItemProps = {
    item: Product
}

const ProductItem = (props: ProductItemProps) => {
    const dispatch = useDispatch();

    const addToCart = (product: Product) => {
        dispatch(addItemToCart(product));
    }

    return (
        <div>
            <div>{props.item.id}</div>
            <div>{props.item.name}</div>
            <div>{props.item.price}</div>
            <Button onClick={() => { dispatch(addItemToCart(props.item)); }}>Add to cart</Button>
        </div>
    );
}

export default ProductItem;