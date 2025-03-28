import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState("");
  const authData = useContext(AuthContext);

  console.log(authData.employees);
  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.employees.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      setUser("employee");
    } else if (email === "a@a.com" && password === "123") {
      setUser("admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard />
      ) : null}
    </div>
  );
}

export default App;
