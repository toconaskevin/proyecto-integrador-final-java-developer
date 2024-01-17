import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value);
        }
    };

    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Buscar..." onKeyDown={handleSearch} />
            <button type="submit" className="search-button" onClick={() => onSearch(document.querySelector('.search-input').value)}>Buscar</button>
        </div>
    );
};

export default SearchBar;