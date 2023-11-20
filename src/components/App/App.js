import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { register, login, checkAuth } from "../../utils/Auth.js";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

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

  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  const handleChangeMovieSave = (movie, isSaved) => {
    if (!isSaved) {
      mainApi
        .postMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailer: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN
        })
        .then((data) => {
          setSavedMovies([...savedMovies, data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
      mainApi
        .deleteMovie(savedMovie._id)
        .then(() => {
          setSavedMovies(savedMovies.filter((savedMovie) => savedMovie.movieId !== movie.id));
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  const handleDeleteSavedMovie = (savedMovie) => {
    mainApi
    .deleteMovie(savedMovie._id)
    .then(() => {
      setSavedMovies(savedMovies.filter((item) => (item._id !== savedMovie._id)));
    })
    .catch((error) => {
      console.log(error);
    })
  };

  const handleSetUserInfo = (name, email) => {
    mainApi
      .setUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Обработка регистрации.
  const handleRegister = (email, password, name) => {
    register(email, password, name)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Обработка входа.
  const handleLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    login(email, password)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Обработка выхода.
  const handleSignOut = () => {
    mainApi
      .out()
      .then(() => {
        localStorage.clear();
        navigate("/signin");
        setIsLoggedIn(false);
        setCurrentUser({});
      })
      .catch((error) => {
        console.log(error);
      })
  };

  useEffect(() => {
    checkAuth()
      .then((data) => {
        if (data) {
          setCurrentUser(data.data);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsPreloader(true);
      moviesApi
        .getData()
        .then((data) => {
          setBeatfilmMovies(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setIsPreloader(false)); // Прелоадер отключается после загрузки фильмов из базы

      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data.data);
        })
        .catch((error) => {
          console.log(error);
        });

      mainApi
        .getMovies()
        .then((data) => {
          setSavedMovies(data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setIsPreloader(false));
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {(location.pathname === "/" ||
          location.pathname === "/movies" ||
          location.pathname === "/saved-movies" ||
          location.pathname === "/profile") && <Header isLoggedIn={isLoggedIn} />}

        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/movies"
            element={
              <Movies
                beatfilmMovies={beatfilmMovies}
                savedMovies={savedMovies}
                onMovieButtonClick={handleChangeMovieSave}
                isPreloader={isPreloader}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <SavedMovies
              savedMovies={savedMovies}
              onMovieButtonClick={handleDeleteSavedMovie}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                currentUser={currentUser}
                handleSignOut={handleSignOut}
                handleSetUserInfo={handleSetUserInfo}
              />
            }
          />

          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />

          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        {(location.pathname === "/" ||
          location.pathname === "/movies" ||
          location.pathname === "/saved-movies") && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
