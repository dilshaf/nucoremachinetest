import Cart from "../models/Cart.js"
import User from "../models/User.js"

export const PostData=async(req,res)=>{
    try {
        
            const {name,price,description}=req.body
            const saved=new User({name,price,description})
            try {
                const newuser=await saved.save()
                res.status(201).json(newuser)
            } catch (error) {
                res.status(401).json(error.message)
                
            }
    
    } catch (error) {
        console.log(error.message);
        
    }
}


export const getData=async(req,res)=>{
    try {
        const getuser=await User.find()
        res.status(201).json(getuser)
    } catch (error) {
        res.status(401).json(error.message)
        
    }
}

export const updateData=async(req,res)=>{
   
        const { id }=req.params
        const {name,price,description}=req.body
        try {
            let update=await User.findByIdAndUpdate(id,{ $set: {name,price,description}}, {new:true})
            res.status(201).json(update)
    
        } catch (error) {
            res.status(401).json(error.message)
            
        }
  
}


export const deleteData=async(req,res)=>{
    const { id }=req.params
    try {
        let deleteData=await User.findByIdAndDelete(id)
        res.status(201).json(deleteData)
    } catch (error) {
        res.status(401).json(error.message)
        
    }
}


export const getSingleData=async(req,res)=>{
    
        const { id }=req.params
        try {
            let getId=await User.findById(id)
            res.status(201).json(getId)
        } catch (error) {
            res.status(401).json(error.message)
            
        }
    
}


//Cart


    export const PostCart=async(req,res)=>{
        const{name,price,description}=req.body
    const cart=new Cart({name,price,description})
    try {
       const getCart=await cart.save()
       res.status(201).json(getCart) 
    } catch (error) {
        res.status(401).json(error.message)
        
    }
    }


    export const getCart=async(req,res)=>{
        try {
            let cartview=await Cart.find()
            res.status(201).json(cartview)
        } catch (error) {
            console.log(error.message);
            
        }
    }


    export const updateCart=async(req,res)=>{
        const { id }=req.params
    const {name,price,description}=req.body
    try {
        let update=await Cart.findByIdAndUpdate(id,{ $set: {name,price,description}}, {new:true})
        res.status(201).json(update)

    } catch (error) {
        res.status(401).json(error.message)
        
    }
    }


    export const deleteCart=async(req,res)=>{
        const { id }=req.params
    try {
        let deleteData=await Cart.findByIdAndDelete(id)
        res.status(201).json(deleteData)
    } catch (error) {
        res.status(401).json(error.message)
        
    }
    }


    export const getSingleCart=async(req,res)=>{
        const { id }=req.params
        try {
            let getId=await Cart.findById(id)
            res.status(201).json(getId)
        } catch (error) {
            res.status(401).json(error.message)
            
        }
    }