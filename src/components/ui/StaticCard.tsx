import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StaticCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${color} hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div
          className={`p-3 rounded-full ${color.replace("border-l-", "bg-").replace("-500", "-100")} ${color.replace("border-l-", "text-").replace("-500", "-600")}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StaticCard;
