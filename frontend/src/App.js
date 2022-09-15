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
import Footer from "./components/Footer";
import GetPost from "./pages/GetPost";

function App() {
  return (
    <div className="App bg-slate-50 min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="page flex-grow text-slate-700">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/new-post" element={<CreatePost />} />
            <Route path="/posts/:id" element={<GetPost />} />
          

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
