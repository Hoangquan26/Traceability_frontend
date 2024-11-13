'use strict'

import { useEffect, useState } from "react"
import AccountProfile from "./AccountProfile"
import BusinessRoles from "../../../../ultis/user/business.roles"
import useBusinessService from "../../../../hooks/useBusinessService"
import { useSelector } from "react-redux"
import { authUserSelector } from "../../../../store/features/auth/auth.slice"
import ReactPaginate from 'react-paginate';
// const data = [
//     {
//         business_name: 'Winmart',
//         role: BusinessRoles.ADMIN
//     }
// ]

export default function BusinessSection() {
    const {_id} = useSelector(authUserSelector)
    const { getAllJoinedBusiness } = useBusinessService()
    const [businesses, setBusinesses] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState(1.1)
    const refreshUserdata = async() => {
        const response = await getAllJoinedBusiness({page: page + 1})
        if(response?.status == "success")
        {
            setBusinesses([...response?.metadata?.businesses])
            setTotalCount(Math.ceil(response?.metadata?.totalCount[0]?.count / 6) || 0)
        }
        setLoading(false)
    }

    const handlePageClick = (event) => {
        setPage(event.selected)
    }
    useEffect(() => {   
        refreshUserdata()
 
    }, [page])

    return (
        <div className=" flex flex-col w-full gap-8 ml-10">
            {
                loading ? 'Loading...' 
                :
                <div className=" flex p-4 flex-col grow gap-4">
                {
                    businesses.length ? 
                    businesses?.map((item, index) => {
                        return (<AccountProfile key={index} businessId={item._id} business_name={item.business_name} role={item.business_roles[_id]}/>)
                    })
                    :
                    <h1 className=" text-lg font-medium">Chưa có tài khoản doanh nghiệp nào!</h1>
                }
                </div>
            }
            {
                totalCount ?
                <ReactPaginate 
                activeClassName="pagi-active"
                nextLabel={'Trang sau'}
                previousLabel={'Trang trước'}
                breakLabel={'...'}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                containerClassName={"pagination"}
                onPageChange={handlePageClick}
                pageCount={totalCount}
            ></ReactPaginate>
                : ''
            }
        </div>
    )
}