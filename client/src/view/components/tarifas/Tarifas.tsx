import React from 'react';
import './tarifas.css';

interface Tarifa {
    title: string;
    dia: number;
    mes: number;
    hora: number;
}

export const Tarifas: React.FC<Tarifa> = ({ title, dia, mes, hora }) => {
    return (
        <>
            <div className='cardTarifa'>
                <h3>{title}</h3>
                <div className='prices'>
                    <hgroup>
                        <p>Dia</p>
                        <p>${dia.toLocaleString()}</p>
                        <p>Mes</p>
                        <p>${mes.toLocaleString()}</p>
                        <p>Hora</p>
                        <p>${hora.toLocaleString()}</p>
                    </hgroup>
                </div>
            </div>
        </>
    );
};
