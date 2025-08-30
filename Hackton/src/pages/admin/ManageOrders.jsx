// src/pages/MyOrdersPage.jsx
import React, { useContext } from "react";
import { OrderContext } from "../../context/OrderContext.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import ManagerHeader from "../../components/common/Header.jsx";
import products from "../../data/products.jsx";

import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.jsx";
export const AdminManageOrders = () => {
      const { orders, setOrders } = useContext(OrderContext);
    
      // ✅ Mark order as Received
      const handleReceived = async (id) => {
        try {
          await updateDoc(doc(db, "orders", id), { status: "Received" });
          setOrders((prev) =>
            prev.map((o) => (o.id === id ? { ...o, status: "Received" } : o))
          );
        } catch (err) {
          console.error("Error updating order:", err);
        }
      };


  return (
    <>
      <ManagerHeader role="Admin" />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f97316, #dc2626)",
          color: "#111",
        }}
      >
        <Sidebar role="Admin" />

        <div style={{ flexGrow: 1, padding: "24px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            🍔 My Orders
          </h1>

          {orders.length === 0 ? (
            <p style={{ color: "#fff", fontSize: "16px" }}>
              You haven’t placed any orders yet.
            </p>
          ) : (
            orders.map((order) => {
              // 🔎 products file se matching product nikalo
              const productData = products.find(
                (p) => p.name === order.product
              );

              return (
                <div
                  key={order.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#fff",
                    padding: "16px",
                    borderRadius: "12px",
                    marginBottom: "15px",
                    boxShadow: "0 4px 12px rgba(37,99,235,0.3)", // Blue shadow
                    border: "1px solid #3b82f6",
                  }}
                >
                  {/* Left: Product Image */}
                  <img
                    src={productData?.img}
                    alt={order.product}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Middle: Info */}
                  <div style={{ flex: 1, marginLeft: "20px" }}>
                    <h3 style={{ fontSize: "20px", margin: 0 }}>
                      {order.product}
                    </h3>
                    <p style={{ margin: "4px 0", color: "#2563eb" }}>
                      Customer: {order.customer}
                    </p>
                    <p style={{ margin: "4px 0" }}>Price: Rs. {order.total}</p>
                    <p
                      style={{
                        margin: "4px 0",
                        fontWeight: "bold",
                        color:
                          order.status === "Pending"
                            ? "#f59e0b"
                            : order.status === "Received"
                            ? "#22c55e"
                            : "#ef4444",
                      }}
                    >
                      Status: {order.status}
                    </p>
                  </div>

                  {/* Right: Buttons */}
                  <div style={{ display: "flex", gap: "10px" }}>
                    {order.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleReceived(order.id)}
                          style={{
                            background: "#22c55e",
                            border: "none",
                            padding: "8px 14px",
                            borderRadius: "8px",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "0.3s",
                          }}
                        >
                          ✅ Received
                        </button>
                        <button
                          onClick={() => handleCancel(order.id)}
                          style={{
                            background: "#ef4444",
                            border: "none",
                            padding: "8px 14px",
                            borderRadius: "8px",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "0.3s",
                          }}
                        >
                          ❌ Cancel
                        </button>
                      </>
                    )}
                    {order.status === "Received" && (
                      <span
                        style={{
                          background: "#16a34a",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        ✅ Completed
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>  )
}
