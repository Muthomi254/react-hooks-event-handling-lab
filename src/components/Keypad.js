// Code Keypad Component Here

import React from 'react'

export default function Keypad() {
  
  return (
    <div>
        <h3>Enter password</h3>
        <input type='password' onChange={()=>
        console.log ("Entering password...")}/>

    </div>
  )
}

