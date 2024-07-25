const express =require("express");
const router=express.Router();
const appointementController = require("../controllers/appointmentController");

router.post('/createAppointment', appointementController.createAppointment);
router.get('/appointments',appointementController.getAppointmentByDoctorId);
router.get('/patientAppointments' , appointementController.getAppointmentByPatientId);
router.get('/appointments/:doctorID/status', appointementController.getAppointmentsWithStatusDoctorID);
router.get('/appointments/:doctorID/type',appointementController.getAppointmentsWithTypeAndDoctorID);
router.put('/changeAppointmentStatus/:appointmentID', appointementController.updateAppointmentStatus);
router.delete('/deleteAppointment/:appointmentID', appointementController.deleteAppointmentByID);
router.get('/appointmentDetails/:appointmentID', appointementController.getAppointmentDetails);
router.put('/postponeAppoinment/:appointmentID', appointementController.rescheduleAppointmentById);
router.put('/updateAppointment/:appointmentID' , appointementController.updateAppointmentTypeById);

module.exports = router;