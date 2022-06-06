import { Product } from "../models/product";

export type ProductItemProps = {
    item: Product
}

const ProductItem = (props: ProductItemProps) => {
    return (
        <div>
            <div>{props.item.id}</div>
            <div>{props.item.name}</div>
            <div>{props.item.price}</div>
        </div>
    );
}

export default ProductItem;