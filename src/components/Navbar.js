import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav"> 
        <Link to="/">Home</Link>
    
        <ul>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
        </ul>
    </nav>
}