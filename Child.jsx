import React from 'react'

export default function Child({update}) {
  return (
    <div>
      <h1>this is child component</h1>
      <button onClick={ update}>Inc num1</button>
    </div> 
  )
}
