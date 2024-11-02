const {Router} = require("express")
const {getVehicles, addVehicle, exitVehicle, getAutosPlazas, getMotosPlazas, getPesadosPlazas} = require('../controllers/parking.controller.js')
const router = Router()

router.route("/")
    .get(getVehicles)
    
router.route("/:id")
    .delete(exitVehicle)
    
router.route('/parking')
    .post(addVehicle)
    .get(getAutosPlazas)
    .get(getMotosPlazas)
    .get(getPesadosPlazas)

module.exports = router;