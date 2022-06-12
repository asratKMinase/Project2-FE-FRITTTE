import { Input ,Button } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerLogin(){
    
    const navigate = useNavigate();

    const usernameInput = useRef();
    const passwordInput = useRef();
    const url = "http://localhost:9006";
    
    async function Login(){
        
        const user = {
        username:usernameInput.current.value,
        password:passwordInput.current.value,   
        };
        console.log(user)
        try{
            console.log(user)
            const response = axios.post(`${url}/auth`, user)
            console.log(response.data)
            
        if(usernameInput.current.value === "ASebirka" || usernameInput.current.value === "mmark" ){
            
              navigate("/admindashboard");
            } else{
                navigate("/customerdashboard");
               
            }
        } catch(error){
            console.log(error)
        }
    }
    
    
    
    
    
    return(
        <>
        <h3>Please Login Below</h3>
        <br></br>
        <input placeholder="Enter your Username" ref={usernameInput}></input>
        <input placeholder="Enter your Password" ref={passwordInput}></input>
         
        <br></br>
        <Button onClick={Login}>Log In</Button>
        
        
        </>
    )
}