<<<<<<< HEAD
 import React, { useState } from 'react'
import axios from "axios";
import Login from './Login';
 import {NavLink,BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom"
 import NavBar from './NavBar';
 import {useNavigate} from "react-router-dom"
 import {Nav} from "react-bootstrap"
 import '../App.css';
 

{/* class Form extends Component {
   static navigate=useNavigate;
   static path="/Login";
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            phone:"",
            password:"",
            confirmpassword:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event) => {
        this.setState({
            username:event.target.value
        })
    }
    emailhandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    phonehandler=(event)=>{
        this.setState({
            phone:event.target.value
        })
    }
    passwordhandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    confirmpasswordhandler=(event)=>{
        this.setState({
            confirmpassword:event.target.value
        })
      
    }

     handleSubmit=(event)=>{
        
        this.setState({
            username:"",
            email:"",
            phone:"",
            password:"",
            confirmpassword:"",
        })
        event.preventDefault();
        if(this.state.password===this.state.confirmpassword)
       
        {
            alert(`${this.state.username} ${this.state.email} ${this.state.password} ${this.state.phone}
            ${this.state.confirmpassword} ${this.state.password===this.state.confirmpassword} Register successfully `)
            console.log(this.state);
            console.log("register successfully");
            axios.post("http://localhost:8080/api/add",this.state)
            .then(response=>{
            console.log(response)
            })
            .catch(error=>{
            console.log(error)
            })
       
        }
        else{
            alert(`${this.state.password!==this.state.confirmpassword} password not matching`)
            console.log("password not matching");
        }
       
       
    }


  render() {
    return (
        
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <form action="action_page.php"onSubmit={this.handleSubmit}>
            <h1 className="text-center m-4" style={{color: "black",backgroundColor: "aliceblue",fontFamily:"verdana"}}>Registration Form</h1>
            
           <select id="user/admin" style={{backgroundColor: "aliceblue",width:"20%"}}>
            <option>user</option>
            <option>admin</option>
           </select> <br />
           
            <input type="text" value={this.state.username} onChange={this.firsthandler} name="username" placeholder="username"/>  <br />
           
            <input type="text" value={this.state.email} onChange={this.emailhandler} name="email" placeholder="email"/> <br />
           
            <input type="text" value={this.state.phone} onChange={this.phonehandler} name="phone" placeholder="phone" /> <br />
          
            <input type="password" value={this.state.password} onChange={this.passwordhandler} name="password" placeholder="password" /> <br />
          
            <input type="password" value={this.state.confirmpassword} onChange={this.confirmpasswordhandler} name="confirmpassword" placeholder="confirmpassword"/> <br />
            <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em"}} >
              Submit
            </button> <br />
           

        </form>
         
        
         <div>Already user?
         <NavLink actimeClassName="login" to={"/login"}>Login</NavLink></div>
        
        </div>
        </div>
        </div>
      
    )
  }
}
export default Form;*/}


export default function Form() {
       let navigate=useNavigate()
       const [user,setUser]=useState({
            username:"",
            email:"",
            userRole:"",
            phone:"",
            password:"",
            confirmpassword:"",

        });
        const{username,email,phone,password,confirmpassword,userRole}=user;


        const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        };

        const sumbithandler=async(e)=>{
          // e.preventDefalut();
          if(phone.length!==10){
            alert('number should be 10 digits');
            return;
          }
         
          if(userRole===""){
            if(password===confirmpassword && phone.length===10){
                alert(`registration succesfull`)
                console.log("registration successfull");
            await axios.post("http://localhost:8080/api/add",user)
            .then((response) => {
              console.log(response);
            });

            this.props.navigation.navigate('/Login');   

            }

          
          else{
            alert('registration failed')
               console.log("password not matching");
          }
        }
          else{
            if(password===confirmpassword && phone.length===10){
                alert('registration successfull');
                console.log("registration successfull");
             await axios.post("http://localhost:8080/api/add_admin",user)
             .then((response) => {
              console.log(response);
            });
             this.props.navigation.navigate('Login');
            }
            else{
                alert(' registration failed')
                  console.log("password not matching");
            }
          }
        };
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <form  onSubmit={((e)=>sumbithandler(e))}>
                <h1 className="text-center m-4" style={{color: "black",backgroundColor: "aliceblue",fontFamily:"verdana"}}>Registration Form</h1>
                
               <select id="user/admin" style={{backgroundColor: "aliceblue",width:"20%"}}>
                <option>user</option>
                <option>admin</option>
               </select> <br />

               <input type="text" style={{backgroundcolor:"aliceblue"}} value={userRole} onChange={((e)=>onInputChange(e))} name="userRole" placeholder="userRole"/> <br />        

                <input type="text" value={username} onChange={((e)=>onInputChange(e))} name="username" placeholder="username"/>  <br />
               
                <input type="text" value={email} onChange={((e)=>onInputChange(e))} name="email" placeholder="email"/> <br />
               
               
                <input type="text" value={phone} onChange={((e)=>onInputChange(e))} name="phone" placeholder="phone" /> <br />
              
                <input type="password" value={password} onChange={((e)=>onInputChange(e))} name="password" placeholder="password" /> <br />
              
                <input type="password" value={confirmpassword} onChange={((e)=>onInputChange(e))} name="confirmpassword" placeholder="confirmpassword"/> <br />
                <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em"}} >
                  Submit
                </button> <br />
              <Routes>
                <Route path="/login" element={<Login/>}>
                 Login
                </Route>
                
              </Routes> 
                <div>Already user?</div>
                <a id="LoginLink" href="/Login">Login</a>
    
             
            </form>  
            </div>
            </div>
            </div>
          
        )
        
=======
 import React, { useState } from 'react'
