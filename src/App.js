import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
