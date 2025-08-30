// src/pages/admin/EmployeeList.jsx
import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import { FaUserTie, FaPhoneAlt, FaEnvelope, FaTrash } from "react-icons/fa";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.jsx";

export default function EmployeeList() {
  const [branches, setBranches] = useState([]);
  const [form, setForm] = useState({
    branch: "",
    name: "",
    contact: "",
    email: "",
  });

  // Firebase ref
  const empRef = collection(db, "AdminEmpoly");

  // Fetch employees from Firestore
  async function fetchData() {
    const snapshot = await getDocs(empRef);
    const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    setBranches(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Add employee
  async function addEmployee(e) {
    e.preventDefault();

    if (!form.branch || !form.name || !form.contact || !form.email) return;

    await addDoc(empRef, {
      branch: form.branch,
      employees: [
        {
          name: form.name,
          contact: form.contact,
          email: form.email,
        },
      ],
    });

    setForm({ branch: "", name: "", contact: "", email: "" });
    fetchData();
  }

  // Delete employee doc
  async function deleteEmployee(id) {
    await deleteDoc(doc(db, "AdminEmpoly", id));
    fetchData();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300">
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-extrabold mb-6 text-white drop-shadow-lg">
            👨‍🍳 All Branch Employees
          </h1>

          {/* Input Form */}
          <form
            onSubmit={addEmployee}
            className="bg-white p-6 rounded-2xl shadow-lg mb-8 grid md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Branch Name"
              value={form.branch}
              onChange={(e) => setForm({ ...form, branch: e.target.value })}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Employee Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-orange-600 text-white py-3 rounded-lg shadow-md hover:bg-orange-700 transition"
            >
              ➕ Add Employee
            </button>
          </form>

          {/* Branch List */}
          {branches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-4 border-yellow-400"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-red-600">
                  🍔 {b.branch}
                </h2>
                <button
                  onClick={() => deleteEmployee(b.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash size={20} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {b.employees?.map((emp, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl shadow-md hover:scale-105 transition transform"
                  >
                    <div className="font-semibold text-lg flex items-center gap-2 text-red-700">
                      <FaUserTie /> {emp.name}
                    </div>
                    <div className="text-sm text-gray-700 mt-2 flex items-center gap-2">
                      <FaPhoneAlt className="text-green-600" /> {emp.contact}
                    </div>
                    <div className="text-sm text-gray-700 mt-1 flex items-center gap-2">
                      <FaEnvelope className="text-blue-600" /> {emp.email}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
