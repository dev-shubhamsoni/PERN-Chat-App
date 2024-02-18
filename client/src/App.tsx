// Import necessary dependencies from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Register } from "./pages/Register/Register.page";
import { Login } from "./pages/Login/Login.page";
import { Dashboard } from "./pages/Dashboard/Dashboard.page";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app bg-backgroundMain flex justify-center items-center h-[100vh] w-[100vw] bg-backgroundDark">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={loggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
