import React from 'react'
import { useSelector } from 'react-redux'

const Check = () => {

    const  user  = useSelector( state => state);
    console.log(user);
    return (
    
    <div>check</div>
  )
}

export default Check