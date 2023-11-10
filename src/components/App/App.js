import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {(location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile") && (
          <Header 
            loggedIn={true}
            isOpen={false}
            onButtonClick={console.log()}
            onCloseButtonClick={console.log()}
          />
      )}

      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {(location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies") && (
          <Footer />
      )}
    </div>
  );
}

export default App;
