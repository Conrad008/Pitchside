import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function ProductSearch({ onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const nextValue = event.target.value;
        setInputValue(nextValue);
        onSearch(nextValue);
    };

    const handleClearSearch = () => {
        setInputValue('');
        onSearch('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(inputValue);
    };

    return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="relative flex items-center w-full">
        <Search className="absolute left-3.5 h-4 w-4 text-zinc-400 pointer-events-none" />
        
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for match jerseys or boots..."
          className="w-full pl-10 pr-10 py-5 bg-zinc-50 border-zinc-200 text-zinc-900 focus-visible:ring-emerald-600 rounded-lg text-sm placeholder:text-zinc-400"
        />

        {inputValue && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClearSearch}
            className="absolute right-2 h-7 w-7 rounded-md text-zinc-400 hover:text-zinc-600 hover:bg-zinc-200/50"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search query</span>
          </Button>
        )}
      </div>
    </form>
  );
}

export default ProductSearch