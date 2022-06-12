import { Input } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { Button } from "react-chat-engine";

export default function CustomerLogin(){
    
    const usernameInput = useRef();
    const passwordInput = useRef();
    const url = "http://localhost:9006/customer";
    
    async function Login(){
        
        const user = {
        username : usernameInput.current.value,
        password  : passwordInput.current.value   
        }

        try{
            const response = axios.post(`${url}/login`, user)
            console.log(response.data)
        } catch(error){
            console.log(error)
        }
    }
    
    
    
    
    
    return(
        <>
        <h3>Please Login Below</h3>
        <br></br>
        <Input placeholder="Enter your Username" ref={usernameInput}></Input>
        <Input placeholder="Enter your Password" ref={passwordInput}></Input>
        <Button onClick={Login}>Log In</Button>
        
        
        </>
    )
}