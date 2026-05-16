import React from "react";

const Card = ({ title, description, icon, actionText }) => {
  return (
    <div className="group border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-200 bg-white">
      <div className="flex items-center justify-between mb-3">
        <div className="text-2xl">{icon}</div>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full group-hover:bg-blue-100">
          Module
        </span>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 transition">
        {actionText} →
      </button>
    </div>
  );
};

const Dashboard = () => {
  console.log("Dashboard is calling");

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900">
        Admin Dashboard
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon="📦"
          title="Product Overview"
          description="Manage, add, edit and organize all your products in one place."
          actionText="Manage Products"
        />

        <Card
          icon="🛒"
          title="Orders"
          description="Track customer orders, update status, and manage deliveries."
          actionText="View Orders"
        />

        <Card
          icon="📊"
          title="Analytics"
          description="Monitor sales performance, revenue trends, and insights."
          actionText="View Analytics"
        />
      </div>
    </div>
  );
};

export default Dashboard;