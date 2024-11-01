'use strict'

import Button from '../../uxui/button/button.style.1'

export default function TryBySelf(){
    return (
        <div className=" flex justify-center w-full bg-origin-content bg-no-repeat bg-center bg-cover bg-fixed" style={{backgroundImage: 'url(images/market.png)'}}>
            <div className=" bg-white m-10 shadow-lg p-16 flex flex-col items-center justify-center gap-8">
                <h1 className=" font-medium text-4xl text-primary">Bắt đầu với ứng dụng truy xuất nguồn gốc</h1>
                <div className=' flex gap-6 justify-center items-center'>
                    <Button placeHolder={'Quét mã QR'}></Button>
                    <Button placeHolder={'Tất cả sản phẩm'}></Button>
                </div>
            </div>
        </div>
    ) 
}