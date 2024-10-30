import { exitVehicle } from '../api/vehicle.api';

export const useDeleteVehicles = () => {
    const deleteVehicle = async (id:string) => {
        try {
            await exitVehicle(id);
        } catch (error) {
            console.error('Error al eliminar el vehículo', error);
        }
    };
    return {
        deleteVehicle,
    };
};
