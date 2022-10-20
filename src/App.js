import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserProvider } from "./Context/UserContext";
import ProtectedRoute from "./Components/Ui/ProtectedRoute/ProtectRoute";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import PageNotFound from "./Components/Ui/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <main className="main-app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="/conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />

              <Route path="/photo/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
