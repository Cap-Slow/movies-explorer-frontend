import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SliderMenu from '../SliderMenu/SliderMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LoadingPage from '../LoadingPage/LoadingPage';
import moviesApi from '../../utils/MoviesApi';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import mainApi from '../../utils/MainApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [moviesToLoad, setMoviesToLoad] = useState(0);
  const [moviesToShow, setMoviesToShow] = useState(0);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isSavedShortMovies, setIsSavedShortMovies] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isTablet, setTablet] = useState(window.innerWidth < 1200);
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);
  const [inputValue, setinputValue] = useState('');
  const [savedMoviesInputValue, setSavedMoviesInputValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);
  const [profileUpdateMessage, setProfileUpdateMessage] = useState('');
  const [isSuccessProfileUpdate, setIsSuccessProfileUpdate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    mainApi
      .getUserData()
      .then((userData) => {
        if (userData) {
          setIsLoggedIn(true);
          if (
            location.pathname === '/signin' ||
            location.pathname === '/signup'
          ) {
            navigate('/movies');
          } else {
            navigate(location.pathname);
          }
          const { email, name, _id } = userData;
          setCurrentUser({ email, name, _id });
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getDataFromLocalStorage();
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      if (isSavedShortMovies) {
        setSavedMovies(filterShortMovies(savedMovies));
      } else {
        mainApi
          .getSavedMovies()
          .then((res) => {
            setSavedMovies(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [isSavedShortMovies]);

  useEffect(() => {
    if (isShortMovies) {
      const shortMovies = filterShortMovies(filteredMovies);
      setFilteredMovies(shortMovies);
      setDisplayedMovies(shortMovies.slice(0, moviesToShow));
    } else {
      const storagedMovies = JSON.parse(localStorage.getItem('movies'));
      setFilteredMovies(storagedMovies ? storagedMovies : []);
      setDisplayedMovies(
        storagedMovies ? storagedMovies.slice(0, moviesToShow) : []
      );
    }
  }, [isShortMovies]);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [filteredMovies]);

  useEffect(() => {
    if (isTablet) {
      setMoviesToLoad(2);
    } else {
      setMoviesToLoad(3);
    }
  }, [isTablet]);

  useEffect(() => {
    if (isDesktop) {
      setMoviesToShow(12);
    } else {
      setMoviesToShow(5);
    }
  }, [isDesktop]);

  function loadMoreMovies() {
    if (isShortMovies) {
      const shortMovies = filterShortMovies(filteredMovies);
      setFilteredMovies(shortMovies);
      setDisplayedMovies(
        shortMovies.slice(0, displayedMovies.length + moviesToLoad)
      );
    } else {
      setDisplayedMovies(
        filteredMovies.slice(0, displayedMovies.length + moviesToLoad)
      );
    }
  }

  function handleinputValueChange(e) {
    setinputValue(e.target.value);
    setIsFormSubmitted(false);
  }

  function filterShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  }

  function handleCheckboxClick() {
    setIsShortMovies(!isShortMovies);
  }

  function handleSavedCheckboxClick() {
    setIsSavedShortMovies(!isSavedShortMovies);
  }

  function updateMedia() {
    setTimeout(() => {
      setTablet(window.innerWidth < 1200);
      setDesktop(window.innerWidth >= 768);
    }, 1000);
  }

  function handleSavedInputValueChange(e) {
    setSavedMoviesInputValue(e.target.value);
  }

  function saveDataInLocalStorage(inputValue, movies, isShortMovies) {
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('isShortMovies', JSON.stringify(isShortMovies));
  }

  function getDataFromLocalStorage() {
    const savedInputValue = JSON.parse(localStorage.getItem('inputValue'));
    const storagedMovies = JSON.parse(localStorage.getItem('movies'));
    const isCheckboxActive = JSON.parse(localStorage.getItem('isShortMovies'));
    if (savedInputValue) {
      setinputValue(savedInputValue);
    } else {
      setinputValue('');
    }
    if (storagedMovies) {
      setFilteredMovies(storagedMovies);
      setDisplayedMovies(storagedMovies.slice(0, moviesToShow));
    } else {
      setFilteredMovies([]);
      setDisplayedMovies([]);
    }
    if (isCheckboxActive) {
      setIsShortMovies(isCheckboxActive);
      const shortMovies = filterShortMovies(storagedMovies);
      setFilteredMovies(shortMovies);
      setDisplayedMovies(shortMovies.slice(0, moviesToShow));
    } else {
      setIsShortMovies(false);
    }
  }

  function handleMoviesResultsFiltration(movies) {
    let searchedMovies = movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
    );
    const savedMoviesIds = savedMovies.map((movie) => movie.movieId);
    searchedMovies.forEach((movie) => {
      if (savedMoviesIds.includes(movie.id)) {
        movie.owner = currentUser._id;
        movie._id = savedMovies.find(
          (savedMovie) => savedMovie.movieId === movie.id
        )._id;
      }
    });
    setFilteredMovies(searchedMovies);
    setDisplayedMovies(searchedMovies.slice(0, moviesToShow));
    if (isShortMovies) {
      const shortSearchedMovies = filterShortMovies(searchedMovies);
      setFilteredMovies(shortSearchedMovies);
      setDisplayedMovies(shortSearchedMovies.slice(0, moviesToShow));
    }
    saveDataInLocalStorage(inputValue, searchedMovies, isShortMovies);
  }

  function handleMoviesSearch() {
    setIsSearchError(false);
    setIsFormSubmitted(true);
    setIsLoading(true);
    if (movies.length === 0) {
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          handleMoviesResultsFiltration(res);
        })
        .catch((err) => {
          console.log(err);
          setIsSearchError(true);
        });
    } else {
      handleMoviesResultsFiltration(movies);
    }
    setIsLoading(false);
  }

  function handleSavedMoviesSearch(inputValue) {
    setIsSearchError(false);
    setIsLoading(true);
    if (inputValue === '') {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    const filteredSavedMovies = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSavedMovies(filteredSavedMovies);
    setIsLoading(false);
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setMovies((state) =>
          state.map((m) =>
            m.id === savedMovie.movieId
              ? { ...m, owner: currentUser._id, _id: savedMovie._id }
              : m
          )
        );
        setSavedMovies((state) => [...state, savedMovie]);
        setDisplayedMovies((state) =>
          state.map((m) =>
            m.id === savedMovie.movieId
              ? { ...m, owner: currentUser._id, _id: savedMovie._id }
              : m
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m._id !== movie._id));
        setMovies((state) =>
          state.map((m) =>
            m.nameRU === movie.nameRU ? { ...m, owner: null } : m
          )
        );
        setDisplayedMovies((state) =>
          state.map((m) =>
            m.nameRU === movie.nameRU ? { ...m, owner: null } : m
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function onRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        const { email, name, _id } = res.userWithoutVersion;
        setIsLoggedIn(true);
        setCurrentUser({ email, name, _id });
        setRegisterErrorMessage('');
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
        setRegisterErrorMessage(err);
      });
  }

  function onLogin(email, password) {
    mainApi
      .authorize(email, password)
      .then((res) => {
        const { email, name, _id } = res.userWithoutVersion;
        setIsLoggedIn(true);
        setCurrentUser({ email, name, _id });
        setLoginErrorMessage('');
        navigate('/movies');
      })
      .catch((err) => {
        setLoginErrorMessage(err);
      });
  }

  function onSignOut() {
    localStorage.removeItem('inputValue');
    localStorage.removeItem('movies');
    localStorage.removeItem('isShortMovies');
    setIsFormSubmitted(false);
    mainApi
      .signout()
      .then(() => {
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function editProfileForm() {
    setIsProfileFormOpen(true);
    setProfileUpdateMessage('');
  }

  function onProfileUpdate(name, email) {
    mainApi
      .updateUserData(name, email)
      .then((res) => {
        const { email, name } = res;
        setCurrentUser({ email, name });
        setIsSuccessProfileUpdate(true);
        setProfileUpdateMessage('Данные успешно изменены');
      })
      .catch((err) => {
        setIsSuccessProfileUpdate(false);
        setProfileUpdateMessage(err);
      })
      .finally(() => {
        setIsProfileFormOpen(false);
      });
  }

  if (isLoggedIn === null) {
    return <LoadingPage />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <div className="page">
                  <Header>
                    <Navigation onMenuOpen={handleMenuOpen} />
                    <SliderMenu isOpen={isMenuOpen} onClose={closeMenu} />
                  </Header>
                  <Movies
                    inputValue={inputValue}
                    onInputChange={handleinputValueChange}
                    isFormSubmitted={isFormSubmitted}
                    isError={isSearchError}
                    onMoviesSearch={handleMoviesSearch}
                    filteredMovies={filteredMovies}
                    isLoading={isLoading}
                    isShortMovies={isShortMovies}
                    onCheckboxClick={handleCheckboxClick}
                    displayedMovies={displayedMovies}
                    loadMoreMovies={loadMoreMovies}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    setCurrentUser={setCurrentUser}
                    setIsLoggedIn={setIsLoggedIn}
                  ></Movies>
                </div>
              }
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <div className="page">
                  <Header>
                    <Navigation onMenuOpen={handleMenuOpen} />
                    <SliderMenu isOpen={isMenuOpen} onClose={closeMenu} />
                  </Header>
                  <SavedMovies
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    isSavedMoviesPage={true}
                    inputValue={savedMoviesInputValue}
                    onInputChange={handleSavedInputValueChange}
                    onMoviesSearch={handleSavedMoviesSearch}
                    isLoading={isLoading}
                    isShortMovies={isSavedShortMovies}
                    onCheckboxClick={handleSavedCheckboxClick}
                  ></SavedMovies>
                </div>
              }
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <div className="page">
                  <Profile
                    onMenuOpen={handleMenuOpen}
                    isMenuOpen={isMenuOpen}
                    closeMenu={closeMenu}
                    onSignOut={onSignOut}
                    isProfileFormOpen={isProfileFormOpen}
                    onEditFormOpen={editProfileForm}
                    onProfileUpdate={onProfileUpdate}
                    isSuccessProfileUpdate={isSuccessProfileUpdate}
                    profileUpdateMessage={profileUpdateMessage}
                  ></Profile>
                </div>
              }
            />
          }
        />
        <Route
          path="/signup"
          element={
            <div className="page">
              <Register
                onRegister={onRegister}
                errorMessage={registerErrorMessage}
              ></Register>
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="page">
              <Login onLogin={onLogin} errorMessage={loginErrorMessage}></Login>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="page">
              <Main
                isLoggedIn={isLoggedIn}
                onMenuOpen={handleMenuOpen}
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}
              ></Main>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
