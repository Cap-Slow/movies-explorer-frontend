import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page">
            <Main></Main>
          </div>
        }
      />
      <Route
        path="/movies"
        element={
          <div className="page">
            <Movies
              onMenuOpen={handleMenuOpen}
              isMenuOpen={isMenuOpen}
              closeMenu={closeMenu}
              isLoading={isLoading}
            ></Movies>
          </div>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <div className="page">
            <SavedMovies
              onMenuOpen={handleMenuOpen}
              isMenuOpen={isMenuOpen}
              closeMenu={closeMenu}
            ></SavedMovies>
          </div>
        }
      />
      <Route
        path="/profile"
        element={
          <div className="page">
            <Profile
              onMenuOpen={handleMenuOpen}
              isMenuOpen={isMenuOpen}
              closeMenu={closeMenu}
            ></Profile>
          </div>
        }
      />
      <Route
        path="/signup"
        element={
          <div className="page">
            <Register></Register>
          </div>
        }
      />
      <Route
        path="/signin"
        element={
          <div className="page">
            <Login></Login>
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="page">
            <NotFoundPage></NotFoundPage>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
