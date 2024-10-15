import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search users by name"
                value={searchTerm}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBar;