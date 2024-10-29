import {apiClient} from './axios.config.ts';

export const getVehicles = async ()=>{
    const response = await apiClient.get('/');
    return response.data
}

interface postData{
    propietario: string,
    vehiculo: string,
    tipo: string,
    placa: string
}

export const parkVehicle = async (data: postData)=>{
    const response = await apiClient.post('/', data);
    return response.data
}

export const exitVehicle = async (id: string) =>{
    const response = await apiClient.delete(`/${id}`)
    return response.data
}