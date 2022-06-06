import { Product } from "../models/product";
import ProductItem from "./ProductItem";

export type ProductItemProps = {
    items: Product[]
}

const ProductItemsList = (props: ProductItemProps) => {
    return (
        <>
            {props.items.length > 0 && (<div>
                {props.items.map((product, index) => (
                    <ProductItem key={product.id} item={product} />
                ))}
            </div>)}
        </>
    );
}

export default ProductItemsList;