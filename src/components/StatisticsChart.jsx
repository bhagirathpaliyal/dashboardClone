import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function StatisticsChart() {
  const [activeTab, setActiveTab] = useState('Monthly');
  
  const data = [
    { name: 'Jan', upper: 180, lower: 40 },
    { name: 'Feb', upper: 190, lower: 30 },
    { name: 'Mar', upper: 170, lower: 50 },
    { name: 'Apr', upper: 160, lower: 40 },
  ];

  const tabs = ['Monthly', 'Quarterly', 'Annually'];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm w-full">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Statistics</h2>
          <p className="text-gray-600 text-sm">Target you've set for each month</p>
        </div>
        <div className="bg-gray-100 rounded-lg flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm ${
                activeTab === tab
                  ? 'bg-white text-gray-800 rounded-lg shadow-sm'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-64 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4361ee" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#4361ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666' }}
              domain={[0, 250]}
              ticks={[0, 50, 100, 150, 200, 250]}
            />
            <Line
              type="monotone"
              dataKey="upper"
              stroke="#4361ee"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              fill="url(#colorFill)"
            />
            <Line
              type="monotone"
              dataKey="lower"
              stroke="#a0b5f2"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}