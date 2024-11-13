import BusinessService from "../services/business.service";
import useAxiosPrivate from "./useAxiosPrivate";

export default function useBusinessService() {
    const axiosPrivate = useAxiosPrivate();

    const createBusiness = async ({ business_name, business_description }) => {
        return await BusinessService.createBusiness({ business_name, business_description }, axiosPrivate);
    };

    const getAllJoinedBusiness = async({page}) => {
        return await BusinessService.getJoinedBusiness({page}, axiosPrivate);
    };

    const switchBusinesProfile = async({businessId}) => {
        return await BusinessService.switchBusinessProfile({businessId},axiosPrivate);
    }

    const refresh = async() => {
        return await BusinessService.refresh(axiosPrivate)
    }
    return {
        createBusiness,
        getAllJoinedBusiness,
        switchBusinesProfile,
        refresh
    };
}
