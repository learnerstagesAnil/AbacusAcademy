<<<<<<< HEAD
import React from 'react'
import AddCourse from './AddCourse';
import {useNavigate} from "react-router-dom"
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "../App.css"


export default function Course() {
    const navigate=useNavigate();
    const clickhandler=()=>{
        navigate("/AddCourse")
    }
  return (
    <div>
        <center>
        <p className="lead">
        <h1 style={{background:"#adf"}}>Course</h1>

             <button className="btn btn-success" style={{background:""}}
                        onClick={clickhandler}>AddCourse 
             </button>
        </p>
        <Routes>
            <Route path="/AddCourse" element={<AddCourse/>}>
                AddCourse
            </Route>
        </Routes>
        </center>
    </div>

  )
}
=======
import React from 'react'
import AddCourse from './AddCourse';
import {useNavigate} from "react-router-dom"
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "../App.css"


export default function Course() {
    const navigate=useNavigate();
    const clickhandler=()=>{
        navigate("/AddCourse")
    }
  return (
    <div>
        <center>
        <p className="lead">
        <h1 style={{background:"#adf"}}>Course</h1>

             <button className="btn btn-success" style={{background:""}}
                        onClick={clickhandler}>AddCourse 
             </button>
        </p>
        <Routes>
            <Route path="/AddCourse" element={<AddCourse/>}>
                AddCourse
            </Route>
        </Routes>
        </center>
    </div>

  )
}
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
