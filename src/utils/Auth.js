import { BASE_URL } from "./constants";

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return res.json();
    })
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return res.json();
    })
};

export const checkAuth = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return res.json();
    })
  } 