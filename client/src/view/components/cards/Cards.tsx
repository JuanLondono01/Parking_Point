import React from 'react';
import './card.css';

interface TarjetaPark {
    fechaIngreso: Date;
    Nombre: string;
    vehiculo: string;
    placa: string;
    tipoVehiculo: string;
    onClick: () => void
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
                <button onClick={onClick}>Registrar salida</button>
            </div>
        </>
    );
};
