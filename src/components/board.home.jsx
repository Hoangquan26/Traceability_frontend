'use strict'

const Board = ({styleProps}) => {

    return (
        <div className=" p-20 flex bg-primary lg:pr-deskTop lg:pl-deskTop text-white items-center lg:gap-[300px]" >
            <div className=" flex flex-col gap-6">
                <h1 className=" text-4xl">Truy xuất nguồn gốc</h1>
                <p className=" font-light text-base text-justify">
                    Trang web của chúng tôi cung cấp giải pháp truy xuất nguồn gốc sản phẩm toàn diện, 
                    giúp các doanh nghiệp quản lý và theo dõi từng bước trong chuỗi cung ứng một cách dễ dàng 
                    và minh bạch. Với công nghệ blockchain, hệ thống cho phép bạn ghi nhận thông tin chi tiết từ 
                    nguyên liệu đầu vào đến thành phẩm cuối cùng, đảm bảo sự minh bạch về nguồn gốc cho khách 
                    hàng. Nhờ đó, doanh nghiệp có thể nâng cao uy tín, gia tăng niềm tin từ người 
                    tiêu dùng, đồng thời tuân thủ các tiêu chuẩn chất lượng và an toàn quốc tế.
                </p>
            </div>
            <div className=" shrink-0  w-[200px] flex items-center justify-center bg-secondary rounded-xl relative overflow-hidden">
                <img className=" object-contain" src="images/qrcode.png"></img>
                <div className=" animate-slideTop opacity-20 absolute bg-black w-full h-full top-full"></div>
            </div>
        </div>
    )
}

export default Board