import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import ProductsData from './ProductsData';

const ProductPage = () => {
  const {productId} = useParams()
  const Product = ProductsData.find( product => product.id === productId)
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="flex justify-center">
          <div className="w-full sm:w-3/4">
            <div className="border border-gray-300 p-4 rounded-md">
              <img src={Product.image} alt={Product.name} className="w-full h-auto mb-4 rounded-md" />
              <h1 className="text-2xl font-bold mb-2">{Product.name}</h1>
              <p className="text-gray-600 mb-2">Location: {Product.location}</p>
              <p className="text-gray-600 mb-4">Price: {Product.price}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
