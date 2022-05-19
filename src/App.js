import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserProvider } from "./Context/UserContext";
import ProtectRoute from "./Components/Ui/ProtectedRoute/ProtectRoute";
import User from "./Components/User/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectRoute>
                  <User />
                </ProtectRoute>
              }
            />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
