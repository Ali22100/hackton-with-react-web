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
      className="bg-gradient-to-br from-yellow-100 to-orange-100 border-4 border-yellow-400 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 items-center max-w-2xl mx-auto"
    >
      <input
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="flex-1 border-2 border-orange-400 p-3 rounded-xl bg-white/90 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-400 transition-all text-lg"
        placeholder="🍔 Branch Name"
      />
      <input
        required
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="flex-1 border-2 border-orange-400 p-3 rounded-xl bg-white/90 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-400 transition-all text-lg"
        placeholder="📍 Location"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300"
      >
        ➕ Add Branch
      </button>
    </form>
  );
}
