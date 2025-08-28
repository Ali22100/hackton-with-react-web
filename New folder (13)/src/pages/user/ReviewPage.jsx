
import React from "react";
import ReviewForm from "../../components/forms/ReviewForm.jsx";

export default function ReviewPage() {
  const submitReview = (payload) => {
    alert("Review submitted (demo): " + JSON.stringify(payload));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Submit Review</h1>
      <ReviewForm onSubmit={submitReview} />
    </div>
  );
}
