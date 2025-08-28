// src/components/forms/OrderForm.jsx
import React, { useState } from "react";

export default function OrderForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", contact: "", email: "", product: "", quantity: 1 });
  const submit = (e) => { e.preventDefault(); onSubmit({ ...form, quantity: Number(form.quantity) }); setForm({ name: "", contact: "", email: "", product: "", quantity: 1 }); };
  return (
    <form onSubmit={submit} className="grid gap-2 max-w-md">
      <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="border p-2 rounded" placeholder="Name" />
      <input required value={form.contact} onChange={(e)=>setForm({...form,contact:e.target.value})} className="border p-2 rounded" placeholder="Contact" />
      <input required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="border p-2 rounded" placeholder="Email" />
      <input required value={form.product} onChange={(e)=>setForm({...form,product:e.target.value})} className="border p-2 rounded" placeholder="Product" />
      <input required type="number" min="1" value={form.quantity} onChange={(e)=>setForm({...form,quantity:e.target.value})} className="border p-2 rounded" placeholder="Quantity" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Place Order</button>
    </form>
  );
}
