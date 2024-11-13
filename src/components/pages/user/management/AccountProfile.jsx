import Button from "../../../uxui/button/button.style.3";
import BusinessRole from '../../../../ultis/user/business.roles'
export default function AccountProfile ({role, business_name}) {
    return  (
        <>
             <div className="flex items-center p-4 pl-8 pr-8 rounded-3xl border-[1px] border-primary bg-white shadow-sm justify-between">
                <div className=" flex items-center gap-6">
                    <div className=" flex items-center h-20 w-20">
                        <img className=" object-cover" src="images/userImage.png"></img>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <h1 className=" text-lg font-medium">{business_name}</h1>
                        <p>Vai trò: {role == BusinessRole.ADMIN ? 'Admin' : role == BusinessRole.MANAGER ? 'Quản lý' : 'Nhân viên'}</p>
                    </div>
                </div>
                <div>
                    <Button placeHolder={'Chuyển sang tài khoản doanh nghiệp'}></Button>
                </div>
            </div>
        </>
    )
}