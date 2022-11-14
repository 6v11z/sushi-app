import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Cart from "./components/Cart";
import Carro from "./components/Carro";
import NavbarAdmin from "./components/NavbarAdmin";
import EditarProductos from "./components/EditarProductos";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot_password" element={<ForgotPassword />} />
        <Route path="cart" element={<Cart />} />
        <Route path="carro" element={<Carro />} />
        <Route path="navbar_admin" element={<NavbarAdmin />} />
        <Route path="editar_producto" element={<EditarProductos />} />
      </Routes>
    </div>
  );
};



export default App;
