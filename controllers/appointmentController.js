const Appointment = require("../models/Appointment");
const appointment = require("../models/Appointment")

const createAppointment = async (req , res) =>{
    try{
        const { dateAppointment, duration, status, type, doctor, patient } = req.body;

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


module.exports ={
    createAppointment
}