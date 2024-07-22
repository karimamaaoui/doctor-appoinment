const mongoose=require("mongoose")
const status= require("./enums/AppointmentStatus")
const type= require("./enums/AppointmentType")
const Schema = mongoose.Schema;


const appoinmentSchema = mongoose.Schema ({

    dateAppoinment:{
        type: Date ,
        required : true,
    },
    duration :{
        type: Number,
        required : true ,
        default : 0.5
    },
    status:{
        type: String,
        enum : Object.values(status),
        required : true , 
        default : status.PLANIFIED
    },
    type :{
        type : String ,
        enum : Object.values(type),
        required : true , 
        default : type.ONLINE
    },
    doctor:{
        type: Schema.Types.ObjectId,
        ref : 'User',
        required : true 
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
})

module.exports  = mongoose.model("Appointment",appoinmentSchema)