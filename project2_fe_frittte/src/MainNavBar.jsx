import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainNavBar(){
    const navigate = useNavigate();

    return(
        <nav>
            <center>
            <h1>Welcome to FRITTTE</h1>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("register")}>Sign Up</Button>
            <Button onClick={() => navigate("/Food-Items")}>View all Food Items</Button>
            </center>
        </nav>
    )
}