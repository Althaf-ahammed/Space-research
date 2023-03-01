import axios from 'axios'
import React, { useState } from 'react'
import './space.css'

function SpaceResearch() {
  const [date, setDate] = useState('')
  const [picOfDay, setPicOfDay] = useState({})

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=<api-key>&date=${date}`)
    .then((data)=>{
      setPicOfDay(data.data)
    })
    .catch(err=>console.error(err))
  }

  return (
    <div className='container'>
      
      <h1>Picture of the day</h1>
        <form>
          <input type='date' onChange={(e)=>{setDate(e.target.value)}}></input>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
        <div className='card'>
              <h3>{picOfDay.date}</h3>
              <img src={picOfDay.url}></img>
              <h5>{picOfDay.title}</h5>
              <p>{picOfDay.explanation}</p>
            </div>
        
    </div>
  )
}


export default SpaceResearch