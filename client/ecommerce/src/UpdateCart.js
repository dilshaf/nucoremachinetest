import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateCart = () => {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState("")

    const {id}=useParams()

    const updateData=async()=>{
        try {
            let response=await axios.put(`http://localhost:4000/api/cart/${id}`,{
                name:name,
                price:price,
                description:description
            })
            console.log(response);
        } catch (error) {
            console.log(error.message);
            
        }

    }


    const getUpdateData=async(id)=>{
        try {
            let res=await axios.get(`http://localhost:4000/api/cart/get/${id}`)
            console.log(res,'kjh');
            
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(()=>{
        getUpdateData(id)
    },[])
    
    const nameFunction=(e)=>{
        setName(e.target.value)
    }
    const priceFunction=(e)=>{
        setPrice(e.target.value)
    }
    const desFunction=(e)=>{
        setDescription(e.target.value)
    }
  return (
    <div>
        <form onSubmit={updateData}>
            <label>name</label>
            <input type='text' onChange={nameFunction}/>
            <label>Price</label>
            <input type='text' onChange={priceFunction}/>
            <label>Description</label>
            <input type='text' onChange={desFunction}/>
            <Link to='/cart'><button style={{backgroundColor:"blue",borderRadius:"3px",color:"white"}}>View details</button></Link>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default UpdateCart