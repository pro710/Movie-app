import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink className="nav-link" to="/"><img className="navbar-brand" src="https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg" height="50px" width="50px"></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='container-fluid mb-0 h1'> MovieApp</div>
  
      <form className="d-flex" role="search">
        <input className="form-control me-md-3" width="100" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-dark me-md-3" type="submit" >Search</button>
        <button className="btn btn-dark me-md-3" >
        <NavLink className="nav-link" to="/login">User Login</NavLink>
        </button>
        <button className="btn btn-dark me-md-3" >
        <NavLink className="nav-link" to="/admin">Admin Login</NavLink>
        </button>
      
      </form>
    </div>
  
</nav>
    </div>
    )
}

export default Navbar
