import React from 'react';
import { Search, Moon, Bell, ChevronDown } from 'lucide-react';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-999 flex bg-white drop-shadow-1 dark:bg-slate-900 dark:drop-shadow-none lg:ml-72 ml-26">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
         
          <a href="/#" className="block flex-shrink-0 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <span className="text-xl font-semibold text-black dark:text-white">TailAdmin</span>
            </div>
          </a>

        
          <button className="z-99999 block rounded-sm border border-slate-200 bg-white p-1.5 shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:hidden">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

       
        <div className="hidden sm:block">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 px-3 text-slate-400">
              <Search size={20} />
            </button>
            <input
              type="text"
              placeholder="Search or type command..."
              className="w-full rounded-lg border border-slate-200 bg-transparent py-2 pl-10 pr-10 outline-none focus:border-blue-500 focus-visible:shadow-none dark:border-slate-700 dark:text-white"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 px-3 text-slate-400">
              <div className="rounded border border-slate-400 bg-slate-100 px-1.5 text-xs font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400">
                ⌘K
              </div>
            </button>
          </div>
        </div>

     
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
   
            <li>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700" onClick={() => setDarkMode(!darkMode)}>
                <Moon size={18} className="text-slate-500 dark:text-white" />
              </button>
            </li>
            
      
            <li>
              <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
                <Bell size={18} className="text-slate-500 dark:text-white" />
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                  2
                </span>
              </button>

</li>
          </ul>

   
          <div className="relative flex gap-2">
            <button className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full">
                <img src="/api/placeholder/40/40" alt="User" className="h-full w-full rounded-full object-cover" />
              </div>
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-black dark:text-white">
                  Musharof
                </span>
              </span>
              <ChevronDown size={18} className="text-slate-400" />
            </button>
            <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
  className="text-red-500 hover:text-red-700"
>
  Logout
</button>

            
          </div>
        </div>
      </div>
    </header>
  );
}