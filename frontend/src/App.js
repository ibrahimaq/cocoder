import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import './index.css';
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";

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
              <Route path='/post' element={<CreatePost />} />
            </Routes>
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
