import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import ManagerHeader from "../../components/common/Header.jsx";

export default function ReviewPage() {
  const [productName, setProductName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // ✅ Load all reviews from Firestore
  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "ratingOrder"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // ✅ Submit Review
  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "ratingOrder"), {
        productName,
        review,
        rating,
        createdAt: new Date(),
      });
      alert("✅ Review submitted successfully!");
      setProductName("");
      setReview("");
      setRating(0);
      fetchReviews(); // reload after submit
    } catch (err) {
      alert("❌ Error submitting review: " + err.message);
    }
  };

  return (
    <>
      <ManagerHeader role="User" />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f97316, #dc2626)",
        }}
      >
        <Sidebar role="User" />
        <div style={{ flexGrow: 1, padding: "32px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
             Submit Your Review
          </h1>

          {/* Form */}
          <form
            onSubmit={submitReview}
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              background: "#fff",
              padding: "24px",
              borderRadius: "14px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            }}
          >
            {/* Product Name */}
            <label style={{ display: "block", fontWeight: "600", marginBottom: "6px" }}>
               Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              placeholder="Enter product name..."
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "16px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />

            {/* Star Rating */}
            <label style={{ display: "block", fontWeight: "600", marginBottom: "6px" }}>
               Rating
            </label>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    fontSize: "28px",
                    cursor: "pointer",
                    color: star <= rating ? "#facc15" : "#d1d5db",
                    transition: "0.3s",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <label style={{ display: "block", fontWeight: "600", marginBottom: "6px" }}>
              📝 Write Review
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
              placeholder="Write your experience..."
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#15803d")}
              onMouseOut={(e) => (e.target.style.background = "#16a34a")}
            >
               Submit Review
            </button>
          </form>

          {/* Reviews List */}
          <h2
            style={{
              marginTop: "40px",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
             Recent Reviews
          </h2>

          <div
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {reviews.length === 0 ? (
              <p style={{ color: "#fff", textAlign: "center", gridColumn: "1/-1" }}>
                No reviews yet.
              </p>
            ) : (
              reviews.map((r) => (
                <div
                  key={r.id}
                  style={{
                    background: "#fff",
                    padding: "16px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
                    {r.productName}
                  </h3>
                  <div style={{ marginBottom: "8px" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        style={{
                          color: star <= r.rating ? "#facc15" : "#d1d5db",
                          fontSize: "20px",
                        }}
                      >
                        
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: "14px", color: "#333" }}>{r.review}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
