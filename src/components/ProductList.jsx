import React, { useState, useEffect } from 'react';
import ProductsSearch from './productsSearch';
import ProductCard from './productCard';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchInputValue) => {
    setSearchTerm(searchInputValue);
  };

  useEffect(() => {
    fetch('/products/products.json')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Failed to load the PitchSide catalog');
        }
        return resp.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <div className="h-12 w-12 rounded-full border-4 border-emerald-100 border-t-emerald-600 animate-spin" />
        <h2 className="text-xl font-semibold text-emerald-800 animate-pulse">Lacing up boots, please wait...</h2>
      </div>
    );
  }