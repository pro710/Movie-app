import React from 'react'
import { NavLink } from 'react-router-dom'

const Sign = () => {
  return (
    <div>
         <div class="container ">
        <h2>Sign Up</h2>
        <form>
        <div class="row g-3 align-items-center">
    <div class="col-auto">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName"/>
   </div>
  </div>

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
  <div class="row g-3 align-items-center">
    <div class="col-auto">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
  </div>
  
</form> 
<button type="submit" class="btn btn-primary mt-6">Sign Up</button>
<h4>If U Have already account? Plz<NavLink class="nav-link" to="/login" type="button">
    <h4>Log In</h4></NavLink></h4>
</div>
    </div>
  )
}

export default Sign
