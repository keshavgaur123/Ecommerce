// Dashboard.jsx

import React from "react";
const Dashboard = () => {
    console.log("Dasboard is calling ");
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl">Product Overview</h2>
          <p>Manage your products here...</p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="text-xl">Orders</h2>
          <p>Track and manage customer orders...</p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="text-xl">Analytics</h2>
          <p>View analytics...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

