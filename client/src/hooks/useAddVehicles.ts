import { parkVehicle } from '../api/vehicle.api';


interface VehicleData {
    propietario: string;
    vehiculo: string;
    placa: string;
    tipo: string;
}

export const useAddVehicles = () => {
    const addVehicle = async (data: VehicleData) => {
        try {
            await parkVehicle(data);
        } catch (error) {
            console.error('Error al guardar el vehículo', error);
        }
    };
    return {
        addVehicle,
    };
};
