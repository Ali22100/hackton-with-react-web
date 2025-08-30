// src/components/forms/OrderForm.jsx
import React, { useState } from "react";

export default function OrderForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", contact: "", email: "", product: "", quantity: 1 });

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, quantity: Number(form.quantity) });
    setForm({ name: "", contact: "", email: "", product: "", quantity: 1 });
  };

    const submitOrder = (payload) => {

    alert("Order placed (demo): " + JSON.stringify(payload));
  };


  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "24px",
      background: "linear-gradient(135deg, #dc2626, #f97316)", // FastFood theme background
      fontFamily: "'Poppins', sans-serif"
    }}>
      <form onSubmit={submit} style={{
        background: "#fff",
        padding: "32px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        maxWidth: "450px"
      }}>
        <h2 style={{
          fontSize: "24px",
          fontWeight: 700,
          textAlign: "center",
          color: "#dc2626",
          marginBottom: "16px",
          textShadow: "1px 1px 0 #fbbf24"
        }}>
          🍔 Place Your Order
        </h2>

        <input 
          required 
          value={form.name} 
          onChange={(e)=>setForm({...form,name:e.target.value})} 
          placeholder="Name"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #fbbf24",
            outline: "none",
            fontSize: "16px",
            transition: "all 0.3s"
          }}
          onFocus={e=>e.currentTarget.style.borderColor="#dc2626"}
          onBlur={e=>e.currentTarget.style.borderColor="#fbbf24"}
        />

        <input 
          required 
          value={form.contact} 
          onChange={(e)=>setForm({...form,contact:e.target.value})} 
          placeholder="Contact"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #fbbf24",
            outline: "none",
            fontSize: "16px",
            transition: "all 0.3s"
          }}
          onFocus={e=>e.currentTarget.style.borderColor="#dc2626"}
          onBlur={e=>e.currentTarget.style.borderColor="#fbbf24"}
        />

        <input 
          required 
          value={form.email} 
          onChange={(e)=>setForm({...form,email:e.target.value})} 
          placeholder="Email"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #fbbf24",
            outline: "none",
            fontSize: "16px",
            transition: "all 0.3s"
          }}
          onFocus={e=>e.currentTarget.style.borderColor="#dc2626"}
          onBlur={e=>e.currentTarget.style.borderColor="#fbbf24"}
        />

        <input 
          required 
          value={form.product} 
          onChange={(e)=>setForm({...form,product:e.target.value})} 
          placeholder="Product"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #fbbf24",
            outline: "none",
            fontSize: "16px",
            transition: "all 0.3s"
          }}
          onFocus={e=>e.currentTarget.style.borderColor="#dc2626"}
          onBlur={e=>e.currentTarget.style.borderColor="#fbbf24"}
        />

        <input 
          required 
          type="number" 
          min="1" 
          value={form.quantity} 
          onChange={(e)=>setForm({...form,quantity:e.target.value})} 
          placeholder="Quantity"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #fbbf24",
            outline: "none",
            fontSize: "16px",
            transition: "all 0.3s"
          }}
          onFocus={e=>e.currentTarget.style.borderColor="#dc2626"}
          onBlur={e=>e.currentTarget.style.borderColor="#fbbf24"}
        />

        <button 
        onSubmit={submitOrder} 
          type="submit"
          style={{
            padding: "14px",
            borderRadius: "12px",
            fontWeight: 700,
            background: "linear-gradient(135deg, #dc2626, #f97316)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "all 0.3s",
          }}
          onMouseEnter={e=>e.currentTarget.style.transform="scale(1.05)"}
          onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
        >
          🍔 Place Order
        </button>
      </form>
    </div>



  );
}
