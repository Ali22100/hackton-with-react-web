// src/pages/ProductPage.jsx
import React from "react";
import Sidebar from "../../components/common/Sidebar.jsx";
import ManagerHeader from "../../components/common/Header.jsx";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const products = [
  { id: 1, name: "Zinger Burger", price: 450, img: "https://www.eatingonadime.com/wp-content/uploads/2024/03/200KB-Zinger-Burger-8-500x375.jpg", gradient: "linear-gradient(135deg, #dc2626, #f87171)" },
  { id: 2, name: "Fries", price: 150, img: "https://cdn.britannica.com/34/206334-050-7637EB66/French-fries.jpg", gradient: "linear-gradient(135deg, #fbbf24, #fde68a)" },
  { id: 3, name: "Pizza", price: 900, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCPk3EPoD5TYlvRyaz70CH9Mol0sz2qEueg&s", gradient: "linear-gradient(135deg, #f97316, #fb923c)" },
  { id: 4, name: "Burger Beef", price: 500, img: "https://img.taste.com.au/4bkjKpXm/taste/2016/11/basic-beef-burger_1980x1320-118412-1.jpg", gradient: "linear-gradient(135deg, #b91c1c, #ef4444)" },
  { id: 5, name: "Roll", price: 350, img: "https://em-cdn.eatmubarak.pk/restaurant_new/285802/285802/dish/16153629851243600507.jpg", gradient: "linear-gradient(135deg, #f59e0b, #fcd34d)" },
  { id: 6, name: "Tikka", price: 400, img: "https://www.thespruceeats.com/thmb/d3dydMavjnQGJh1dsCsPzNkkrB4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tikka-boti-kabobs-333771-Hero_01-ddffd2bce19a42138c26415446022280.jpg", gradient: "linear-gradient(135deg, #059669, #10b981)" },
  { id: 7, name: "Chicken Wings", price: 600, img: "https://www.allrecipes.com/thmb/vho2-TnMVMGEn6saATobWJHGTPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24087-restaurant-style-buffalo-chicken-wings-DDMFS-4x3-861e36c713264f3a9db8ba02d3afbea1.jpg", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)" },
  { id: 8, name: "Cold Drink", price: 120, img: "https://rukminim2.flixcart.com/image/704/844/k687wy80/glass/h/z/j/kf-201-khodalfashions-original-imafgu7mhttcugzk.jpeg?q=90&crop=false", gradient: "linear-gradient(135deg, #1e3a8a, #60a5fa)" },
  { id: 10, name: "Cheese Burger", price: 480, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIOAVJnGZN7H3zv5QVHrx3kUFIxM4thGfRSU9JiU5NCcvMb0SY0v8LL62y8Dv7inSpr8&usqp=CAU" },
];

export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <>
      <ManagerHeader role="User" />

      <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
        <div style={{ minHeight: "100vh" }}>
          <Sidebar role="User" />
        </div>

        <div style={{ flex: 3, padding: "24px", display: "grid", gap: "50px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", background: "linear-gradient(135deg, #dc2626, #f97316)" }}>
          {products.map(product => (
            <div key={product.id} style={{
              background: product.gradient || "linear-gradient(135deg, #2563eb, #3b82f6)",
              borderRadius: "20px",
              padding: "20px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "300px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              transition: "all 0.3s",
              overflow: "hidden",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.07)";
                e.currentTarget.style.boxShadow = "0 15px 45px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
              }}
            >
              <img src={product.img} alt={product.name} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "15px", marginBottom: "12px" }} />
              <h2 style={{ fontSize: "22px", fontWeight: 700, textAlign: "center" }}>{product.name}</h2>
              <p style={{ fontSize: "16px", opacity: 0.9, margin: "6px 0" }}>Rs. {product.price}</p>
              <p style={{ fontSize: "14px", textAlign: "center", opacity: 0.8, marginBottom: "10px" }}>Delicious & fresh, just for you!</p>

              {/* ✅ Navigate with product data */}
              <button
                style={{
                  padding: "10px 24px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #fbbf24, #dc2626)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "all 0.3s",
                }}
                onClick={() => navigate("/order", { state: product })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
