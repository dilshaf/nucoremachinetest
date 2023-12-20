import {Schema,model} from 'mongoose'

const cartSchema=new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    }
},{timestamps:true})

const Cart=model('cartsproducts',cartSchema)
export default Cart