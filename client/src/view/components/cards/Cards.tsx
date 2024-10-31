import React from 'react';
import './card.css';
import { Button } from '@mui/joy';
import { IoIosClose } from "react-icons/io";

interface TarjetaPark {
    fechaIngreso: Date;
    Nombre: string;
    vehiculo: string;
    placa: string;
    tipoVehiculo: string;
    onClick: () => void;
}

export const Cards: React.FC<TarjetaPark> = ({ fechaIngreso, Nombre, vehiculo, placa, tipoVehiculo, onClick }) => {
    return (
        <>
            <div className='card'>
                <p>{fechaIngreso.toLocaleDateString()}</p>
                <p>{Nombre}</p>
                <p>{vehiculo}</p>
                <p>{placa}</p>
                <p>{tipoVehiculo}</p>
                <Button color='neutral' startDecorator={<IoIosClose/>} onClick={onClick} >
                    Registrar salida
                </Button>
            </div>
        </>
    );
};
