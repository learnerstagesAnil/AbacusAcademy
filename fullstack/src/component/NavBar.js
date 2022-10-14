<<<<<<< HEAD
import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Academy from "./Academy"
import Enrolledcourses from "./Enrolledcourses"
import Login from "./Login"
import AdminDashboard from './AdminDashboard'
import {Nav} from "react-bootstrap"
import "../App.css"


export default function NavBar() {
    function onLogout(e){
        e.preventDefault();
    }
  return (
    
    <div>
        <nav className="navbar navbar-dark bg-primary justify-content-between">
        <a className="navbar-brand">Abacus academy</a>
        <form className="form-inline">
        <Nav.Link as={Link} to={"/AdminDashboard"}>AdminDashboard</Nav.Link>  
        <Nav.Link as={Link} to={"/Academy"}>Academy</Nav.Link> 
        <Nav.Link as={Link} to={"/Enrolledcourses"}>Enrolledcourses</Nav.Link>
        <Nav.Link as={Link} to={"/Logout"}>Logout</Nav.Link> 
       </form>
       </nav>
       <center >
       <input  style={{background:"",position:"relative",left:"100px",top:"2px",height:"50px",width:"270px",borderRadius:"10em"}} type="search" placeholder=" Type here search " aria-label="Search"/>
        <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em",position: "relative",left: "130px"}}>Search</button><br /><br />

        
        </center>
        
        <Routes>
            <Route path="/Academy" element={<Academy/>}>
                Academy
            </Route>
            <Route path="/Enrolledcourses" element={<Enrolledcourses/>}>
                Enrolledcourses
            </Route>
            <Route path="/AdminDashboard" element={<AdminDashboard/>}>
                AdminDashboard
            </Route> 
        </Routes>
    </div>
    
  )
}
=======
import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Academy from "./Academy"
import Enrolledcourses from "./Enrolledcourses"
import Login from "./Login"
import AdminDashboard from './AdminDashboard'
import {Nav} from "react-bootstrap"
import "../App.css"


export default function NavBar() {
    function onLogout(e){
        e.preventDefault();
    }
  return (
    
    <div>
        <nav className="navbar navbar-dark bg-primary justify-content-between">
        <a className="navbar-brand">Abacus academy</a>
        <form className="form-inline">
        <Nav.Link as={Link} to={"/AdminDashboard"}>AdminDashboard</Nav.Link>  
        <Nav.Link as={Link} to={"/Academy"}>Academy</Nav.Link> 
        <Nav.Link as={Link} to={"/Enrolledcourses"}>Enrolledcourses</Nav.Link>
        <Nav.Link as={Link} to={"/Logout"}>Logout</Nav.Link> 
       </form>
       </nav>
       <center >
       <input  style={{background:"",position:"relative",left:"100px",top:"2px",height:"50px",width:"270px",borderRadius:"10em"}} type="search" placeholder=" Type here search " aria-label="Search"/>
        <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em",position: "relative",left: "130px"}}>Search</button><br /><br />

        
        </center>
        
        <Routes>
            <Route path="/Academy" element={<Academy/>}>
                Academy
            </Route>
            <Route path="/Enrolledcourses" element={<Enrolledcourses/>}>
                Enrolledcourses
            </Route>
            <Route path="/AdminDashboard" element={<AdminDashboard/>}>
                AdminDashboard
            </Route> 
        </Routes>
    </div>
    
  )
}
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
