import React from 'react';
import Navbar from '../components/Navbar';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import ProductsData from './ProductsData';

const AllProducts = () => {
  const products = ProductsData.map(product => {
    return (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-64 h-60 mb-2 rounded-md" 

            />
            <h2 className="text-lg font-bold mb-1">{product.name}</h2>
            <p className="text-gray-600 mb-1">Location: {product.location}</p>
            <p className="text-gray-600">Price: {product.price}</p>
          </Link>
        </div>
    );
    });
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="flex justify-center"> 
          <div className="w-full sm:w-3/4"> 
            <h1 className="text-3xl font-bold mb-3">All Products</h1>
            <p className="text-gray-600 mb-5">Browse through our selection of high-quality products for every corner of your home.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
            {products}
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 px-8 flex justify-between items-center mt-8">
        <p className="h-8 flex items-center font-bold text-2xl ml-4">Logo</p> 
        <div className="flex space-x-4 text-black items-center">
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
          <FaYoutube size={20} />
          <FaLinkedin size={20} />
        </div>
      </footer>
      <hr className="my-8" />
      <div className="text-center text-gray-600 py-4">
        <p>© 2023 Relume. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p> {/* Combined into one line */}
      </div>
    </div>
  );
};

export default AllProducts;
