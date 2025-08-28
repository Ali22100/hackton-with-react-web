import React, { useState } from "react";

export default function BranchForm({ initial = { name: "", location: "" }, onSubmit }) {
  const [form, setForm] = useState(initial);

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", location: "" });
  };

  return (
    <form 
      onSubmit={submit} 
      className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-center max-w-xl mx-auto"
    >
      <input 
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="flex-1 border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        placeholder="Branch Name"
      />
      <input 
        required
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="flex-1 border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        placeholder="Location"
      />
      <button 
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
      >
        Add Branch
      </button>
    </form>
  );
}
