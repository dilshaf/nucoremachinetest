import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import { successToast } from './Toast'


const App = () => {
  const[name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[description,setDescription]=useState('')




  const postData=async(e)=>{
    e.preventDefault();
    
    try {
      let response=await axios.post('http://localhost:4000/api/post',{
        name:name,
        price:price,
        description:description
      })
      console.log(response);
      successToast('sucessfully added')
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

  


  const nameFunction=(e)=>{
    setName(e.target.value)
  }
  const priceFunction=(e)=>{
    setPrice(e.target.value)
  }
  const descFunction=(e)=>{
    setDescription(e.target.value)
  }
  return (
    <div>
      <Navbar/>
      <h1 style={{fontStyle:"italic",color:"red"}}>Enter you products</h1>
      <form onSubmit={postData}>
        <label>ProductName:</label>
        <input type='text' onChange={nameFunction}/>
        <label>Price:</label>
        <input type='text' onChange={priceFunction}/>
        <label>Description:</label>
        <input type='text' onChange={descFunction}/>
        
        <button style={{backgroundColor:"blue",borderRadius:"3px",color:"white"}}>Submit</button>
        <Link to='/view'><button style={{backgroundColor:"blue",borderRadius:"3px",color:"white"}}>View details</button></Link>
      </form>
    </div>
  )
}

export default App