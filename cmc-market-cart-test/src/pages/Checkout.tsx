import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutItemsList from "../components/CheckoutItemsList";
import { RootState } from "../redux/rootReducer";

const Checkout = () => {
    const { cartItems } = useSelector((state: RootState) => state.shoppingCart)

    return (
        <div>
            <div><Link to="/">Go To Products</Link></div>
            <h2>Checkout</h2>
            <CheckoutItemsList items={cartItems} />
        </div>
    );
}

export default Checkout;