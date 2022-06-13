import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function AdminNavBar() {
    const navigate = useNavigate();
    return (
        <nav>
            <Button onClick={() => navigate("/admindashboard")}>Admin Dashboard</Button>
            <Button onClick={() => navigate("/addproduct")}>Add a Product</Button>
            <Button onClick={() => navigate("/updateproduct")}>Update a Product</Button>
            <Button onClick={() => navigate("/deleteproduct")}>Delete a Product</Button>
        </nav>
    );
}
