class MainApi {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;

  }

  // Получение данных пользователя (GET).
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: "include",
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Обновление данных о пользователе (PATCH).
  setUserInfo(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Получение всех сохраненных фильмов (GET).
  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: "include",
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Создание сохраненного фильма (POST).
  postMovie(movie) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        authorization: this.headers.authorization,
      },
      credentials: "include",
      body: JSON.stringify(movie),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Удаление сохраненного фильма c ID movieId (DELETE).
  deleteMovie(movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  
  out() {
    return fetch(`${this.baseUrl}/signout`, {
      method: "POST",
      headers: this.headers,
      credentials: 'include',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.movies.naborbukovok.nomoredomainsrocks.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
