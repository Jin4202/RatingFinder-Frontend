import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
