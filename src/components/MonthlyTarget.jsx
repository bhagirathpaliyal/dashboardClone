import React from 'react';
import { MoreVertical, ArrowDown, ArrowUp } from 'lucide-react';

export default function MonthlyTarget() {
  
  const progress = 75.55;
  
 
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  

  const startAngle = -90;
  const endAngle = (progress / 100) * 360 - 90;
  
  
  const startX = radius + radius * Math.cos(startAngle * Math.PI / 180);
  const startY = radius + radius * Math.sin(startAngle * Math.PI / 180);
  const endX = radius + radius * Math.cos(endAngle * Math.PI / 180);
  const endY = radius + radius * Math.sin(endAngle * Math.PI / 180);
  
  
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  const arcPath = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

  return (
    <div className=" bg-white p-6 shadow-default dark:bg-slate-800 flex-1">
   
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
            Monthly Target
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Target you've set for each month
          </p>
        </div>
        <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 ">
          <MoreVertical size={20} />
        </button>
      </div>


      <div className="flex justify-center my-8">
        <div className="relative">
          <svg width="180" height="180" viewBox="-10 -10 180 180">
            
            <circle 
              cx="80" 
              cy="80" 
              r="80" 
              fill="none" 
              stroke="#E5E7EB" 
              strokeWidth="16"
              className="dark:stroke-slate-700"
            />
            
        
            <path
              d={arcPath}
              fill="none"
              stroke="#4F46E5"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-800 dark:text-white">
              {progress}%
            </span>
            <div className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 mt-1">
              +10%
            </div>
          </div>
        </div>
      </div>

    
      <div className="text-center mb-8">
        <p className="text-slate-600 dark:text-slate-300">
          You earn $3287 today, it's higher than last month.
          <br />
          Keep up your good work!
        </p>
      </div>

      <div className="grid grid-cols-3 border-t border-stroke pt-4 dark:border-slate-700">
        <div className="border-r border-stroke px-4 text-center dark:border-slate-700">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Target</h4>
          <div className="flex items-center justify-center gap-1">
            <span className="text-xl font-bold text-slate-800 dark:text-white">$20K</span>
            <ArrowDown size={16} className="text-red-500" />
          </div>
        </div>

        <div className="border-r border-stroke px-4 text-center dark:border-slate-700">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Revenue</h4>
          <div className="flex items-center justify-center gap-1">
            <span className="text-xl font-bold text-slate-800 dark:text-white">$20K</span>
            <ArrowUp size={16} className="text-green-500" />
          </div>
        </div>

        <div className="px-4 text-center">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Today</h4>
          <div className="flex items-center justify-center gap-1">
            <span className="text-xl font-bold text-slate-800 dark:text-white">$20K</span>
            <ArrowUp size={16} className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}