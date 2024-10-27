const {Router} = require("express")
const {getVehicles, addVehicle, exitVehicle} = require('../controllers/parking.controller.js')
const router = Router()

router.route("/")
    .get(getVehicles)
    .post(addVehicle)

router.route("/:id")
    .delete(exitVehicle)

module.exports = router