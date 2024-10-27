const db = require('../database');
const parkingCtrl = {};

parkingCtrl.getVehicles = (req, res) => {
    try {
        const query = 'SELECT * FROM vehiculos';
        db.query(query, (err, result) => {
            if (err) {
                console.error('No se pudo obtener la informacion de los vehiculos', err);
                return;
            }
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

parkingCtrl.addVehicle = (req, res) => {
    try {
        const { propietario, vehiculo, tipo, placa } = req.body;
        const query = 'INSERT INTO vehiculos (propietario, vehiculo, tipo, placa) VALUES (?, ?, ?, ?)';

        db.query(query, [propietario, vehiculo, tipo, placa], (err, result) => {
            if (err) {
                console.error('Error al ingresar el vehiculo');
                return;
            }

            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

parkingCtrl.exitVehicle = (req, res) => {
    try {
        const id = req.params.id;
        const query = `DELETE FROM vehiculos WHERE id = ?`;
        db.query(query, id, (err, result) => {
            if (err) {
                console.error('Error al registrar la salida del vehiculo');
                return;
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }

            res.status(200).json({message: 'Vehiculo eliminado correctamente'});
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};


module.exports = parkingCtrl;