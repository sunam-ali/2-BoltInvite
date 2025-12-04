import { useState } from "react";

import CreateOrder from "./CreateOrder";
import OrderReport from "./OrderReport";
import OrderSummary from "./OrderSummary";

export default function OrderSection() {
  const [orderList, setOrderList] = useState([]);
  const [orderToEdit, setOrderToEdit] = useState(null);

  function handleOrder(newOrder, isEditing, isCancelEditing) {
    if (isCancelEditing) {
      setOrderToEdit(null);
      return;
    }

    if (isEditing && newOrder) {
      // update existing
      setOrderList((prev) =>
        prev.map((order) => (order.id === newOrder.id ? newOrder : order))
      );
      setOrderToEdit(null);
      return;
    }

    // create new order
    if (newOrder) {
      setOrderList((prev) => [...prev, newOrder]);
      setOrderToEdit(null);
    }
  }

  function handleDeliverd(orderId) {
    setOrderList((prev) =>
      prev.map((item) =>
        item.id === orderId ? { ...item, isPending: false } : item
      )
    );
  }
  function handleEdit(order) {
    setOrderToEdit(order);
  }
  function handleDelete(orderId) {
    setOrderList((prev) => prev.filter((item) => item.id !== orderId));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 grow">
      <CreateOrder
        onOrder={handleOrder}
        orderToEdit={orderToEdit}
        key={orderToEdit ? orderToEdit.id : "new"}
      />
      <div className="md:col-span-2 h-[calc(100vh-130px)]">
        <OrderSummary orderList={orderList} />
        <OrderReport
          orderList={orderList}
          onEdit={handleEdit}
          onDeliver={handleDeliverd}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
