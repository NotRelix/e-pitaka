import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Help from "./pages/Help";
import Deposit from "./pages/Deposit";
import AboutUs from "./pages/AboutUs";
import Send from "./pages/Send";
import History from "./pages/History";
import Savings from "./pages/Savings";
import Confirmation from "./pages/Confirmation";
import Receipt from "./pages/Receipt";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function App() {
  //temporary
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('username', username)
    console.log("User is Logged In");
  };

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('username', '')
    console.log("User is Logged Out")
  }

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn")
    const storedUsername = localStorage.getItem("username")

    if (storedLoginStatus && storedLoginStatus === 'true') {
      setIsLoggedIn(true)
      setUsername(storedUsername)
    }

    console.log({storedLoginStatus, storedUsername, username})
  }, [])

  return (
    <>
      <div className="main-body">
        <BrowserRouter>
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route
              path="e-pitaka/"
              element={isLoggedIn
                ? <Home username={username} />
                : <SignIn
                  handleLogin={handleLogin}
                  setUsername={setUsername}
                />}
            />
            <Route
              path="e-pitaka/sign-up"
              element={<SignUp
                handleLogin={handleLogin}
                setUsername={setUsername}
              />}
            />
            <Route
              path="e-pitaka/home"
              element={
                isLoggedIn
                  ? <Home username={username} />
                  : <SignIn
                    handleLogin={handleLogin}
                    setUsername={setUsername}
                  />
              }
            />
            <Route path="e-pitaka/help" element={<Help />} />
            <Route path="e-pitaka/deposit" element={<Deposit />} />
            <Route path="e-pitaka/about-us" element={<AboutUs />} />
            <Route path="e-pitaka/send" element={<Send />} />
            <Route path="e-pitaka/history" element={<History />} />
            <Route path="e-pitaka/savings" element={<Savings />} />
            <Route path="e-pitaka/send/confirm" element={<Confirmation />} />
            <Route path="e-pitaka/send/receipt" element={<Receipt />} />
            <Route path="e-pitaka/settings" element={<Settings />} />
            <Route path="e-pitaka/admin" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
