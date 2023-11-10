class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }
}

const api = new Api({
  baseUrl: "https://api.movies.naborbukovok.nomoredomainsrocks.ru/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;