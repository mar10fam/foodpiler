import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Recipes from './pages/Recipes';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import { Routes, Route }  from "react-router-dom";

function App() {
 
    
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/signin" element={<SignIn />} />  
        <Route path="/registration" element={<Registration />} />
      </Routes> 
    </div>
  </>
  )
}

export default App;
