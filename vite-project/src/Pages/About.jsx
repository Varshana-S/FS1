import React, { useContext } from 'react'
import State from '../hooks/State'
import { Link } from 'react-router-dom'
import { UserContext } from '../hooks/UserContext'
const About=()=> {
  const user=useContext(UserContext)
  return (
    <div>
         <h1>Hi!!! {user.name}</h1>
         <p>Age: {user.age}</p>
         <p>Department: {user.dep}</p>
        <Link to='/state'>UserState Example</Link> <br />
        <Link to='/form'>Controlled Form</Link><br />
        <Link to='/effect'>useEffect</Link><br />
        <Link to='/reducer'>Reducer</Link>
    </div>
  )
}

export default About