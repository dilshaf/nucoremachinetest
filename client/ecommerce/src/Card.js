import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { successToast } from './Toast'

const Items = ({data}) => {
    const {name,price,description,_id}=data


    const handleaddtocart=async(productId)=>{
        try {
           const _productId=productId
           const _data={_productId,name,price,description}
           let response=await axios.post('http://localhost:4000/api/cart',_data)
           console.log(response);
           successToast('cart add successfully')
        } catch (error) {
            console.log(error.message);
            
        }
    }



    
    const deleteFunction=async()=>{
        try {
            let response=await axios.delete(`http://localhost:4000/api/delete/${_id}`)
            console.log(response);
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
  return (
    <div>
        <p> ProductName:{name}</p>
        <p>Price:{price}</p>
        <p> Description:{description}</p>
       

        <Link to={`/update/${_id}`}> <button>Update</button></Link>
        <button onClick={deleteFunction}>Delete</button>
        <button onClick={()=>{
            handleaddtocart(_id)
        }}>Add to Cart</button>
        <hr/>
    </div>
  )
}

export default Items