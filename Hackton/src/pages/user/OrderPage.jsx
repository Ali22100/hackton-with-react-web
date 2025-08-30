// src/pages/OrderPage.jsx
import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar.jsx";
import ManagerHeader from "../../components/common/Header.jsx";
import products from "../../data/products.jsx";
import { OrderContext } from "../../context/OrderContext.jsx";

// ✅ Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.jsx";

export default function OrderPage() {
  const location = useLocation();
  const selectedProduct = location.state;
  const { addOrder } = useContext(OrderContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    productName: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Case-insensitive product match
    const found = products.find(
      (p) =>
        p.name.trim().toLowerCase() ===
        form.productName.trim().toLowerCase()
    );

    if (found) {
      const newOrder = {
        id: "ORD-" + Date.now(),
        customer: form.name,
        phone: form.phone,
        address: form.address,
        product: found.name, // ✅ Always correct case from products
        total: found.price,
        status: "Preparing",
        date: new Date().toLocaleDateString(),
      };

      try {
        // ✅ Save to Context (local state)
        addOrder(newOrder);

        // ✅ Save to Firestore
        const docRef = await addDoc(collection(db, "userOrders"), newOrder);

        console.log("✅ Saved Order:", { id: docRef.id, ...newOrder });

        setMessage("✅ Order successfully placed! Please wait 40 minutes.");
        setForm({ name: "", phone: "", address: "", productName: "" }); // clear form
      } catch (error) {
        console.error("Firestore Error:", error);
        setMessage("❌ Failed to place order. Try again!");
      }
    } else {
      setMessage("❌ Product not available.");
    }
  };

  return (
    <>
      <ManagerHeader role="User" />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          color: "#1e293b",
        }}
      >
        <Sidebar role="User" />

        <div style={{ flex: 1, padding: "40px" }}>
          {selectedProduct && (
            <div
              style={{
                marginBottom: "25px",
                padding: "20px",
                background: "#fff7ed",
                border: "2px dashed #f97316",
                borderRadius: "12px",
              }}
            >
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                style={{
                  width: "200px",
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
              />
              <h2 style={{ color: "#dc2626" }}>{selectedProduct.name}</h2>
              <p style={{ fontWeight: "bold" }}>
                Price: Rs. {selectedProduct.price}
              </p>
            </div>
          )}

          {/* ✅ Order Form */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "400px",
                background: "#fff",
                padding: "30px",
                borderRadius: "18px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                animation: "fadeInScale 0.8s ease",
              }}
            >
              <h1
                style={{
                  marginBottom: "15px",
                  fontSize: "1.8rem",
                  textAlign: "center",
                  color: "#dc2626",
                  fontWeight: "bold",
                  textShadow: "1px 1px #fca5a5",
                }}
              >
                🍔 Place Your Order
              </h1>

              {["name", "phone", "address", "productName"].map((field, i) =>
                field === "address" ? (
                  <textarea
                    key={i}
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Delivery Address"
                    required
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      border: "2px solid #e5e7eb",
                      outline: "none",
                      fontSize: "1rem",
                      transition: "0.3s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "2px solid #dc2626")
                    }
                    onBlur={(e) =>
                      (e.target.style.border = "2px solid #f97316")
                    }
                  />
                ) : (
                  <input
                    key={i}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    type="text"
                    placeholder={
                      field === "name"
                        ? "Full Name"
                        : field === "phone"
                        ? "Phone Number"
                        : "Product Name"
                    }
                    required
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      border: "2px solid #e5e7eb",
                      outline: "none",
                      fontSize: "1rem",
                      transition: "0.3s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "2px solid #dc2626")
                    }
                    onBlur={(e) =>
                      (e.target.style.border = "2px solid #f97316")
                    }
                  />
                )
              )}

              <button
                type="submit"
                style={{
                  padding: "14px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #f97316, #dc2626)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
              >
                ✅ Confirm Order
              </button>

              {message && (
                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: 600,
                    textAlign: "center",
                    color: message.includes("✅") ? "green" : "red",
                  }}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Page Background */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #f97316, #dc2626);
            font-family: Arial, sans-serif;
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
}
