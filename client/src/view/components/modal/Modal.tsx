import { Input } from '@mui/joy';
import './css/add.css';
import { useAddVehicles } from '../../../hooks/useAddVehicles';
import React, { useState } from 'react';

interface ModalProps {
    onVehicleAdded: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onVehicleAdded }) => {
    const { addVehicle } = useAddVehicles();
    const [propietario, setPropietario] = useState<string>('');
    const [vehiculo, setVehiculo] = useState<string>('');
    const [placa, setPlaca] = useState<string>('');
    const [tipo, setTipo] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false); // Nuevo estado para controlar la visibilidad del modal

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        switch (id) {
            case 'propietario':
                setPropietario(value.toUpperCase());
                break;
            case 'vehiculo':
                setVehiculo(value.toUpperCase());
                break;
            case 'placa':
                setPlaca(value.toUpperCase());
                break;
            case 'tipo':
                setTipo(value.toUpperCase());
                break;
            default:
                break;
        }
    };

    const handleAddVehicle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const vehicleData = { propietario, vehiculo, placa, tipo };
        addVehicle(vehicleData);

        // Limpiar los campos
        setPropietario('');
        setVehiculo('');
        setPlaca('');
        setTipo('');

        // Cerrar el modal
        setIsOpen(false);
        onVehicleAdded();
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} popovertargetaction='show' popovertarget='pop'>
                Agregar Vehiculo
            </button>
            {isOpen && ( // Renderizar el modal solo si isOpen es true
                <div className='modal' popover='manual' id='pop'>
                    <h2>Agregar Vehiculo</h2>
                    <form className='form' method='POST' onSubmit={handleAddVehicle}>
                        <label htmlFor='propietario'>Propietario</label>
                        <Input type='text' id='propietario' value={propietario} onChange={handleChange} />
                        <br />

                        <label htmlFor='vehiculo'>Vehiculo</label>
                        <Input type='text' id='vehiculo' value={vehiculo} onChange={handleChange} />
                        <br />

                        <label htmlFor='placa'>Placa</label>
                        <Input type='text' id='placa' value={placa} onChange={handleChange} />
                        <br />

                        <label htmlFor='tipo'>Tipo de vehiculo</label>
                        <select className='sel' id='tipo' value={tipo} onChange={handleChange}>
                            <option value=''>--Selecciona--</option>
                            <option value='Motocicleta'>Motocicleta</option>
                            <option value='Auto'>Automovil</option>
                            <option value='Pesado'>Vehiculo Pesado</option>
                        </select>
                        <br />
                        <div className='options'>
                            <button type='submit'>Agregar Vehiculo</button>
                            <button type='button' onClick={() => setIsOpen(false)}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};
