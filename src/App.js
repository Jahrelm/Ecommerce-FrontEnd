import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductPage from './components/ProductPage';
import AllProducts from './components/AllProducts';
import LivingRoom from './components/LivingRoom';


function App() {
  return (
    <div className="App"> 
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<LivingRoom />} />
          <Route path="/products" element={<AllProducts/>} />
          <Route path="/products/:productId" element={<ProductPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
