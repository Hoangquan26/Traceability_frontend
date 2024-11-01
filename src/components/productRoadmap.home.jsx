'use strict'

import { useState } from "react"
import Header from "./uxui/header"
import ProcessCard from "./uxui/process.card"

const ProductRoadmap = () => {
  

    return (
        <div className=" p-20 lg:pr-deskTop lg:pl-deskTop bg-secondary grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-14">

            <div className=' pr-32 col-span-1 row-span-1 col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col justify-center'>
                <p className=" text-primary text-sm mb-4">Trong thực tế</p>
                <h1 className=" text-4xl text-grayColor font-medium">Các giai đoạn đảm bảo chất lượng của sản phẩm trước khi đến tay người tiêu dùng</h1>
            </div>  

            <div className=" max-h-[300px] lg:max-h-[600px] col-span-1 bg-red-200 row-span-2">
                <ProcessCard process_name={'Thêm dữ liệu sản phẩm'} process_index={'Giai đoạn 1'} process_thumb={'images/typing_data.png'}/>
            </div>
            <div className=" max-h-[300px] lg:max-h-[600px] col-span-1 bg-red-200 row-span-2">
                <ProcessCard process_name={'Cho phép người dùng truy xuất sản phẩm'} process_index={'Giai đoạn 2'} process_thumb={'images/search_product_qrcode.png'}/>
            </div>
            <div className=" max-h-[300px] lg:max-h-[600px] col-span-1 bg-red-200 row-span-2">
                <ProcessCard process_name={'Cập nhật quá trình sản xuất công khai'} process_index={'Giai đoạn 3'} process_thumb={'images/plant_tree.png'}/>
            </div>
            <div className=" max-h-[300px] lg:max-h-[600px] col-span-1 bg-red-200 row-span-2">
                <ProcessCard process_name={'Phân phối sản phẩm đến tay người dùng'} process_index={'Giai đoạn 4'} process_thumb={'images/market.png'}/>
            </div>
        </div>
    )
}

export default ProductRoadmap