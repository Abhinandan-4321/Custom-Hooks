import React, { useEffect, useState } from 'react'

const saveAbhinandan = () => {
    let value = localStorage.getItem("key") || sessionStorage.getItem("key")
    return value? value : ""
}

function UseStorage() {
    const[state, setState] = useState(()=>{saveAbhinandan()})   
    
    useEffect(()=>{
    localStorage.setItem("key", state),
    sessionStorage.setItem("key", state)
    },["key", state])

  return [state,setState]
}

export default UseStorage