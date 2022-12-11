import React from 'react'
import { NavLink } from 'react-router-dom'

const Userlogin = () => {
  return (
    <div class="container ">
        <h2>Log In</h2>
        <form>
  <div class="row g-3 align-items-center">
    <div class="col-auto">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  </div>
  <div class="row g-3 align-items-center">
    <div class="col-auto">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
  </div>
  
</form> 
<button type="submit" class="btn btn-primary me-md-3">Log In</button>
<h4>Dont have an account? Plz<NavLink class="nav-link" to="/signup">
    <h4>Sign Up</h4>
    </NavLink></h4>
</div>
  )
}

export default Userlogin
