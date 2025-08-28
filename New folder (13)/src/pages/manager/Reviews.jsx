// src/pages/manager/Reviews.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Ali", rating: 5, comment: "Zinger Burger was amazing! 😋" },
    { id: 2, name: "Sara", rating: 4, comment: "Pizza was good but a bit late." },
  ]);

  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment || newReview.rating === 0) return;

    setReviews([...reviews, { id: Date.now(), ...newReview }]);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-700 via-orange-600 to-orange-500">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar role="Manager" />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-extrabold text-yellow-300 mb-6 drop-shadow-lg">
            ⭐ Customer Reviews
          </h1>

          {/* Add Review Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 rounded-2xl shadow-lg mb-6 max-w-lg"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none"
            />
            <textarea
              placeholder="Write your review..."
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none"
              rows="3"
            />
            <div className="flex items-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-2xl transition ${
                    newReview.rating >= star ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                />
              ))}
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300">
              Submit Review
            </button>
          </form>

          {/* Review List */}
          <div className="space-y-4">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-yellow-50 p-4 rounded-xl shadow-sm border-l-4 border-orange-400"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-red-600">{r.name}</h3>
                  <div className="flex">
                    {[...Array(r.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{r.comment}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
