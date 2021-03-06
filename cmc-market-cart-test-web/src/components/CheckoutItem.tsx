import { Button, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CartItem } from "../models/cartItem";
import { removeItemFromCart } from "../redux/reducers/cartReducer";

export type CheckoutItemProps = {
    item: CartItem
}

const useStyles = makeStyles(() => ({
    itemRow: {
        "& div": {
            display: "inline-block",
            width: "100px"
        }
    }
}));

const CheckoutItem = (props: CheckoutItemProps) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const calculateItemLineTotal = (price: number, quantity: number) => {
        return price * quantity;
    }

    return (
        <div className={classes.itemRow}>
            <div>{props.item.product.id}</div>
            <div>{props.item.product.name}</div>
            <div>{props.item.product.price}</div>
            <div>{props.item.quantity}</div>
            <div>{calculateItemLineTotal(props.item.product.price, props.item.quantity)}</div>
            <Button onClick={() => { dispatch(removeItemFromCart(props.item.product.id)); }}>Remove from cart</Button>
        </div>
    );
}

export default CheckoutItem;