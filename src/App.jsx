import React, { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

function App() {
  const [user, setUser] = useState("");

  const handleLogin = ( email, password ) => {
  
    if (email == "e@e.com" && password == "123") {
      
      setUser("employee");
    } else if (email == "a@a.com" && password == "123") {
      setUser("admin");
    } else {
      // Add error handling for invalid login
      alert("Invalid credentials");
    }
  };



  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </div>
  );
}

export default App;