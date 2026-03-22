import React, { useState } from 'react'

export default function InputExample() {
    let [data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        gender:"",
        mern:"",
        mean:"",
        python:"",
        java:"",
        php:"",
    })
    function getInputData(e){
   let {name, value } = e.target

    }

    function postData(e){
        e.preventDefult()
        alert(`
            Name : ${data.name}`)
    }


  return (
    <>
      
    </>
  )
}