import axios from "axios";
import Login from './Login';
 import {NavLink,BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom"
 import NavBar from './NavBar';
 import {useNavigate} from "react-router-dom"
 import {Nav} from "react-bootstrap"
 import '../App.css';
 

{/* class Form extends Component {
   static navigate=useNavigate;
   static path="/Login";
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            phone:"",
            password:"",
            confirmpassword:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event) => {
        this.setState({
            username:event.target.value
        })
    }
    emailhandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    phonehandler=(event)=>{
        this.setState({
            phone:event.target.value
        })
    }
    passwordhandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    confirmpasswordhandler=(event)=>{
        this.setState({
            confirmpassword:event.target.value
        })
      
    }

     handleSubmit=(event)=>{
        
        this.setState({
            username:"",
            email:"",
            phone:"",
            password:"",
            confirmpassword:"",
        })
        event.preventDefault();
        if(this.state.password===this.state.confirmpassword)
       
        {
            alert(`${this.state.username} ${this.state.email} ${this.state.password} ${this.state.phone}
            ${this.state.confirmpassword} ${this.state.password===this.state.confirmpassword} Register successfully `)
            console.log(this.state);
            console.log("register successfully");
            axios.post("http://localhost:8080/api/add",this.state)
            .then(response=>{
            console.log(response)
            })
            .catch(error=>{
            console.log(error)
            })
       
        }
        else{
            alert(`${this.state.password!==this.state.confirmpassword} password not matching`)
            console.log("password not matching");
        }
       
       
    }


  render() {
    return (
        
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <form action="action_page.php"onSubmit={this.handleSubmit}>
            <h1 className="text-center m-4" style={{color: "black",backgroundColor: "aliceblue",fontFamily:"verdana"}}>Registration Form</h1>
            
           <select id="user/admin" style={{backgroundColor: "aliceblue",width:"20%"}}>
            <option>user</option>
            <option>admin</option>
           </select> <br />
           
            <input type="text" value={this.state.username} onChange={this.firsthandler} name="username" placeholder="username"/>  <br />
           
            <input type="text" value={this.state.email} onChange={this.emailhandler} name="email" placeholder="email"/> <br />
           
            <input type="text" value={this.state.phone} onChange={this.phonehandler} name="phone" placeholder="phone" /> <br />
          
            <input type="password" value={this.state.password} onChange={this.passwordhandler} name="password" placeholder="password" /> <br />
          
            <input type="password" value={this.state.confirmpassword} onChange={this.confirmpasswordhandler} name="confirmpassword" placeholder="confirmpassword"/> <br />
            <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em"}} >
              Submit
            </button> <br />
           

        </form>
         
        
         <div>Already user?
         <NavLink actimeClassName="login" to={"/login"}>Login</NavLink></div>
        
        </div>
        </div>
        </div>
      
    )
  }
}
export default Form;*/}


export default function Form() {
       let navigate=useNavigate()
       const [user,setUser]=useState({
            username:"",
            email:"",
            userRole:"",
            phone:"",
            password:"",
            confirmpassword:"",

        });
        const{username,email,phone,password,confirmpassword,userRole}=user;


        const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        };

        const sumbithandler=async(e)=>{
          // e.preventDefalut();
          if(phone.length!==10){
            alert('number should be 10 digits');
            return;
          }
         
          if(userRole===""){
            if(password===confirmpassword && phone.length===10){
                alert(`registration succesfull`)
                console.log("registration successfull");
            await axios.post("http://localhost:8080/api/add",user)
            .then((response) => {
              console.log(response);
            });

            this.props.navigation.navigate('/Login');   

            }

          
          else{
            alert('registration failed')
               console.log("password not matching");
          }
        }
          else{
            if(password===confirmpassword && phone.length===10){
                alert('registration successfull');
                console.log("registration successfull");
             await axios.post("http://localhost:8080/api/add_admin",user)
             .then((response) => {
              console.log(response);
            });
             this.props.navigation.navigate('Login');
            }
            else{
                alert(' registration failed')
                  console.log("password not matching");
            }
          }
        };
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <form  onSubmit={((e)=>sumbithandler(e))}>
                <h1 className="text-center m-4" style={{color: "black",backgroundColor: "aliceblue",fontFamily:"verdana"}}>Registration Form</h1>
                
               <select id="user/admin" style={{backgroundColor: "aliceblue",width:"20%"}}>
                <option>user</option>
                <option>admin</option>
               </select> <br />

               <input type="text" style={{backgroundcolor:"aliceblue"}} value={userRole} onChange={((e)=>onInputChange(e))} name="userRole" placeholder="userRole"/> <br />        

                <input type="text" value={username} onChange={((e)=>onInputChange(e))} name="username" placeholder="username"/>  <br />
               
                <input type="text" value={email} onChange={((e)=>onInputChange(e))} name="email" placeholder="email"/> <br />
               
               
                <input type="text" value={phone} onChange={((e)=>onInputChange(e))} name="phone" placeholder="phone" /> <br />
              
                <input type="password" value={password} onChange={((e)=>onInputChange(e))} name="password" placeholder="password" /> <br />
              
                <input type="password" value={confirmpassword} onChange={((e)=>onInputChange(e))} name="confirmpassword" placeholder="confirmpassword"/> <br />
                <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginTop:"1em",marginRight:"1em",marginBottom:"1em",marginLeft:"1em"}} >
                  Submit
                </button> <br />
              <Routes>
                <Route path="/login" element={<Login/>}>
                 Login
                </Route>
                
              </Routes> 
                <div>Already user?</div>
                <a id="LoginLink" href="/Login">Login</a>
    
             
            </form>  
            </div>
            </div>
            </div>
          
        )
        
>>>>>>> 496ea6f4b393668fe17270e07fd561cb25c2390d
 }    