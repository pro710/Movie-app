import React, { useEffect, useState } from 'react'
import {data} from '../data'
import './addmovies.css'

function Addmovies() {
    const [movies,setMovies]=useState([]);
    // useEffect(()=>{
    //     consol
        
    // })
    console.log(data)
  return (
    <div className='itemcard'>
        {
            data.map((movies)=>{
               return( 
                <div>
                <img src={movies.posterurl} className="rounded float-left"/>
                <h2>{movies.title}</h2>
                {/* <h3>{movies.genres}</h3> */}
                <h4>{movies.releaseDate}</h4>

                </div>
                
               )
            })
        }
    </div>
  )
}

export default Addmovies


