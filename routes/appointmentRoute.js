const express =require("express");
const router=express.Router();
const appointementController = require("../controllers/appointmentController");

router.post('/createAppointment', appointementController.createAppointment);

module.exports = router;