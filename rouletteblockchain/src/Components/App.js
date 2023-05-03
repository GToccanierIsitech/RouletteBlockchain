import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../Styles/App.css';
import Login from '../View/Login/Login';
import Home from '../View/Home/Home';
import CartShipping from '../View/CartShipping/CartShipping';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cartShipping" element={<CartShipping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
