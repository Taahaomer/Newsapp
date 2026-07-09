import React from 'react'
import loadinggif from "./loadinggif.gif"

export default function Loader () {
  
    return (
        <div className='text-center'>
            <img style={{width:'25px' , height:'25px' }} src={loadinggif} alt="loading" />
        </div>
      
    )
  
}
