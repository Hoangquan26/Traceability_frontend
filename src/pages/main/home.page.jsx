'use strict'

import Board from "../../components/board.home"
import CollapseTab from "../../components/collapseTab.home"
import TryBySelf from "../../components/pages/home/tryBySelf.home"
import ProductContainer from "../../components/ProductContainer"
import ProductRoadmap from "../../components/productRoadmap.home"

const products = [
    {
        _id: 1,
        product_name: 'Hoa quả nổi giận',
        product_thumb: '/images/farm_pic1.png',
        product_type: 'Nông sản',
        product_rate: '★★★★★'
    },
    {
        _id: 1,
        product_name: 'Hoa quả nổi giận',
        product_thumb: '/images/farm_pic1.png',
        product_type: 'Nông sản',
        product_rate: '★★★★★'
    },
    {
        _id: 1,
        product_name: 'Hoa quả nổi giận',
        product_thumb: '/images/farm_pic1.png',
        product_type: 'Nông sản',
        product_rate: '★★★★★'
    },
    {
        _id: 1,
        product_name: 'Hoa quả nổi giận',
        product_thumb: '/images/farm_pic1.png',
        product_type: 'Nông sản',
        product_rate: '★★★★★'
    }
]

export default function HomePage() {

    return <div className=" flex flex-col bg-white" >
        <Board/>
        <CollapseTab/>
        <ProductRoadmap/>
        <ProductContainer products={products} title={'Sản phẩm mới nhất'} product_type={'Nông sản'}/>
        <TryBySelf/>
        <div className=" h-[1000px]"></div>
    </div>
}
