import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex min-h-screen">
        {!isLoginPage && <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />}
        <div className="flex-1 flex flex-col">
          {!isLoginPage && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}
          <main className={`${!isLoginPage ? 'p-4 lg:ml-72 ml-26' : 'p-0'}`}>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard darkMode={darkMode} />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
