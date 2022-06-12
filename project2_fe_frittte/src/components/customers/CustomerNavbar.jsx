import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


export default function CustomerNavBar(){
    const navigate = useNavigate();

    return(
        <nav>
        
            <Button onClick={() => navigate("/customerdashboard")}>Login</Button>
            <Button onClick={() => navigate("/addanaccount")}>create an account</Button>
            <Button onClick={() => navigate("/updateanaccount")}>update an account</Button>
            <Button onClick={() => navigate("/deleteanaccount")}>delete an account</Button>
          
          
        </nav>
    )
}