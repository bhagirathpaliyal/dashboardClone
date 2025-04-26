import React from 'react';
import { Users, Package, MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function DashboardStats() {
 
  const monthlyData = [
    { month: 'Jan', sales: 150 },
    { month: 'Feb', sales: 370 },
    { month: 'Mar', sales: 180 },
    { month: 'Apr', sales: 280 },
    { month: 'May', sales: 170 },
    { month: 'Jun', sales: 180 },
    { month: 'Jul', sales: 270 },
    { month: 'Aug', sales: 90 },
    { month: 'Sep', sales: 200 },
    { month: 'Oct', sales: 370 },
    { month: 'Nov', sales: 260 },
    { month: 'Dec', sales: 100 }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 flex-1">

      <div className="rounded-sm bg-white p-6 shadow-default  dark:bg-slate-800">
        <div className="flex items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
            <Users size={24} className="text-slate-600 dark:text-white" />
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-gray-600 dark:text-gray-400">Customers</h4>
          <div className="flex items-end justify-between mt-2">
            <h2 className="text-4xl font-bold text-black dark:text-white">3,782</h2>
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-600">
              <TrendingUp size={16} className="mr-1" />
              11.01%
            </span>
          </div>
        </div>
      </div>

      
      <div className="rounded-sm  bg-white p-6 shadow-default  dark:bg-slate-800">
        <div className="flex items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700">
            <Package size={24} className="text-slate-600 dark:text-white" />
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-gray-600 dark:text-gray-400">Orders</h4>
          <div className="flex items-end justify-between mt-2">
            <h2 className="text-4xl font-bold text-black dark:text-white">5,359</h2>
            <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-600">
              <TrendingDown size={16} className="mr-1" />
              9.05%
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 rounded-sm  bg-white p-6 shadow-default dark:bg-slate-800">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Monthly Sales
          </h3>
          <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                domain={[0, 400]} 
                ticks={[0, 100, 200, 300, 400]}
              />
              <Bar 
                dataKey="sales" 
                fill="#4F46E5" 
                radius={[4, 4, 0, 0]} 
                barSize={30} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}