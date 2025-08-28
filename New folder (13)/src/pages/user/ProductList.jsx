
import React from "react";


const products = [
  { id:1, name:"Zinger Burger", price:450 },
  { id:2, name:"Fries", price:150 }
];

export default function ProductList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid gap-3">
        {products.map(p => (
          <div key={p.id} className="flex items-center justify-between border p-3 rounded">
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-gray-600">Rs. {p.price}</div>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
