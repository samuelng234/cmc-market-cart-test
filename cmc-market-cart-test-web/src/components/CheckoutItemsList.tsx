import { CartItem } from "../models/cartItem";
import CheckoutItem from "./CheckoutItem";
import ProductItem from "./ProductItem";

export type CheckoutItemProps = {
    items: CartItem[]
}

const CheckoutItemsList = (props: CheckoutItemProps) => {
    return (
        <>
            {props.items.length > 0 && (<div>
                {props.items.map((cartItem, index) => (
                    <CheckoutItem key={cartItem.product.id} item={cartItem} />
                ))}
            </div>)}
        </>
    );
}

export default CheckoutItemsList;