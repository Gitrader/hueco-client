import axios from "axios";

class Business {
  constructor() {
    this.business = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  getAllBusinesses() {
    return this.business.get("/api/businesses").then(({ data }) => data);
  }

  getOneBusinessById(id) {
    return this.business.get(`/api/businesses/${id}`).then(({ data }) => data);
  }

  getBusiness() {
    return this.business.get("/auth/myhueco").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }

  ///route : businesses/:businessId/add-hueco
  addAHueco(id, timeSlot) {
    console.log("id", id, "timeSlot", timeSlot);
    return this.business
      .put(`/api/businesses/${id}/add-hueco`, { timeSlot })
      .then(({ data }) => data);
  }

  //Route : businesses/:businessId/edit/:myHuecoId
  editHueco(id, body) {
    return this.business
      .put(`/api/businesses/${id}/edit/:myhuecoId`, body)
      .then(({ data }) => data);
  }

  // Route : /businesses/:businessId/delete/:myHuecoId
  deleteHueco(businessId, myHuecoId) {
    return this.business
      .delete(`/api/businesses/${businessId}/delete/${myHuecoId}`)
      .then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Business();

export default axiosRequestFunctions;
