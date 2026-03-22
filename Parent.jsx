"use client"
import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    let[num1, setNum1]= useState(1)
    let[num2,setNum2] = useState(10)
    let[num3,setNum3] = useState(20)

function update(){
    if (num1<10)
        setNum1(num1+1)
    else if(num2<20)
        setNum2(num2+1)
    else if(num3<30)
        setNum3(num3+1)
      else{
        alert("All numbers reached their limit!")
      }
}
  return (
    <div>
      <h1>this is parent component</h1>
      <p>sending data to child component</p>
      <h3>Num1 = {num1} | Num2 = {num2} | Num3 = {num3}</h3>
      <hr />
      <Child update = {update}/>
    </div>
  )
}
