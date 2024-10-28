import img from '../assets/imgs/logo.png';
import { Checkbox, Button } from './components/buttons/Buttons';
import { Cards } from './components/cards/Cards';
import { SearchBar } from './components/search/SearchBar';
import { Tarifas } from './components/tarifas/Tarifas';
import './land.css';

export const Land = () => {
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
                    <Cards
                        fechaIngreso={fechaActual}
                        Nombre='Juan Londoño'
                        placa='EQW387'
                        tipoVehiculo='Auto'
                        vehiculo='Mazda3'
                    />
                    <hr />
                    <Cards
                        fechaIngreso={fechaActual}
                        Nombre='Juan Londoño'
                        placa='EQW387'
                        tipoVehiculo='Auto'
                        vehiculo='Mazda3'
                    />
                    <hr />
                    <Cards
                        fechaIngreso={fechaActual}
                        Nombre='Juan Londoño'
                        placa='EQW387'
                        tipoVehiculo='Auto'
                        vehiculo='Mazda3'
                    />
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
