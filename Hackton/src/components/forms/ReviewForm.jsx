// src/components/forms/ReviewForm.jsx
import React, { useState } from "react";

export default function ReviewForm({ onSubmit }) {
  const [form, setForm] = useState({ branchId: "", user: "", review: "" });
  const submit = (e) => { e.preventDefault(); onSubmit(form); setForm({ branchId: "", user: "", review: "" }); };
  return (
    <form onSubmit={submit} className="grid gap-2 max-w-md">
      <input required value={form.branchId} onChange={(e)=>setForm({...form,branchId:e.target.value})} className="border p-2 rounded" placeholder="Branch ID" />
      <input required value={form.user} onChange={(e)=>setForm({...form,user:e.target.value})} className="border p-2 rounded" placeholder="Your Name" />
      <textarea required value={form.review} onChange={(e)=>setForm({...form,review:e.target.value})} className="border p-2 rounded" placeholder="Review" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Submit Review</button>
    </form>
  );
}
