const { Router } = require('express');
const {
    getVehicles,
    addVehicle,
    exitVehicle,
    getAutosPlazas,
    getMotosPlazas,
    getPesadosPlazas,
} = require('../controllers/parking.controller.js');
const router = Router();

router.route('/').get(getVehicles);

router.route('/:id').delete(exitVehicle);

router.route('/parking').post(addVehicle);

router.route('/parking/autos').get(getAutosPlazas);
router.route('/parking/motos').get(getMotosPlazas);
router.route('/parking/pesados').get(getPesadosPlazas);

module.exports = router;
