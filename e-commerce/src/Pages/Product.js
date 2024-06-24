import React from "react";
import './CSS/Product.css'
import all_products from "../Components/Assets/all_product";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../Components/DescriptionBox/Descriptionbox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

export default function Product(){
    const {productId} = useParams()
    const product = all_products.find((e) => e.id===Number(productId))
    return (
        <div className="product">
            <Breadcrums product={product}></Breadcrums>
            <ProductDisplay product={product}></ProductDisplay>
            <Descriptionbox></Descriptionbox>
            <RelatedProducts></RelatedProducts>
        </div>
    )
}