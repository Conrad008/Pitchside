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
  }