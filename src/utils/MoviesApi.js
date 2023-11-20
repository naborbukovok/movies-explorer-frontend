class MoviesApi {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  getData() {
    return fetch(`${this.baseUrl}/`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return res.json();
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;