import { getVehicles } from '../api/vehicle.api.ts';

import { useEffect, useState } from 'react'
interface Vehicle{
    fechaIngreso: Date
    propietario: string,
    vehiculo: string,
    tipo: string,
    placa: string,
    id: string
}

const useGetVehicles = (trigger: number) => {
    const [Vehicles, SetVehicles] = useState<Vehicle[]>([])
    const [Loading, setLoading] = useState<boolean>(true)
    const [Error, setError] = useState<string | null>(null)

    const fetchVehicles = async ()=>{
        try {
            const data = await getVehicles();
            SetVehicles(data)
        } catch (error) {
            console.error('Error al obtener los vehiculos', error);
            if (error instanceof ErrorEvent) {
                setError(error.message)
            }
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
            fetchVehicles();
    }, [trigger])
    

    return {Vehicles, Loading, Error}
}

export default useGetVehicles;