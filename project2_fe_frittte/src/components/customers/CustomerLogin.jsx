import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerLogin(){
    
    const navigate = useNavigate();
    const [user, setUser] = useContext(userContext);
    const usernameInput = useRef();
    const passwordInput = useRef();
    const url = "http://localhost:9006";
    
    async function Login(){
        
        const userInput = {
        username:usernameInput.current.value,
        password:passwordInput.current.value,   
        };
        console.log(user)
        try{
            const getResponse = axios.get(`${url}/customer/findCustomer?id=${usernameInput.current.value}`)
            console.log(usernameInput.current.value)
            const response = axios.post(`${url}/auth`, userInput)
            setUser({...user, username: getResponse})
            console.log("This is after we set the user ", getResponse);
            console.log(user, "2")
            console.log(response.data , "Hello")
            
        if(usernameInput.current.value === "Io" || usernameInput.current.value === "mmark" ){
            
                
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
        <Button onClick={Login}>Login</Button>
        
        
        </>
    )
}