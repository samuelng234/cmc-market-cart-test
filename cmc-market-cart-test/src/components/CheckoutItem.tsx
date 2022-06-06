import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CartItem } from "../models/cartItem";
import { removeItemFromCart } from "../redux/reducers/cartReducer";

export type CheckoutItemProps = {
    item: CartItem
}

const CheckoutItem = (props: CheckoutItemProps) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div>{props.item.product.id}</div>
            <div>{props.item.product.name}</div>
            <div>{props.item.product.price}</div>
            <Button onClick={() => { dispatch(removeItemFromCart(props.item.product.id)); }}>Remove from cart</Button>
        </div>
    );
}

export default CheckoutItem;