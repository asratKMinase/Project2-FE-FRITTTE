import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function AdminNavBar() {
    const navigate = useNavigate();
    return (
        <nav>
            <center>
            <h1> Hello FRITTTE Admin, welcome to your Dashboard</h1>
            <Button onClick={() => navigate("/admindashboard")}>Admin Dashboard</Button>
            <Button onClick={() => navigate("/addproduct")}>Add a Product</Button>
            <Button onClick={() => navigate("/update-product")}>Update a Product</Button>
            <Button onClick={() => navigate("/delete-product")}>Delete a Product</Button>
            </center>

        </nav>
    );
}
