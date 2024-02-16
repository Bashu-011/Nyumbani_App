// Listings.jsx

import React, { useState, useEffect } from 'react';
import './Listings.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import logoImage from "./homeImages/Logo White.png";

// declaring the variables for the filter search.
const Listings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filter, setFilter] = useState('');

  // fetching the listings from db.json
  useEffect(() => {
   
    fetch('http://localhost:3000/listings')
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
      })
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

// handles the filter function 
  const handleFilterChange = (event) => {
    const newFilter = event.target.value.toLowerCase();
    setFilter(newFilter);
    applyFilters(newFilter);
  };

  const applyFilters = (textFilter) => {
    const filteredResults = listings.filter((listing) => {
      // Check if the filter text matches any property of the listing
      return Object.values(listing).some((value) =>
        String(value).toLowerCase().includes(textFilter)
      );
    });

    setFilteredListings(filteredResults);
  };

  //  displays the listing in the container.
  return (
    <div className="listings-container">
       <div style={{ position: 'absolute', top: '-160px', left: '-130px', right: 0, padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
      <img src={logoImage} alt="Logo White" width="400px" />
      <NavBar />
      </div>
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
                 <strong>Status:</strong> {listing.type}
              </p>
              <p>
                <strong>Price:</strong> {listing.price}
              </p> 
              {/* links to specific house details */}
              <Link to={`/property/${listing.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;