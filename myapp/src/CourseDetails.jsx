import React from 'react'
import { useLocation } from 'react-router-dom'

function CourseDetails() {
    var details = useLocation();
    console.log("details::",details)
  return (
    <div className='betterview'>
        <h1>CourseDetails</h1>
        <h1>{details.state.course.title}</h1>
        <h2>{details.state.course.price}</h2>
        <h2>{details.state.course.trainer}</h2>
        <h2>{details.state.course.startdate}</h2>
    </div>
  )
}

export default CourseDetails