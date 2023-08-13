import { moviesServerAdress } from './constants';

class MoviesApi {
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

  getMovies() {
    return this._request(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: moviesServerAdress,
});

export default moviesApi;
