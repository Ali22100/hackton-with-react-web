import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
export const CustomerReviews = () => {

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
        <Sidebar role="Admin" />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-extrabold text-yellow-300 mb-6 drop-shadow-lg">
            ⭐ Customer Reviews
          </h1>

          {/* Add Review Form */}
        

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
    </div>  )
}
