import { Link } from "react-router-dom";

export default function AdminNavBar() {
    return (
        <nav>
            <Link to="/admindashboard">
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
            </Link>

        </nav>
    );
}
