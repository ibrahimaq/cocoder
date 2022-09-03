import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

//Pages
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
