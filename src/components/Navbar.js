export default function Navbar() {
    return <nav className="nav"> 
        <a href="/">Home</a>
    
        <ul>
            <li><a href="/inventory">Inventory</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/signin">Sign In</a></li>
        </ul>
    </nav>
}