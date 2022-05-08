import { useState } from "react";
import { Switch } from "./switch";
import "../login/signup.css"
export const Signup = ()=>{
    const [data,setData] = useState({});
    console.log(data)
    const handlechange = (e)=>{
        const {name,value} = e.target;

        setData({
            ...data,
            [name]:value
        })


    }

    return (
        <div>
           <img className = "logo45" src = "https://my.asos.com/Content/images/asos-logo-2022-93x28.png"/> 
        <div className = "signup">
            
            <Switch/>
            <h1>Sign Up</h1>
            <span className = "adjust">EMAIL ADDRESS:</span>
            <input className = "inp_box"  name = "email" type = "text"  onChange = {handlechange} placeholder ="ENTER YOUR EMAIL"/><br/>
            <label className = "adjust2">FIRST NAME:</label>
            <input className = "inp_box" name = "first_name" type = "text" placeholder = "ENTER YOUR FIRST NAME"  onChange = {handlechange}/><br/>
            <label className = "adjust2">LAST NAME:</label>
            <input className = "inp_box" name = "last_name"type = "text" placeholder = "ENTER YOUR LAST NAME" onChange = {handlechange}/><br/>
            <label className = "adjust2">PASSWORD:</label>
            <input className = "inp_box" name = "password" type = "text" placeholder = "ENTER YOUR PASSWORD" onChange = {handlechange}/><br/>
            <label className = "adjust">DATE OF BIRTH:</label>
            <input className = "inp_box" name = "date_of_birth" type = "date" onChange = {handlechange} /><br/>
            <button className = "join"onClick = {()=>{
                fetch('https://login-backend1.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
                  alert("User created Successfully")
            }}>Join ASOS</button>
            
        </div>
        </div>
    )
}