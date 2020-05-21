import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
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
    image_url,
    description,
    coordinates
  }) 
  {
    return this.auth
      .post("/auth/signup", 
      { 
        business_name, 
        email, 
        password,
        address,
        city,
        zip_code,
        service,
        phone_number,
        image_url,
        description,
        coordinates
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