import { useState } from "react";
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
import "./App.css";

function App() {
  //temporary
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  };
  return (
    <>
      <div className="main-body">
        <BrowserRouter>
          <Navbar isLoggedIn={isLoggedIn} />
          <Routes>
            <Route
              path="e-pitaka/"
              element={isLoggedIn
                ? <Home username={username} />
                : <SignIn handleLogin={handleLogin} />}
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
                isLoggedIn ? <Home /> : <SignIn handleLogin={handleLogin} />
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
