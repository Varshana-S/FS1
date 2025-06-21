import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'
const Home = () => {
  return (
    <div>
        <h1>Welcome to Home Page!</h1>
        <Welcome name='Virat' country='India'/> 
   <Skills skill={['React','Node','Express','Mangodb']}/>
      <h1>Hiii🤩</h1>
    </div>
  )
}

export default Home