import { useState } from "react";
import { useNavigate } from "react-router";
import "../login/signup.css"
import { Switch } from "./switch";
export let identity = ""
export const Signin = ()=>{

   const [flag ,setFlag] = useState(false)


    const navigate = useNavigate();
    const [formdata,setFormdata] = useState({})
    console.log(formdata)
    

    const handlechange = (e)=>{
        const {name,value} = e.target;
    
        setFormdata({
          ...formdata,
          [name]:value
        })
        
    
      }

    const check = async ()=>{
        const data = await fetch("https://login-backend1.herokuapp.com/users").then((d)=>d.json());
        console.log(data)
        data.map((e)=>{
            
            if(e.email === formdata.email && e.password === formdata.pass){
                identity = e.first_name
                navigate("/success")
            }
            else{
                setFlag(!flag)
                
            }
            
            

        })
    }    
           
        
    
        
    return (
        <div>
            <img className = "logo45" src = "https://my.asos.com/Content/images/asos-logo-2022-93x28.png"/> 
        <div className = "signup">
            <Switch/>
            <h1>SIGN IN</h1>
            
            <input className = "inp_box" name = "email" type = "text" placeholder = "ENTER YOUR EMAIL" onChange ={handlechange} /><br/>
            <input  className = "inp_box" name = "pass"type = "password" placeholder = "ENTER YOUR PASSWORD" onChange = {handlechange} /><br/>
            <button className = "join1" onClick = {check}>Sign in</button>
            <div id = "make">forgot password?</div>
            <div>{flag?<h3>Looks like either your username or password were incorrect. Wanna try again?</h3>:null}</div>
        </div>
        </div>
    )
}