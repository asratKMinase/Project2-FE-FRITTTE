import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function AdminNavBar() {
    const navigate = useNavigate();
    return (
        <nav>
            {/* <Link to="/admindashboard">
                <Button>Admin Dashboard</Button>
            </Link>
            <span> </span>
            <Link to="/addproduct">
                <Button>Add a Product</Button>
            </Link>
            <span> </span>
            <Link to="/updateproduct">
                <Button>Update a Product</Button>
            </Link>
            <span> </span>
            <Link to="/deleteproduct">
                <Button>Delete a Product</Button>
            </Link> */}
            
            <Button onClick={() => navigate("/admindashboard")}>Admin Dashboard</Button>
            <Button onClick={() => navigate("addproduct")}>Add a Product</Button>
            <Button onClick={() => navigate("/updateproduct")}>Update a Product</Button>
            <Button onClick={() => navigate("/deleteproduct")}>Delete a Product</Button>

        </nav>
    );
}
