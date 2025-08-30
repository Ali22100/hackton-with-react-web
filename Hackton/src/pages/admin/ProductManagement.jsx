// src/pages/admin/ProductManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import {
  FaHamburger,
  FaPizzaSlice,
  FaCoffee,
  FaIceCream,
  FaDrumstickBite,
  FaAppleAlt,
  FaHotdog,
  FaLeaf,
  FaCookieBite,
} from "react-icons/fa";
import { GiFrenchFries, GiSodaCan } from "react-icons/gi";

// 10 alag icons map
const iconOptions = {
  burger: <FaHamburger size={60} />,
  fries: <GiFrenchFries size={60} />,
  pizza: <FaPizzaSlice size={60} />,
  coffee: <FaCoffee size={60} />,
  icecream: <FaIceCream size={60} />,
  juice: <GiSodaCan size={60} />,
  chicken: <FaDrumstickBite size={60} />,
  sandwich: <FaHotdog size={60} />,
  salad: <FaLeaf size={60} />,
  donut: <FaCookieBite size={60} />,
};

const cardGradients = [
  "from-purple-700 to-indigo-900",
  "from-orange-600 to-red-800",
  "from-green-600 to-emerald-900",
  "from-blue-700 to-cyan-900",
  "from-pink-600 to-rose-800",
  "from-yellow-600 to-orange-800",
  "from-teal-600 to-green-900",
  "from-gray-700 to-gray-900",
  "from-red-700 to-pink-900",
  "from-indigo-700 to-purple-900",
];

export default function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: "Zinger Burger", price: 450, icon: "burger" },
    { id: 2, name: "Fries", price: 150, icon: "fries" },
  ]);

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", icon: "" });

  function handleAddOrUpdate() {
    if (!form.name || !form.price || !form.icon) return;

    if (editing) {
      setProducts(prev =>
        prev.map(p =>
          p.id === editing.id
            ? { ...p, ...form, price: Number(form.price) }
            : p
        )
      );
      setEditing(null);
    } else {
      setProducts(prev => [
        ...prev,
        { id: Date.now(), ...form, price: Number(form.price) },
      ]);
    }
    setForm({ name: "", price: "", icon: "" });
  }

  function handleEdit(p) {
    setEditing(p);
    setForm({ name: p.name, price: p.price, icon: p.icon });
  }

  function handleDelete(id) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-6 min-h-screen bg-gradient-to-br from-orange-800 via-red-400 to-yellow-600">
          <h1 className="text-2xl font-bold mb-6">🍔 Product Management</h1>

          {/* form */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              {editing ? "✏️ Edit Product" : "➕ Add New Product"}
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Product Name"
                className="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 outline-none w-full md:w-1/4"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                className="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 outline-none w-full md:w-1/4"
                value={form.price}
                onChange={e => setForm({ ...form, price: e.target.value })}
              />
              <select
                className="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 outline-none w-full md:w-1/4"
                value={form.icon}
                onChange={e => setForm({ ...form, icon: e.target.value })}
              >
                <option value="">🍴 Choose Icon</option>
                <option value="burger">🍔 Burger</option>
                <option value="fries">🍟 Fries</option>
                <option value="pizza">🍕 Pizza</option>
                <option value="coffee">☕ Coffee</option>
                <option value="icecream">🍨 Ice Cream</option>
                <option value="juice">🥤 Juice</option>
                <option value="chicken">🍗 Chicken</option>
                <option value="sandwich">🌭 Sandwich</option>
                <option value="salad">🥗 Salad</option>
                <option value="donut">🍩 Donut</option>
              </select>
              <button
                onClick={handleAddOrUpdate}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                {editing ? "Update" : "Add"}
              </button>
            </div>
          </div>

          {/* product list */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={p.id}
                className={`rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-between bg-gradient-to-br ${cardGradients[i % cardGradients.length]}`}
              >
                <div className="mb-4">{iconOptions[p.icon]}</div>
                <div className="text-center flex-1">
                  <h3 className="font-bold text-xl">{p.name}</h3>
                  <p className="text-sm">Rs. {p.price}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-3 py-1 bg-white/20 rounded hover:bg-white/30"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => alert(`${p.name} added to cart!`)}
                    className="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
