import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Create from './components/create/Create';
import FoodDetails from './components/foodDetails/FoodDetails';
import FoodCatalog from './components/foodCatalog/FoodCatalog';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import ProtectedRoute from './components/protect/protectedRoute'
import ScrollToTop from './components/ScrollTo/ScrollToTop';

function App() {
  return (
    <div >
      <Navbar />
      <ScrollToTop />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/create' element={<ProtectedRoute><Create /></ProtectedRoute>} />

        <Route path="/post/:id" element={<FoodDetails />} />
        <Route path="/category/:category" element={<FoodCatalog />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
