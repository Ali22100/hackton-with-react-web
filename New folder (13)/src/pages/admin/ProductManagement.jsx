// src/pages/admin/ProductManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import ProductForm from "../../components/forms/ProductForm.jsx";

/* static products */
const initialProducts = [
  { id: 1, name: "Zinger Burger", price: 450 },
  { id: 2, name: "Fries", price: 150 }
];

export default function ProductManagement() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);

  function addProduct(p) {
    setProducts(prev => [...prev, { id: Date.now(), ...p }]);
  }

  function updateProduct(id, p) {
    setProducts(prev => prev.map(x => x.id === id ? { ...x, ...p } : x));
  }

  function deleteProduct(id) {
    setProducts(prev => prev.filter(x => x.id !== id));
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-semibold mb-4">Product Management</h1>
          <div className="mb-6">
            <ProductForm initial={editing || undefined} onSubmit={(payload) => {
              if (editing) { updateProduct(editing.id, payload); setEditing(null); }
              else addProduct(payload);
            }} />
          </div>
          <div>
            {products.map(p => (
              <div key={p.id} className="flex items-center justify-between border p-3 rounded mb-2">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-gray-600">Rs. {p.price}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>setEditing(p)} className="px-3 py-1 border rounded">Edit</button>
                  <button onClick={()=>deleteProduct(p.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
