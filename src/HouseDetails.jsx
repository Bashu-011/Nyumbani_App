import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./houseDetails.css"

const HouseDetailComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const { id } = useParams();
  const [property, setProperty] = useState(null);

  //const history = useHistory()

  const [redirectToHome, setRedirectToHome] = useState(false);
  const [redirectToPricing, setRedirectToPricing] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/listings/${id}`)
      .then((response) => response.json())
      .then((data) => setProperty(data))
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );

    fetch(`http://localhost:3000/reviews?houseId=${id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [id]);

  function handleInputChange(event) {
    setNewReview(event.target.value);
  }


  function handleSubmitReview() {
    fetch("http://localhost:3000/reviews", {
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
        setNewReview(""); // Clear the input field after submission
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
        <h2>{property.title}</h2>
        <img src={property.image} alt={property.title} /> <br />
        <div className="all-details">
          {/* <p>{property.description}</p> */}
          <h5>Price: {property.price}</h5>
          <h5>Bedrooms: {property.bedrooms}</h5>
          <h5>Location: {property.location} County</h5>
          <h5>Status: {property.status}</h5>
          <h5>Contact: {property.contact}</h5>
        </div>
      </div>
      <div className="reviews-container">
        {reviews.length > 0 ? (
          <h3>Reviews</h3>
        ) : (
          <small>No reviews yet. Be the first to review</small>
        )}
        {reviews.map((review) => (
          <div key={review.id} className="reviews">
            <p>{review.review}</p>
          </div>
        ))}
        <textarea
          value={newReview}
          onChange={handleInputChange}
          placeholder="Enter your review..."
        />{" "}
        <br />
        <button onClick={handleSubmitReview}>Submit Review</button> <br />
      </div>
      <div className="pricing-close">
        <button onClick={handlePricing}>Pricing options</button> <br />
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default HouseDetailComponent;