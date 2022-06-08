import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function MenuDashboard() {
    const [user] = useContext(userContext);
    console.log(user);

    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to dashboard</h1>
            <Link to="/menus">
            </Link>
            <button onClick={() => navigate("/add")}>Add Account</button>
            <button onClick={() => navigate("/update")}>update Account</button>
            <button onClick={() => navigate("/delete")}>Delete Account</button>
            <br></br>
            <br></br>

        </>
    );
}