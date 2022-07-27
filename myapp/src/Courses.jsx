import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Courses() {
    const [courses,setcourses] = React.useState([
        {
            title:'angular',
            price:90000,
            startdate:'15-08-2022',
            trainer:'sachin'
        },
        {
            title:'react',
            price:95000,
            startdate:'20-08-2022',
            trainer:'praveen'
        },
        {
            title:'nodejs',
            price:50000,
            startdate:'15-09-2022',
            trainer:'sneha'
        }
    ])
  return (
    <div className='betterview'>
        <h1>Courses</h1>
        {
            courses.map(function(course,index){
                return(
                    <li>
                        <Link to="courseDetails" state={{course}}>{course.title}</Link>
                    </li>
                )
            })
        }
        <Outlet></Outlet>
    </div>
  )
}

export default Courses