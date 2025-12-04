import { useState } from "react";

export default function OrderReport({
  orderList,
  onDeliver,
  onDelete,
  onEdit,
}) {
  const [filterOption, setFilterOption] = useState("all");

  const displayedOrderList = orderList.filter((order) => {
    if (filterOption === "all") return true;
    if (filterOption === "pending") return order.isPending;
    if (filterOption === "deliverd") return !order.isPending;
    return true;
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>
        <div className="flex gap-4 items-center mb-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down-wide-narrow-icon lucide-arrow-down-wide-narrow"
          >
            <path d="m3 16 4 4 4-4" />
            <path d="M7 20V4" />
            <path d="M11 4h10" />
            <path d="M11 8h7" />
            <path d="M11 12h4" />
          </svg>
          <select
            className="appearance-none bg-zinc-900! px-3! py-2! accent-orange-600 border-none outline-none rounded-sm!"
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="deliverd">Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {displayedOrderList.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-400">
                    No Order found!
                  </td>
                </tr>
              ) : (
                displayedOrderList.map((order, index) => (
                  <tr className="border-t border-gray-700" key={order.id}>
                    <td className="py-3">{index + 1}</td>
                    <td className="py-3">{order.customerName}</td>
                    <td className="py-3">{order.addedItems.length}</td>
                    <td className="py-3">{order.totalAmount}</td>
                    <td className="py-3">
                      {order.isPending ? (
                        <span className="text-red-500">PENDING</span>
                      ) : (
                        <span className="text-green-500">DELIVERD</span>
                      )}
                    </td>
                    <td className="py-3">
                      <button
                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                        onClick={() => onDelete(order.id)}
                      >
                        Delete
                      </button>
                      {order.isPending && (
                        <>
                          <button
                            className="bg-gray-800 hover:bg-primary text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                            onClick={() => onEdit(order)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                            onClick={() => onDeliver(order.id)}
                          >
                            DELIVER
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
