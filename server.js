const express =require('express')
const colors = require('colors')
const morgan =require('morgan')
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const cors=require("cors")
const corsOptions =require("./config/corsOptions");

//dotenv config
dotenv.config();



//mongodb connection
connectDb();

//rest object
const app= express()


//middlewares 
app.use(express.json())
app.use(morgan('dev'))

//security of the server 
app.use(cors(corsOptions));
app.use(cors());

//routes
app.use("/auth",require("./routes/authRoute"))
app.use('/users',require('./routes/userRoute'));


//port
const port= process.env.PORT || 5000
//listen port
app.listen(port,()=>{
    console.log(`server is running on port ${port} in Mode ${process.env.DEV_MODE} `.bgCyan.white)
})
