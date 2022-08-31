import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';


//Pages
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
