import express from 'express'
import cors from 'cors'
import Postrouter from './Routes/postRouter.js'
import mongoose from 'mongoose'

const port=4000
const app=express()
app.use(express.json())
app.use(cors())


app.use('/api',Postrouter)


const connect=async()=>{
    try {
        let response=await mongoose.connect('mongodb://127.0.0.1:27017/commerce')
        console.log('database connected');

    } catch (error) {
        console.log(error.message);
        
    }
}

app.listen(port,()=>{
    connect()
    console.log(`port is connected ${port}`);
})

