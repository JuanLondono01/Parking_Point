import React from 'react';
import './card.css';

interface TarjetaPark {
    fechaIngreso: Date;
    Nombre: string;
    vehiculo: string;
    placa: string;
    tipoVehiculo: string;
}

export const Cards: React.FC<TarjetaPark> = ({ fechaIngreso, Nombre, vehiculo, placa, tipoVehiculo }) => {
    return (
        <>
            <div className='card'>
                <p>{fechaIngreso.toLocaleDateString()}</p>
                <p>{Nombre}</p>
                <p>{vehiculo}</p>
                <p>{placa}</p>
                <p>{tipoVehiculo}</p>
                <button>Registrar salida</button>
            </div>
        </>
    );
};
