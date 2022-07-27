import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Aboutus from './Aboutus';
import Home from './Home'
import Contactus from './Contactus';
import Courses from './Courses'
import CourseDetails from './CourseDetails';
import Product from './Product';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home></Home>} />
                <Route path="aboutus" element={<Aboutus></Aboutus>} />
                <Route path='contactus' element={<Contactus></Contactus>} />
                <Route path='products' element={<Product></Product>} />
                <Route path='courses' element={<Courses></Courses>}>
                    <Route path='courseDetails' element={<CourseDetails></CourseDetails>}></Route>
                </Route>
                
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
