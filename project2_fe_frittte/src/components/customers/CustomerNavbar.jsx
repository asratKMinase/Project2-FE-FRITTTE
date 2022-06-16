import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
import { Button } from "@mui/material";


export default function CustomerNavBar(){
    const [user, setUser] = useContext(userContext);
    console.log(user);
    
    
    const navigate = useNavigate();


    return(
        <nav>
        
            <Button onClick={() => navigate("/customerdashboard")}>Login</Button>
            <Button onClick={() => navigate("/addanaccount")}>create an account</Button>
            <Button onClick={() => navigate("/updateanaccount")}>update an account</Button>
            <Button onClick={() => navigate("/deleteanaccount")}>delete an account</Button>
            <Button onClick={() => navigate("/make-payment")}>pay your balance</Button>
            <Button onClick={() => navigate("/logIn")}>delete an account</Button>
            
          
          
        </nav>
    )
}