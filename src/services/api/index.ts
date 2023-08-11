import axios, { AxiosError } from "axios";
import { User } from "../../types";
import { generateMD5 } from "../../utils/md5";

const requestNotAuth = axios.create({
  baseURL: "https://no23.lavina.tech",
});

const request = axios.create({
  baseURL: "https://no23.lavina.tech",
  headers: {
    key: localStorage.getItem("key"),
  },
});

request.interceptors.request.use(
  (config) => {
    const { method, url, data } = config;
    let body = "";
    if (data) body = data;
    const sign = generateMD5(method, url, localStorage.getItem("secret"), body);
    config.headers["Key"] = localStorage.getItem("key");
    config.headers["Sign"] = sign;
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("key");
      localStorage.removeItem("secret");
    }
    throw error;
  }
);

const catchError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const networkError: AxiosError = error;
    console.error("Network error:", networkError.message);
    return networkError.message;
  } else {
    console.error("Unknown error:", error);
    return error;
  }
};

export default class ApiService {
  static async signUp(userData: User) {
    try {
      const res = await requestNotAuth.post("/signup", userData);
      return res.data.message;
    } catch (error) {
      catchError(error);
    }
  }
  static async checkLogin() {
    try {
      const res = await request.get("/myself");
      return res.data.isOk;
    } catch (error) {
      catchError(error);
      return false;
    }
  }
  static async addBook(isbn: string) {
    try {
      const res = await request.post("/books", { isbn });
      console.log(res.data);
    } catch (error) {
      catchError(error);
    }
  }
  static async getBooks() {
    try {
      const res = await request.get("/books");
      return res.data;
    } catch (error) {
      catchError(error);
    }
  }
  static async editBook(bookId: number) {
    try {
      const res = await request.patch(`/books${bookId}`);
      return res.data.message;
    } catch (error) {
      catchError(error);
    }
  }
  static async deleteBook(bookId: number) {
    try {
      const res = await request.delete(`/books${bookId}`);
      return res.data.message;
    } catch (error) {
      catchError(error);
    }
  }
}
