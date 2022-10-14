<<<<<<< HEAD
import React, { useState } from 'react'
import axios from "axios";
 import {NavLink,BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom"
 import NavBar from './NavBar';
 import {useNavigate} from "react-router-dom"
 import AdminDashboard from './AdminDashboard';
 import Form from './Form';
 

 export default function Login() {
    let navigate=useNavigate()
    const [user,setUser]=useState({
            email:"",
            password:"",
            userRole:"",
        });
        const{email,password,userRole}=user;

        const onInputChange=(e)=>{
          setUser({...user,[e.target.name]:e.target.value});
        };
        const onSumbit=async(e)=>{
          alert('Logged in Successfully')
          e.preventDefault();
          await axios.post("http://localhost:8080/api/add_login",user)
          if(userRole==="user"){
            navigate("/NavBar")
          }
          else{
            navigate("/AdminDashboard")
          }

        }
      
       
    
    
    return (
      <div className="container">
        
        
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
           
       <form onSubmit={(e)=>onSumbit(e)}>
        <h1 className="text-center m-4" style={{color: "black",backgroundColor: "aliceblue",fontFamily:"verdana"}}>Login</h1>
         <input
         type="text"
         value={email}
         onChange={((e)=>onInputChange(e))}
         name="email"
         placeholder="email" 
         /> <br />
         <input
         type="password"
         value={password}
         onChange={((e)=>onInputChange(e))}
         name="password"
         placeholder="password" 
          /> <br />
          

         <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em"}} >
          Submit
        </button>
        
        <div>New User/admin?
         <a href="http://localhost:3000/">SignUp</a></div>
         <Routes>
          <Route pah="/NavBar" element={<NavBar/>}>
            NavBar
          </Route>
          <Route path="/AdminDashBoard" element={<AdminDashboard/>}>
            AdminDashBoard
          </Route>
          <Route path="/Form" element={<Form/>}></Route>
         </Routes>
        
        </form>
      </div>
      </div>
      </div>
    )
    
  
}


=======
import React, { useState } from 'react'
import axios from "axios";
 import {NavLink,BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom"
 import NavBar from './NavBar';
 import {useNavigate} from "react-router-dom"
 import AdminDashboard from './AdminDashboard';
 import Form from './Form';
 

 export default function Login() {
    let navigate=useNavigate()
    const [user,setUser]=useState({
            email:"",
            password:"",
            userRole:"",
        });
        const{email,password,userRole}=user;

        const onInputChange=(e)=>{
          setUser({...user,[e.target.name]:e.target.value});
        };
        const onSumbit=async(e)=>{
          alert('Logged in Successfully')
          e.preventDefault();
          await axios.post("http://localhost:8080/api/add_login",user)
          if(userRole==="user"){
            navigate("/NavBar")
          }
          else{
            navigate("/AdminDashboard")
          }

        }
      
       
    
    
    return (
      <div className="container">
        
        
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
           
       <form onSubmit={(e)=>onSumbit(e)}>
        <h1 className="text-center m-4" style={{color: "black",backgroundColor: "aliceblue",fontFamily:"verdana"}}>Login</h1>
         <input
         type="text"
         value={email}
         onChange={((e)=>onInputChange(e))}
         name="email"
         placeholder="email" 
         /> <br />
         <input
         type="password"
         value={password}
         onChange={((e)=>onInputChange(e))}
         name="password"
         placeholder="password" 
          /> <br />
          

         <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em"}} >
          Submit
        </button>
        
        <div>New User/admin?
         <a href="http://localhost:3000/">SignUp</a></div>
         <Routes>
          <Route pah="/NavBar" element={<NavBar/>}>
            NavBar
          </Route>
          <Route path="/AdminDashBoard" element={<AdminDashboard/>}>
            AdminDashBoard
          </Route>
          <Route path="/Form" element={<Form/>}></Route>
         </Routes>
        
        </form>
      </div>
      </div>
      </div>
    )
    
  
}


>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
