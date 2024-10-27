import img from '../assets/imgs/logo.png';
import { Checkbox, Button } from './components/Buttons';
import { SearchBar } from './components/SearchBar';
import './land.css';

export const Land = () => {
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
                <div className="buttons">
                    <Button text='Añadir vehiculo'/>
                    <Button text='Espacios Disponibles'/>
                </div>
            </div>

            
        </>
    );
};
