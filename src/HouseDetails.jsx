import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./houseDetails.css";

const HouseDetailComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [redirectToPricing, setRedirectToPricing] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/listings/${id}`)
      .then((response) => response.json())
      .then((data) => setProperty(data))
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );

    fetch(`http://127.0.0.1:5000/reviews?houseId=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Reviews not found");
        }
        return response.json();
      })
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [id]);

  function handleInputChange(event) {
    setNewReview(event.target.value);
  }

  function handleSubmitReview() {
    fetch("http://127.0.0.1:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        houseId: property.id,
        review: newReview,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setReviews([...reviews, data]);
        setNewReview("");
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  }

  function handlePricing() {
    setRedirectToPricing(true);
  }

  if (redirectToPricing) {
    return <Navigate to="/mortgage" />;
  }

  function handleClose() {
    setRedirectToHome(true);
  }

  if (redirectToHome) {
    return <Navigate to="/listings" />;
  }

  return property ? (
    <div className="house-details">
      <div className="details">
        <h2 style={{ textAlign: "center" }}>{property.title}</h2>
        <img src={property.image} alt={property.title} /> <br />
        <div className="all-details">
          <p>
            <b>Price:</b> {property.price}
          </p>
          <p>
            <b>Bedrooms:</b> {property.bedrooms}
          </p>
          <p>
            <b>Location:</b> {property.location} County
          </p>
          <p>
            <b>Status: </b> {property.type}
          </p>
          <p>
            <b>Size: </b> {property.squareFootage} square feet
          </p>
          <p>
            <b>Amenities:</b> {property.propertyFeatures?.join(", ")}
          </p>
          {property.contactInformation ? (
            <p>
              <b>Contact: </b> {property.contactInformation.name},{" "}
              {property.contactInformation.phone},{" "}
              {property.contactInformation.email}
            </p>
          ) : (
            <p>No contact information available.</p>
          )}
        </div>
      </div>
      <div className="reviews-container">
        <h3>Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="reviews">
              <p>{review.review}</p>
            </div>
          ))
        ) : (
          <small>No reviews yet. Be the first to review</small>
        )}
        <textarea
          value={newReview}
          onChange={handleInputChange}
          placeholder="Enter your review..."
        />{" "}
        <br />
        <button onClick={handleSubmitReview}>Submit Review</button> <br />
      </div>
      <div className="pricing-close">
        <button onClick={handlePricing}>Pricing options</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default HouseDetailComponent;