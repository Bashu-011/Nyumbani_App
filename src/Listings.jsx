import React, { useState, useEffect } from "react";
import "./Listings.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
//import logoImage from "./homeImages/Logo White.png";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(9); // Change the number of listings per page here

  useEffect(() => {
    fetch("https://nyumbani-server.onrender.com/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
      })
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  const handleFilterChange = (event) => {
    const newFilter = event.target.value.toLowerCase();
    setFilter(newFilter);
    applyFilters(newFilter);
  };

  const applyFilters = (textFilter) => {
    const filteredResults = listings.filter((listing) => {
      return Object.values(listing).some((value) =>
        String(value).toLowerCase().includes(textFilter)
      );
    });

    setFilteredListings(filteredResults);
  };

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = filteredListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredListings.length / listingsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="listings-container">
      <div>
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
        {currentListings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <div className="listing-details">
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <p>
                <strong>Location:</strong> {listing.location}
              </p>
              <p>
                <strong>city:</strong> {listing.city}
              </p>
              <p>
                <strong>Status:</strong> {listing.type}
              </p>
              <p>
                <strong>Price:</strong> {listing.price}
              </p>
              
              <Link to={`/property/${listing.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination" style={{ margin: "20px" }}>
        <button onClick={prevPage}>Previous</button>
        {Array.from(
          { length: Math.ceil(filteredListings.length / listingsPerPage) },
          (_, index) => (
            <a
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "activePage paginationList" : "paginationList"}
            >
              {index + 1}
            </a>
          )
        )}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Listings;