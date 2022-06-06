import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutItemsList from "../components/CheckoutItemsList";
import { CALCULATE_SHIPPING } from "../redux/actions/actionTypes";
import { CalculateShippingRequestPayload } from "../redux/actions/cartActions";
import { RootState } from "../redux/rootReducer";

const Checkout = () => {
    const dispatch = useDispatch();
    const { cartItems, totalShippingCost } = useSelector((state: RootState) => state.shoppingCart)
    const { selectedCountry } = useSelector((state: RootState) => state.globalisation)

    useEffect(() => {
        dispatch<CalculateShippingRequestPayload>({
            type: CALCULATE_SHIPPING,
            items: cartItems
        });
    }, [cartItems]);

    return (
        <div>
            <div><Link to="/">Go To Products</Link></div>
            <h2>Checkout</h2>
            {(selectedCountry &&
                <CheckoutItemsList items={cartItems} />)}
            <div>Shipping: {totalShippingCost}</div>
        </div>
    );
}

export default Checkout;