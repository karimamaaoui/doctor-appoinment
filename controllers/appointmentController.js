const Appointment = require("../models/Appointment");
const moment = require('moment-timezone');

const createAppointment = async (req , res) =>{
    try{
        const { dateTime, hourAppointment ,duration, status, type, doctor, patient } = req.body;

     // Combinez la date et l'heure en un seul objet Date
     const dateAppointment = moment.tz(`${dateTime} ${hourAppointment}`, 'YYYY-MM-DD HH:mm').toDate(); 

     const existingAppointment = await findAppointmentByDateTime(doctor,dateAppointment);

     if (existingAppointment) {
        return res.status(400).json({ error: 'Appointment already exists at this date and time' });
      }

        const newAppointment = new Appointment ({
            dateAppointment,
            duration,
            status,
            type,
            doctor,
            patient,
        })

        const savedAppointment = await newAppointment.save();
        res.status(200).json(savedAppointment);
    }catch (error){
        res.status(400).json({error:error.message});
    }
}

// Fonction pour trouver un rendez-vous à une date et une heure spécifiques
const findAppointmentByDateTime = async (doctorId,dateAppointment) => {
    try {
      const appointment = await Appointment.findOne({ 
        doctor: doctorId,
        dateAppointment });
      return appointment;
    } catch (error) {
      console.error("Erreur lors de la recherche du rendez-vous :", error);
      throw new Error('Error finding appointment');
    }
  };



module.exports ={
    createAppointment
}