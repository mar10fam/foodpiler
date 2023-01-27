import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Recipes from './pages/Recipes';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';

function App() {
  let component
  switch(window.location.pathname) {
    case "/": 
      component = <Home />
      break
    case "/Inventory":
      component = <Inventory />
      break
    case "/Recipes":
      component = <Recipes />
      break
    case "/SignIn": 
      component = <SignIn />
      break
    case "/Registration":
      component = <Registration /> 
      break
    default:
      component = <Home />
  }

  return (
  <>
    <Navbar />
    <div className="container">{component}</div>
  </>
  )
}

export default App;
