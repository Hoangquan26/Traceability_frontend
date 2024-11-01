'use strict'

export default function ProductCart({product}) {
    const {product_thumb, product_name, product_type, product_rate, product_id} = product
    return (
        <div className=" flex flex-col gap-4">
            <div className=" overflow-hidden w-full aspect-square">
                <a href="" className=" w-full">
                    <img src={product_thumb} className=" object-cover w-full object-center shadow-lg"></img>
                </a>
            </div>
            <div className=" flex flex-col">
                <p className=" text-grayColor text-sm mb-2">{product_type}</p>
                <a href=""><h1 className=" text-primary text-lg">{product_name}</h1></a>
                <p>{product_rate}</p>
            </div>
        </div>
    )
}