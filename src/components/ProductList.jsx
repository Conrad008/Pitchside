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