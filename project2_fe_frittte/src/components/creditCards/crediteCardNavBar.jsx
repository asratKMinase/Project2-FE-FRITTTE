import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


export default function CrediteCardNavBar(){
    const navigate = useNavigate();

    return(
        <nav>
        
            <Button onClick={() => navigate("/creditcarddashboard")}>Login</Button>
            <Button onClick={() => navigate("/addcreditecard")}>create an account</Button>
            <Button onClick={() => navigate("/deletecreditecard")}>delete an account</Button>
         
        </nav>
    )
}