import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight, 
  Calendar, 
  MessageSquare, 
  UserSquare, 
  ShoppingCart, 
  BarChart3, 
  Table, 
  FormInput, 
  Layers, 
  Settings,
  HelpCircle,
  CircleUser,

} from 'lucide-react';

export default function Sidebar({darkMode}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={18}/>,
      submenu: [
        { title: "Ecommerce", path: "/" },
        { title: "Analytics", path: "#" },
        { title: "Marketing", path: "#" },
        { title: "CRM", path: "#" },
        { title: "Stocks", path: "#" },
        { title: "SaaS", path: "#" }
      ]
    },
    {
      title: "Calendar",
      icon: <Calendar size={18} />,
      path: "#"
    },
    {
      title: "User Profile",
      icon: <CircleUser size={18}/> ,
      path: "#"
    },
    {
      title: "Task",
      icon: <MessageSquare size={18} />,
      submenu: [
        { title: "List", path: "#" },
        { title: "Kanban", path: "#" },
        
      ]
    },
    // {
    //   title: "Messages",
    //   icon: <MessageSquare size={18} />,
    //   path: "#",
    //   badge: "14"
    // },

    {
      title: "Forms",
      icon: <FormInput size={18} />,
      submenu: [
        { title: "Form Elements", path: "#" },
        { title: "Form Layout", path: "#" },
      ]
    },
    {
      title: "Tables",
      icon: <Table size={18} />,
      submenu: [
        { title: "Basic Tables", path: "#" },
        { title: "Data Tables", path: "#" }
      ]
    },
    {
        title: "Pages",
        icon: <MessageSquare size={18} />,
        submenu: [
          { title: "File Manager", path: "#" },
          { title: "Pricing Tables", path: "#" },
          { title: "Faqs", path: "#" },
          { title: "Blank Page", path: "#" },
          { title: "404 Error", path: "#" },
          { title: "500 Error", path: "#" },
          { title: "503 Error", path: "#" },
          { title: "Coming Soon", path: "#" },
          { title: "Maintenance", path: "#" },
          { title: "Success", path: "#" },
          
        ]
      },



    {
      title: "Charts",
      icon: <BarChart3 size={18} />,
      submenu: [
        { title: "Basic Charts", path: "#" },
        { title: "Advanced Charts", path: "#" }
      ]
    },
    {
      title: "Settings",
      icon: <Settings size={18} />,
      path: "#"
    },
    {
      title: "Help",
      icon: <HelpCircle size={18} />,
      path: "#"
    }
  ];

  return (
    <aside className={`fixed top-0 left-0  z-9999 flex flex-col h-[100%] bg-white drop-shadow-1 dark:bg-slate-900 dark:drop-shadow-none lg:w-72 w-26`}>
    <div className="flex items-center justify-between gap-2 p-4">
      <a href="index.html" className={`flex items-center gap-2.5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <img src="/api/placeholder/40/40" alt="Logo" className="h-10 w-10" />
        <span className={`hidden lg:block text-xl font-semibold`}>TailAdmin</span>
      </a>
    </div>
    <nav className="px-4 py-4">
      <h3 className={`mb-4 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>MENU</h3>
      <ul className="flex flex-col gap-1.5">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(index)}
                  className={`flex items-center gap-2.5 rounded-md p-2 duration-300 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                >
                  {item.icon}
                  <span className={`hidden lg:block`}>{item.title}</span>
                  <ChevronDown
                    size={16}
                    className={`ml-auto transition-transform ${activeMenu === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`pl-4 overflow-y-scroll ${activeMenu === index ? 'max-h-full' : 'max-h-0'}`}>
                  <ul className={`flex flex-col gap-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    {item.submenu.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <a href={submenu.path} className={`block p-2 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                          {submenu.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a href={item.path} className={`flex items-center gap-2.5 p-2 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                {item.icon}
                <span className={`hidden lg:block`}>{item.title}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
  );
}