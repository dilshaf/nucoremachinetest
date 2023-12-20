import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-light " style={{ backgroundColor:"green",position:"relative"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:"white"}}>Enter Your Products</a>
    <form className="d-flex">
      
      <Link to='/cart'><h1 style={{borderBottom:"GrayText",color:"white"}}>Your cart</h1></Link>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar