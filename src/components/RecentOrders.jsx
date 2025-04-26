import React from 'react';

const orders = [
  { product: "MacBook Pro 13''", price: "$2399.00", category: "Laptop", variants: "2 Variants", status: "Delivered" },
  { product: "Apple Watch Ultra", price: "$879.00", category: "Watch", variants: "1 Variant", status: "Pending" },
  { product: "iPhone 15 Pro Max", price: "$1869.00", category: "SmartPhone", variants: "2 Variants", status: "Delivered" },
  { product: "iPad Pro 3rd Gen", price: "$1699.00", category: "Electronics", variants: "2 Variants", status: "Canceled" },
  { product: "AirPods Pro 2nd Gen", price: "$240.00", category: "Accessories", variants: "1 Variant", status: "Delivered" },
];

const OrderStatusBadge = ({ status }) => {
  const classes = {
    Delivered: "bg-green-200 text-green-800",
    Pending: "bg-yellow-200 text-yellow-800",
    Canceled: "bg-red-200 text-red-800",
  };
  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${classes[status]}`}>
      {status}
    </span>
  );
};

const RecentOrders = () => {
  return (
    <div className="flex-1 container mx-auto p-5 bg-white dark:bg-slate-800  dark:text-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <div>
          <button className="px-4 py-2 text-sm font-semibold  rounded-md hover:bg-gray-100">Filter</button>
          <button className="px-4 py-2 ml-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">See all</button>
        </div>
      </div>
      <table className="min-w-full ">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Products</th>
            <th className="px-4 py-2 text-left text-gray-600">Category</th>
            <th className="px-4 py-2 text-left text-gray-600">Price</th>
            <th className="px-4 py-2 text-left text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{order.product} <span className="text-gray-500 text-sm">{order.variants}</span></td>
              <td className="px-4 py-2">{order.category}</td>
              <td className="px-4 py-2">{order.price}</td>
              <td className="px-4 py-2">
                <OrderStatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;