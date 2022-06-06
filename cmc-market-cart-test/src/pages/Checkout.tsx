import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutItemsList from "../components/CheckoutItemsList";
import { RootState } from "../redux/rootReducer";

const Checkout = () => {
    const { cartItems } = useSelector((state: RootState) => state.shoppingCart)
    const { selectedCountry } = useSelector((state: RootState) => state.globalisation)

    useEffect(() => {
    }, [cartItems]);

    return (
        <div>
            <div><Link to="/">Go To Products</Link></div>
            <h2>Checkout</h2>
            {(selectedCountry &&
                <CheckoutItemsList items={cartItems} />)}
        </div>
    );
}

export default Checkout;