const express =require("express");
const router=express.Router();
const appointementController = require("../controllers/appointmentController");

router.post('/createAppointment', appointementController.createAppointment);
router.get('/appointments',appointementController.getAppointmentByDoctorId);
router.get('/patientAppointments' , appointementController.getAppointmentByPatientId);
router.get('/appointments/:doctorID/status', appointementController.getAppointmentsWithStatusDoctorID);
router.get('/appointments/:doctorID/type',appointementController.getAppointmentsWithTypeAndDoctorID);

module.exports = router;