import { MAIN_SERVER_ADDRESS } from './constants';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register({ name, email, password }) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
  }

  authorize({ email, password }) {
    return this._request(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  }

  signout() {
    return this._request(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getUserData() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  updateUserData({ name, email }) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
  }

  getSavedMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  saveMovie(movie) {
    const savedMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(savedMovie),
    });
  }

  deleteMovie(movieId) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_SERVER_ADDRESS,
});

export default mainApi;
