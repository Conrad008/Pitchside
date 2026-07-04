import { useState, useEffect } from 'react';
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

  if (error) {
    return (
      <div className="mx-auto max-w-md my-12 p-6 border border-red-200 bg-red-50 rounded-xl text-center">
        <h2 className="text-lg font-bold text-red-700">Fixture Postponed</h2>
        <p className="text-sm text-red-600 mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className='bg-zinc-50 min-h-screen flex flex-col justify-between'>
        <div className='container mx-auto px-4 py-8 max-w-7xl flex-1'>
            <div className='mb-8 text-center sm:text-left'>
                <h2 className="text-3xl font-black tracking-tight text-zinc-900 uppercase">
                    Matchday <span className="text-emerald-600">Gear</span>
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                    Browse our premium collection of authentic football jerseys and boots.
                </p>

            </div>

            <div className='mb-6 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm'>
                <ProductsSearch onSearch={handleSearch} />
                <p className="text-xs text-zinc-500 mt-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Showing results for:{' '}
                    <strong className="text-zinc-800 font-semibold">
                        {searchTerm ? `"${searchTerm}"` : 'all items'}
                    </strong>
                </p>
            </div>

        </div>

    </div>
  )
} 