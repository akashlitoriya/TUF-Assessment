import {apiConnector} from './apiConnector';
import { apis } from './apis';
import {toast} from 'react-toastify';

export const getBanner = async()=>{
    try{
        const response = await apiConnector('GET', apis.getBanner);
        console.log("GET BANNER RESPONSE : ", response);
        return response.data;
    }catch(err){
        console.log("GET BANNER ERROR : ", err);
        return err;
    }
}

export const updateBanner = async(data) =>{
    const toastId = toast.loading('Updating Banner...');

    try{
        const response = await apiConnector('PUT', apis.updateBanner, data);
        console.log("UPDATE BANNER RESPONSE : ", response);
        toast.dismiss(toastId);
        toast.success('Banner Updated Successfully', {id: toastId});
        
        return response.data;
    }catch(err){
        console.log("UPDATE BANNER ERROR : ", err);
        toast.dismiss(toastId);
        toast.error('Banner Update Failed', {id: toastId});
        return err;
    }
}