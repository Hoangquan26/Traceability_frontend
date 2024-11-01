'use strict'

import ProductCart from "./ProductCard"

export default function ProductContainer({title, product_type, products}) {
    return (
        <div className=" flex flex-col gap-4 p-20 lg:pl-deskTop lg:pr-deskTop">
            <p className=" text-primary font-medium">{product_type}</p>
            <h1 className=" text-primary text-4xl font-medium">{title}</h1>
            <div className=" grid grid-cols-3 auto-rows-fr gap-6 mt-10 gap-y-12">
                {products.map((product, index) => {
                    return <ProductCart key={index} product={product}></ProductCart>
                })}
            </div>
        </div>
    )
}