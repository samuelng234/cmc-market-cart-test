import { Button, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Product } from "../models/product";
import { addItemToCart } from "../redux/reducers/cartReducer";
import { UseNumberAsCurrency } from "../Utilities/CurrencyUtility";

export type ProductItemProps = {
    item: Product
}

const useStyles = makeStyles(() => ({
    itemRow: {
        "& div": {
            display: "inline-block",
            width: "100px"
        }
    }
}));

const ProductItem = (props: ProductItemProps) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const addToCart = (product: Product) => {
        dispatch(addItemToCart(product));
    }

    return (
        <div className={classes.itemRow}>
            <div>{props.item.id}</div>
            <div>{props.item.name}</div>
            <div>{UseNumberAsCurrency(props.item.price)}</div>
            <Button onClick={() => { dispatch(addItemToCart(props.item)); }}>Add to cart</Button>
        </div>
    );
}

export default ProductItem;