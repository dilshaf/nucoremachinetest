import express from 'express'
import { PostCart, PostData, deleteCart, deleteData, getCart, getData, getSingleCart, getSingleData, updateCart, updateData } from '../controllers/postControllers.js'

 const Postrouter=express.Router()

Postrouter.post('/post',PostData)
Postrouter.get('/get',getData)
Postrouter.get("/get/:id",getSingleData)
Postrouter.put('/put/:id',updateData)
Postrouter.delete('/delete/:id',deleteData)


Postrouter.post('/cart',PostCart)
Postrouter.get('/cart/get',getCart)
Postrouter.get('/cart/get/:id',getSingleCart)
Postrouter.put('/cart/:id',updateCart)
Postrouter.delete('/cart/delete/:id',deleteCart)


export default Postrouter