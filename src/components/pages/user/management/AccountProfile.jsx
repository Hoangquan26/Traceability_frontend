import Button from "../../../uxui/button/button.style.3";
import BusinessRole from '../../../../ultis/user/business.roles'
import useBusinessService from "../../../../hooks/useBusinessService";
import { SHOW_TOAST_PROMISE } from "../../../../ultis/toast.notify";
import { useDispatch, useSelector } from "react-redux";
import { authBusinessSelector, setBusiness, setStatusFailed, setStatusLoading, setStatusSuccess } from "../../../../store/features/auth/business.slide";
import useCookie, { COOKIE_CONFIG } from '../../../../hooks/useCookie'
export default function AccountProfile ({role, business_name, businessId}) {
    const [userModeCookie, setUserModeCookie] = useCookie(COOKIE_CONFIG.USER_MODE)
    const currentBusiness = useSelector(authBusinessSelector)
    const dispatch = useDispatch()
    const {switchBusinesProfile} = useBusinessService()
    const handleSwitchProfile = async({businessId}) => {
        try {
            dispatch(setStatusLoading())
            const response = await SHOW_TOAST_PROMISE(switchBusinesProfile({businessId}))
            console.log(response)
            if(response?.status == 'success') {
                dispatch(setBusiness({
                    ...response?.metadata?.foundBusiness
                }))
                dispatch(setStatusSuccess())
            }
        }
        catch(err) {
            dispatch(setStatusFailed())
        }
    }
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
                <div className=" font-medium text-primary">
                {
                    currentBusiness._id == businessId ? 'Đang sử dụng tài khoản này' :  <Button active={true} action={() => {handleSwitchProfile({businessId})}} placeHolder={'Chuyển sang tài khoản doanh nghiệp'}></Button>
                }
                </div>
            </div>
        </>
    )
}