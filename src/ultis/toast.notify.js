'use strict'
import {toast} from 'react-toastify'
export const DEFAULT_TOAST_OPTIONS = {
    // toast position
    position: 'top-right',
    // auto close toast after 5second
    autoClose: 5000

}

export const SHOW_TOAST_PROMISE = async(fn) => {
    return await toast.promise(fn, {
        pending: {
            render(){
                return 'Đang tải...'
            }
        },
        success: {
            render({data}) {
                
                if(data?.status == 'error') throw new Error(data?.message)
                return `${data.message.toString() || 'Thành công'}`
            },
            icon: "🟢",
            type: 'success',
            isLoading: false
        },
        error: {
            render({data}) {
                return `${data.message|| 'Có lỗi xảy ra!'}`
            },
            type: 'error',
            isLoading: false
        }
    }, DEFAULT_TOAST_OPTIONS)
}

export const SHOW_LOADING_TOAST = (message = 'Đang tải...', options = DEFAULT_TOAST_OPTIONS) => {
    return toast.loading(message, options)
}


export const UPDATE_TOAST_BY_ID = ({toast_id, options}) => {
    toast.update(toast_id, options)
    return toast_id
}

export const REMOVE_TOAST_BY_ID = ({toast_id}) => {
    return toast.dismiss(toast_id)
}


export const SHOW_SUCCESS_TOAST = (message, options = DEFAULT_TOAST_OPTIONS) => {
    return toast.success(message, options)
}