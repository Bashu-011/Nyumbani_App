// Listings.jsx

import React, { useState, useEffect } from 'react';
import './Listings.css';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Replace 'http://localhost:3000' with your JSON Server endpoint
    fetch('http://localhost:3000/listings')
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
      })
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

  const handleFilterChange = (event) => {
    const newFilter = event.target.value.toLowerCase();
    setFilter(newFilter);
    applyFilters(newFilter);
  };

  const applyFilters = (textFilter) => {
    const filteredResults = listings.filter((listing) => {
      const titleMatch = listing.title.toLowerCase().includes(textFilter);
      const descriptionMatch = listing.description.toLowerCase().includes(textFilter);
      
      return titleMatch || descriptionMatch;
    });

    setFilteredListings(filteredResults);
  };

  return (
    <div className="listings-container">
      <h2 className="listings-title">Real Estate Listings</h2>
      <div className="search-bar">
        <label htmlFor="filter">Filter by Keyword or Location:</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="listings-grid">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <div className="listing-details">
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <p>
                <strong>Location:</strong> {listing.location}
              </p>
              <p>
                <strong>Price:</strong> ${listing.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
