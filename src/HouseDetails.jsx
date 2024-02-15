import React, { useState, useEffect } from "react";
//import {useHistory} from "react-router-dom"


//selectedHouse & onClose is a prop from Gideon's component
function HouseDetailComponent({ selectedHouse, onClose }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
 // const history = useHistory();

  useEffect(() => {
    if (selectedHouse) {
      fetch(`http://localhost:3000/reviews?houseId=${selectedHouse.id}`)
        .then((resp) => resp.json())
        .then((data) => setReviews(data))
        .catch((error) => console.error("Error fetching reviews:", error));
    }
  }, [selectedHouse]);

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
        houseId: selectedHouse.id,
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

//   //function to handle page close
//   function handleClose() {
//     setSelectedHouse(null);
//   }

  function handlePricing(){
    // Redirect to pricing options page
    history.push("/pricing-options");
  }

  return selectedHouse ? (
    <div className="house-details">
      <div className="details">
        <h2>{selectedHouse.title}</h2>
        <img src={selectedHouse.image} alt={selectedHouse.title} /> <br />
        <p>{selectedHouse.description}</p>
        <p>Bedrooms: {selectedHouse.bedrooms}</p>
        <p>Status: {selectedHouse.status}</p>
        <p>Contact: {selectedHouse.contact}</p>
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
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
}

export default HouseDetailComponent;
