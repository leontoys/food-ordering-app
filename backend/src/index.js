import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>console.log("MongoDB Connected"))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`App is listening at http://localhost:${PORT}/`)
})



