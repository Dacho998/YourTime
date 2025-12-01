import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/navBar/NavBar";
import HomePage from "./components/homePage/HomePage";
import FestinaCollection from "./components/watches/festina/FestinaCollection";
import AboutThisSite from "./components/aboutThisPage/AboutThisPage";
import SeikoCollection from "./components/watches/seiko/SeikoCollections";
import SwissCollection from "./components/watches/SwissMilitary/SwissCollection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Login from "./components/logIn/LogIn"; 
import SignUp from "./components/signUp/SignUp";
import Cart from "./components/cart/Cart";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="appContainer">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/festina" element={<FestinaCollection />} />
              <Route path="/seiko" element={<SeikoCollection />} />
              <Route path="/swiss-military" element={<SwissCollection />} />
              <Route path="/About_this_page" element={<AboutThisSite />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/log_in" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
