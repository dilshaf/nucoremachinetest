import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { successToast } from './Toast'

const Display = ({data}) => {
    const {name,price,description,_id}=data

   


    const deleteFunction=async()=>{
        try {
            let response=await axios.delete(`http://localhost:4000/api/cart/delete/${_id}`)
            console.log(response);
            successToast('deleted succesfully')
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
  return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
       <Link to={`/update/cart/${_id}`}> <button>Update</button></Link>
       <button onClick={deleteFunction}>delete</button>
    </div>
  )
}

export default Display