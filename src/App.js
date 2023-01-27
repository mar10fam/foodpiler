import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Recipes from './pages/Recipes';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';

function App() {
  let Component
  switch(window.location.pathname) {
    case "/": 
      Component = Home
      break
    case "/inventory":
      Component = Inventory
      break
    case "/recipes":
      Component = Recipes
      break
    case "/signin": 
      Component = SignIn
      break
    case "/registration":
      Component = Registration
      break
    default:
      Component = Home
  }
console.log(Component);
  return (
  <>
    <Navbar />
    <div className="container"><Component /></div>
  </>
  )
}

export default App;
