import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">
                <button>Admin Dashboard</button>
            </Link>
            <span> </span>
            <Link to="/addproduct">
                <button>Add a Product</button>
            </Link>
            <span> </span>
            <Link to="/updateproduct">
                <button>Update a Product</button>
            </Link>
            <span> </span>
            <Link to="/deleteproduct">
                <button>Delete a Product</button>
            </Link>

        </nav>
    );
}
