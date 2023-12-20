import {Schema,model} from 'mongoose'

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
},{timestamps:true})

const User=model('productsdata',UserSchema)
export default User