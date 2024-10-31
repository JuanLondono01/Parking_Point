import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { FormControl, FormLabel, Input, Select, Option } from '@mui/joy';
import { useAddVehicles } from '../../../hooks/useAddVehicles';

export default function SelectBasic({ onSelect }: { onSelect: (value: string) => void }) {
    const handleChange = (event: React.SyntheticEvent | null, newValue: string | null) => {
        if (newValue) {
            console.log(`Selected: ${newValue}`);
            onSelect(newValue);
        }
    };

    return (
        <Select defaultValue='' onChange={(event, newValue) => handleChange(event, newValue)}>
            <Option value=''>Selecciona un tipo de vehículo</Option>
            <Option value='Motocicleta'>Motocicleta</Option>
            <Option value='Auto'>Auto</Option>
            <Option value='Vehiculo Pesado'>Vehiculo Pesado</Option>
        </Select>
    );
}

interface ModalProps {
    text?: string;
    title?: string;
    onVehicleAdded: () => void
}

export const AddModal: React.FC<ModalProps> = ({ text, title, onVehicleAdded }) => {
    const { addVehicle } = useAddVehicles();
    const [open, setOpen] = React.useState<boolean>(false);
    const [propietario, setPropietario] = React.useState<string>('');
    const [vehiculo, setVehiculo] = React.useState<string>('');
    const [placa, setPlaca] = React.useState<string>('');
    const [tipo, setTipo] = React.useState<string>('');

    const handleConfirm = () => {
        const vehicleData = { propietario, vehiculo, placa, tipo };
        addVehicle(vehicleData);
        onVehicleAdded()
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant='solid' color='neutral' onClick={() => setOpen(true)}>
                {text}
            </Button>
            <Modal
                aria-labelledby='modal-title'
                aria-describedby='modal-desc'
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Sheet variant='outlined' sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}>
                    <ModalClose variant='plain' sx={{ m: 1 }} />
                    <Typography
                        component='div'
                        id='modal-title'
                        level='h4'
                        textColor='inherit'
                        sx={{ fontWeight: 'lg', mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography id='modal-desc' textColor='text.tertiary' component='div'>
                        <FormControl orientation='vertical' size='lg'>
                            <FormLabel>Propietario</FormLabel>
                            <Input
                                color='neutral'
                                variant='outlined'
                                sx={{ pt: 1 }}
                                value={propietario.toUpperCase()}
                                onChange={(e) => setPropietario(e.target.value)}
                            />
                        </FormControl>
                        <FormControl orientation='vertical' size='lg'>
                            <FormLabel>Vehiculo</FormLabel>
                            <Input
                                color='neutral'
                                variant='outlined'
                                sx={{ pt: 1 }}
                                value={vehiculo.toUpperCase()}
                                onChange={(e) => setVehiculo(e.target.value)}
                            />
                        </FormControl>
                        <FormControl orientation='vertical' size='lg'>
                            <FormLabel>Placa</FormLabel>
                            <Input
                                color='neutral'
                                variant='outlined'
                                sx={{ pt: 1 }}
                                value={placa.toUpperCase()}
                                onChange={(e) => setPlaca(e.target.value)}
                            />
                        </FormControl>
                        <FormControl orientation='vertical' size='lg'>
                            <FormLabel>Tipo de vehiculo</FormLabel>
                            <SelectBasic onSelect={(value) => setTipo(value)} />
                        </FormControl>
                        <Button variant='solid' color='primary' sx={{ mr: 2, mt: 2 }} onClick={() => handleConfirm()}>
                            Confirmar
                        </Button>
                        <Button variant='outlined' color='danger' onClick={() => setOpen(false)}>
                            Cancelar
                        </Button>
                    </Typography>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
};
