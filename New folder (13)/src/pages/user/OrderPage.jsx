
import React from "react";
import OrderForm from "../../components/forms/OrderForm.jsx";

export default function OrderPage() {
  const submitOrder = (payload) => {

    alert("Order placed (demo): " + JSON.stringify(payload));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Place Order</h1>
      <OrderForm onSubmit={submitOrder} />
    </div>
  );
}
