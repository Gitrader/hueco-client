import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup({
    business_name,
    email,
    password,
    address,
    city,
    zip_code,
    service,
    phone_number,
    // image_url,
    description,
    discount,
    initial_price,
    discounted_price
    // coordinates,
  }) {
    return this.auth
      .post("/auth/signup", {
        business_name,
        email,
        password,
        address,
        city,
        zip_code,
        service,
        phone_number,
        // image_url,
        description,
        discount,
    initial_price,
    discounted_price
        // coordinates,
      })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
