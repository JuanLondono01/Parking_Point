import img from '../assets/imgs/logo.png';
import { Checkbox, Button } from './components/buttons/Buttons';
import { Cards } from './components/cards/Cards';
import { SearchBar } from './components/search/SearchBar';
import { Tarifas } from './components/tarifas/Tarifas';
import useGetVehicles from '../hooks/useGetVehicles.ts';
import './land.css';
import React from 'react';

export const Land = () => {
    const { Vehicles, Loading, Error } = useGetVehicles();

    const fechaActual = new Date();
    return (
        <>
            <header>
                <img src={img} alt='Company logo' className='logo' />
            </header>

            <div className='toolBar'>
                <div className='checks'>
                    <Checkbox text='Vehiculo Pesado' id='pesado' />
                    <Checkbox text='Motocicleta' id='moto' />
                    <Checkbox text='Autos' id='auto' />
                </div>
                <div className='searchBar'>
                    <SearchBar />
                </div>
                <div className='buttons'>
                    <Button text='Añadir vehiculo' />
                    <Button text='Espacios Disponibles' />
                </div>
            </div>

            <div className='cards'>
                <div className='heads'>
                    <span>Fecha</span>
                    <span>Nombre</span>
                    <span>Vehiculo</span>
                    <span>Placa</span>
                    <span>Tipo de vehiculo</span>
                </div>
                <div className='parkCard'>
                    <hr />
                    {Loading && <p>Cargando vehículos...</p>}
                    {Error && <p>Error: {Error}</p>}
                    {!Loading && !Error && (Vehicles.length > 0 ? (
                        Vehicles.map((vehicle) => (
                            <React.Fragment key={vehicle.placa}>
                                <hr />
                                <Cards
                                    fechaIngreso={vehicle.fechaIngreso || fechaActual}
                                    Nombre={vehicle.propietario}
                                    tipoVehiculo={vehicle.tipo}
                                    vehiculo={vehicle.vehiculo}
                                    placa={vehicle.placa}
                                />
                            </React.Fragment>
                        ))
                    ) : (
                        <p>Aún no hay vehículos registrados en el parking</p>
                    ))}
                </div>
            </div>
            <div className='tarifas'>
                <Tarifas dia={30000} mes={200000} hora={5500} title='Tarifas Autos' />
                <Tarifas dia={30000} mes={200000} hora={5500} title='Tarifas Motos' />
                <Tarifas dia={30000} mes={200000} hora={5500} title='Tarifas Vehiculos Pesados' />
            </div>
        </>
    );
};
