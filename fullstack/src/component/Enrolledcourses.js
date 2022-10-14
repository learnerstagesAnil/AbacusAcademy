<<<<<<< HEAD
import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Nav} from "react-bootstrap"
import Enroll from './Enroll'
import {useNavigate} from "react-router-dom"
import "../App.css"

export default function Enrolledcourses() {
    const navigate = useNavigate();
    const clickhandler = () => {
        navigate("/Enroll")
    }
  return (
    
    <div>
        <nav >
        <h1 style={{background:"#adf"}}>Enrolledcourses</h1>
        <input  style={{background:"",position:"relative",left:"450px",top:"2px",height:"50px",width:"270px",borderRadius:"10em"}} type="search" placeholder=" Type here search course" aria-label="Search"/>
        <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em",position: "relative",left: "466px"}}>Search</button><br /><br />
        <form style={{background:"#adf"}}>
        <lable className="text-center m-4">Course name:Doug Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:3 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:222</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br /><br />
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        <form style={{background:"#adf"}}>
        <lable className="text-center m-4">Course name:Melissa & Doug Add Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:5 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:122</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br />
       
        
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        </nav>

         <Routes>
            <Route path="/Enroll" element={<Enroll/>}>
                Enroll
            </Route>
        </Routes> 
   
    </div>

  )
}
=======
import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Nav} from "react-bootstrap"
import Enroll from './Enroll'
import {useNavigate} from "react-router-dom"
import "../App.css"

export default function Enrolledcourses() {
    const navigate = useNavigate();
    const clickhandler = () => {
        navigate("/Enroll")
    }
  return (
    
    <div>
        <nav >
        <h1 style={{background:"#adf"}}>Enrolledcourses</h1>
        <input  style={{background:"",position:"relative",left:"450px",top:"2px",height:"50px",width:"270px",borderRadius:"10em"}} type="search" placeholder=" Type here search course" aria-label="Search"/>
        <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em",position: "relative",left: "466px"}}>Search</button><br /><br />
        <form style={{background:"#adf"}}>
        <lable className="text-center m-4">Course name:Doug Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:3 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:222</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br /><br />
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        <form style={{background:"#adf"}}>
        <lable className="text-center m-4">Course name:Melissa & Doug Add Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:5 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:122</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br />
       
        
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        </nav>

         <Routes>
            <Route path="/Enroll" element={<Enroll/>}>
                Enroll
            </Route>
        </Routes> 
   
    </div>

  )
}
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
