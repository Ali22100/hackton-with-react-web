// src/components/forms/ProductForm.jsx
import React, { useState } from "react";

export default function ProductForm({ initial = { name: "", price: "" }, onSubmit }) {
  const [form, setForm] = useState(initial);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, price: Number(form.price) });
    setForm({ name: "", price: "" });
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="border p-2 rounded" placeholder="Name" />
      <input required value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})} className="border p-2 rounded" placeholder="Price" />
      <button className="bg-blue-600 text-white px-3 rounded">Save</button>
    </form>
  );
}
