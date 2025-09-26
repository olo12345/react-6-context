import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./../../store/CartContext.jsx";

function Navbar() {
    const {total} = useContext(CartContext);
    const token = false;
    return (
        <nav className="bg-gray-800 flex p-4 text-white">
            <h1 className="font-bold">Pizzería Mamma Mía</h1>
            <div className="mr-auto flex ml-4 space-x-4">
                <Link to="/">Home</Link>
                {token ? <Link to ="/profile">Profile</Link> : <Link to="/login">Login</Link>}
                {token ? <Link to="/logout">Logout</Link> : <Link to="/register">Register</Link>}
                <Link to="/cart">Total: ${total.toLocaleString("es-CL")}</Link>
            </div>
        </nav>
    );
}

export default Navbar;