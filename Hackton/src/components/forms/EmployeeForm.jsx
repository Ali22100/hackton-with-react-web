// src/components/forms/EmployeeForm.jsx
import React, { useState } from "react";

export default function EmployeeForm({ initial = { name: "", contact: "", email: "" }, onSubmit }) {
  const [form, setForm] = useState(initial);

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", contact: "", email: "" });
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
    >
      <input
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Name"
      />
      <input
        required
        value={form.contact}
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
        className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Contact"
      />
      <input
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Email"
      />
<button
  type="submit"
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm col-span-full transition-all duration-200"
>
  Add Employee
</button>

    </form>
  );
}
