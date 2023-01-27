export default function Navbar() {
    return <nav className="nav"> 
        <a href="/">Home</a>
    
        <ul>
            <li><a href="/Inventory">Inventory</a></li>
            <li><a href="/Recipes">Recipes</a></li>
            <li><a href="/SignIn">Sign In</a></li>
            <li><a href="/SignOut">Sign Out</a></li>
        </ul>
    </nav>
}