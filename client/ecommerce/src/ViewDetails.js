import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const ViewDetails = () => {
    const[data,setData]=useState([])


    const getData=async()=>{
        try {
            let response=await axios.get('http://localhost:4000/api/get')
            setData(response.data)
        } catch (error) {
            console.log(error.message);
            
        }
    }



    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        {
            data.map((items,index)=>{
                return(
                    <div key={index}>
                        <Card data={items}/>
                        </div>
                )
            })
        }
    </div>
  )
}

export default ViewDetails