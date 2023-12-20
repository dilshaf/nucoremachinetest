import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { successToast } from './Toast'

const Update = () => {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState("")

    const {id}=useParams()

    const updateData=async()=>{
        try {
            let response=await axios.put(`http://localhost:4000/api/put/${id}`,{
                name:name,
                price:price,
                description:description
            })
            console.log(response);
            successToast("updated succesfully")
        } catch (error) {
            console.log(error.message);
            
        }

    }


    const getUpdateData=async(id)=>{
        try {
            let res=await axios.get(`http://localhost:4000/api/get/${id}`)
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

            <button style={{backgroundColor:"blue",borderRadius:"3px",color:"white"}}>Submit</button>
            <Link to='/view'><button style={{backgroundColor:"blue",borderRadius:"3px",color:"white"}}>View details</button></Link>
        </form>
    </div>
  )
}

export default Update