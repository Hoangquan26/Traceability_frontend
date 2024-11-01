'use strict'
import Header from './uxui/header'
import Description from './uxui/description'
import Button from './uxui/button/button.style.1'
const CollapseTab = () => {
    return (
        <div className=" flex p-20 lg:pr-deskTop lg:pl-deskTop flex-col gap-10">
            <div className=' pr-32'>
                <p className=" text-primary text-sm mb-4">Tính ứng dụng</p>
                <Header text='Truy xuất nguồn gốc có tính ứng dụng vô cùng quan trọng đối với nhiều ngành hàng,
                 đặc biệt là các ngành thực phẩm, dược phẩm, và nông sản'>
                </Header>
            </div>
            <div className=" flex gap-14">
                <div className=' flex-1'>
                    <img src="images/farm_pic1.png"></img>
                </div>
                <div className=' flex-1 gap-6 flex flex-col'>
                    <img src="images/pharmacy_pic1.png"></img>
                    <Header text='Truy xuất nguồn gốc đã trở thành công cụ không thể thiếu'></Header>
                    <Description text='Đối với ngành dược phẩm, 
                    việc truy xuất nguồn gốc giúp kiểm soát chặt chẽ nguồn gốc nguyên liệu, quá trình sản xuất và 
                    lưu thông, giảm thiểu rủi ro liên quan đến hàng giả, hàng nhái. Trong ngành nông sản, truy xuất 
                    nguồn gốc giúp nông dân và nhà phân phối quản lý sản phẩm tốt hơn, đồng thời tăng niềm tin của 
                    người tiêu dùng về chất lượng và xuất xứ, ...'/>
                    <Button placeHolder={'Xem thêm'}/>
                </div>
            </div>
        </div>
    )
}

export default CollapseTab