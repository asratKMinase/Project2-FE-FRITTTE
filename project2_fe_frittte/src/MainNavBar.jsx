import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainNavBar(){
    const navigate = useNavigate();

    return(
        <nav>
            <center>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("register")}>Sign Up</Button>
            <Button onClick={() => navigate("/Food-Items")}>View all the Food Items</Button>
            <Button onClick={() => navigate("/admindashboard")}>Home</Button>
            <Button onClick={() => navigate("/customerdashboard")}>Customer Service</Button>
            </center>
        </nav>
    )
}