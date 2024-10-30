import img from '../assets/imgs/logo.png';
import { Checkbox, Button } from './components/buttons/Buttons';
import { Cards } from './components/cards/Cards';
import { SearchBar } from './components/search/SearchBar';
import { Tarifas } from './components/tarifas/Tarifas';
import useGetVehicles from '../hooks/useGetVehicles.ts';
import './land.css';
import React, { useState } from 'react';
import { useDeleteVehicles } from '../hooks/useDeleteVehicles.ts';

export const Land = () => {
    const { Vehicles, Loading, Error } = useGetVehicles();
    const { deleteVehicle } = useDeleteVehicles();
    const [Value, setValue] = useState<string>('');
    const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleCheckboxChange = (type: string) => {
        setSelectedTypes((prev) => {
            const newTypes = new Set(prev);
            if (newTypes.has(type)) {
                newTypes.delete(type);
            } else {
                newTypes.add(type);
            }
            return newTypes;
        });
    };

    const handleDelete = async (vehicleId: string) => {
        try {
            await deleteVehicle(vehicleId);
            alert('Vehículo eliminado correctamente');
        } catch (error) {
            console.error('Error al eliminar el vehículo', error);
        }
    };

    const filteredVehicles = Vehicles.filter((vehicle) => {
        const matchesSearch =
            vehicle.propietario.toUpperCase().includes(Value.toUpperCase()) ||
            vehicle.tipo.toUpperCase().includes(Value.toUpperCase()) ||
            vehicle.placa.toUpperCase().includes(Value.toUpperCase()) ||
            vehicle.vehiculo.toUpperCase().includes(Value.toUpperCase());

        const matchesType = selectedTypes.size === 0 || selectedTypes.has(vehicle.tipo);

        return matchesSearch && matchesType;
    });
    const fechaActual = new Date();
    return (
        <>
            <header>
                <img src={img} alt='Company logo' className='logo' />
            </header>

            <div className='toolBar'>
                <div className='checks'>
                    <Checkbox
                        text='Vehiculo Pesado'
                        id='pesado'
                        onChange={() => handleCheckboxChange('Vehiculo Pesado')}
                    />
                    <Checkbox text='Motocicleta' id='moto' onChange={() => handleCheckboxChange('Motocicleta')} />
                    <Checkbox text='Autos' id='auto' onChange={() => handleCheckboxChange('Auto')} />
                </div>
                <div className='searchBar'>
                    <SearchBar onSearch={onChange} value={Value.toUpperCase()} />
                </div>
                <div className='buttons'>
                    <Button text='Añadir vehiculo'/>
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
                    {!Loading &&
                        !Error &&
                        (filteredVehicles.length > 0 ? (
                            filteredVehicles.map((vehicle) => (
                                <React.Fragment key={vehicle.placa}>
                                    <hr />
                                    <Cards
                                        fechaIngreso={vehicle.fechaIngreso || fechaActual}
                                        Nombre={vehicle.propietario}
                                        tipoVehiculo={vehicle.tipo}
                                        vehiculo={vehicle.vehiculo}
                                        placa={vehicle.placa}
                                        onClick={() => handleDelete(vehicle.id)}
                                    />
                                </React.Fragment>
                            ))
                        ) : (
                            <p>No se encontraron vehículos</p>
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
