import { Product } from "../models/product";
import ProductItem from "./ProductItem";

export type ProductItemProps = {
    items: Product[]
}

const ProductItems = (props: ProductItemProps) => {
    return (
        <>
            {props.items.length > 0 && (<div>
                {props.items.map((product, index) => (
                    <ProductItem item={product} />
                ))}
            </div>)}
        </>
    );
}

export default ProductItems;