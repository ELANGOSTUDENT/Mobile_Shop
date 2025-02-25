import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import Dash from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import ProductDetails from './Pages/ProductDetails';
import AddProduct from './Pages/AddProduct';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dash />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default App;
