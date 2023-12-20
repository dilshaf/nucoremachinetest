import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Display from './Display'

const CartView = () => {
    const [details,setDetails]=useState([])


    const getDetails=async()=>{
        try {
            let response=await axios.get('http://localhost:4000/api/cart/get')
            setDetails(response.data)
            
        } catch (error) {
            console.log(error.message);
            
        }
    }



    useEffect(()=>{
        getDetails()
    },[])
  return (
    <div>
        {
            details.map((items,index)=>{
                return(
                    <div key={index}>
                        <Display data={items}/>
                        </div>
                )
            })
        }
    </div>
  )
}

export default CartView