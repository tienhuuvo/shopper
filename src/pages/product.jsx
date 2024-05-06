import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrum from "../component/breadcrums/Breadcrums";
import ProductDisplay from "../component/productDisplay/ProductDisplay";
import Description from "../component/descriptionBox/DescriptionBox";
import RelatedProduct from "../component/RelatedProduct/RelatedProduct";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <>
            {product && (
                <>
                    <Breadcrum product={product} />
                    <ProductDisplay product={product} />
                    <Description />
                    <RelatedProduct />
                </>
            )}
        </>
    );
};

export default Product;
