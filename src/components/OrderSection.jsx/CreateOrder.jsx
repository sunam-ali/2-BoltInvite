import { useState } from "react";
import foodItems from "../../data/footItems";

export default function CreateOrder({ onOrder, orderToEdit }) {
  const isEditing = !!orderToEdit;

  const [orderInfo, setOrderInfo] = useState(
    orderToEdit || {
      id: crypto.randomUUID(),
      customerName: "",
      addedItems: [],
      totalAmount: 0,
      isPending: true,
    }
  );

  function handleAddItem(itemName, itemPrice) {
    setOrderInfo((prevInfo) => ({
      ...prevInfo,
      addedItems: [...prevInfo.addedItems, itemName],
      totalAmount: prevInfo.totalAmount + itemPrice,
    }));
  }

  function handleRemoveItem(itemName, itemPrice) {
    let index = orderInfo.addedItems.indexOf(itemName);
    if (orderInfo.addedItems.includes(itemName)) {
      setOrderInfo((prevInfo) => ({
        ...prevInfo,
        addedItems: [
          ...prevInfo.addedItems.slice(0, index),
          ...prevInfo.addedItems.slice(index + 1),
        ],
        totalAmount: prevInfo.totalAmount - itemPrice,
      }));
    }
  }

  function handleNameChange(e) {
    setOrderInfo({
      ...orderInfo,
      customerName: e.target.value,
    });
  }

  function hanldeSubmitOrder(e) {
    e.preventDefault();
    if (orderInfo.addedItems.length > 0) {
      onOrder(orderInfo, isEditing, false);
      setOrderInfo({
        id: crypto.randomUUID(),
        customerName: "",
        addedItems: [],
        totalAmount: 0,
        isPending: true,
      });
    } else {
      alert("Please choose one item first");
    }
  }

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh-130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <form onSubmit={hanldeSubmitOrder}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Customer Name
          </label>
          <input
            required
            type="text"
            value={orderInfo.customerName}
            onChange={handleNameChange}
            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose Items</label>
          <div className="items-container">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400">BDT {item.price}</p>
                  </div>
                </div>
                <div className="flex gap-1.5 justify-center items-center">
                  <span className="ml-0.5 rounded-full text-[15px] text-gray-400">
                    {
                      orderInfo.addedItems.filter(
                        (addedItem) => addedItem === item.name
                      ).length
                    }
                  </span>
                  <button
                    type="button"
                    className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    onClick={() => handleAddItem(item.name, item.price)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 bg-gray-800 hover:bg-cardbg rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    onClick={() => handleRemoveItem(item.name, item.price)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          {isEditing ? "Update Order" : "Place Order"} (BDT{" "}
          {orderInfo.totalAmount})
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => onOrder(null, isEditing, true)}
            className="w-full bg-gray-600 text-white font-medium py-3 rounded-full mt-3 hover:bg-gray-500 transition-all duration-300"
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}
