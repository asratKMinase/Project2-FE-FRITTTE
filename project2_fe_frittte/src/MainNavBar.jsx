import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainNavBar(){
    const navigate = useNavigate();

    return(
        <nav>
            <center>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("register")}>Sign Up</Button>
            <Button onClick={() => navigate("/Food-Items")}>View all Food Items</Button>
            <Button onClick={() => navigate("/admindashboard")}>Home</Button>
            <Button onClick={() => navigate("/customerdashboard")}>Customer</Button>
            <Button onClick={() => navigate("/creditcarddashboard")}>CrediteCard</Button>
            </center>
        </nav>
    )
}