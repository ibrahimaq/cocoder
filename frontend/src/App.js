import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import './index.css';
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App bg-slate-50">
      
        <BrowserRouter>
        <Navbar />
          <div className="page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
              <Route path='/post' element={<CreatePost />} />
            </Routes>
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
