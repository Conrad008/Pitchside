import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function ProductsSearch({ onSearch }) {
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

    
}