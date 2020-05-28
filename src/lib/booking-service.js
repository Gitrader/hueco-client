import axios from "axios";

class Booking {
  constructor() {
    this.booking = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  bookingUserContactInfo({
    first_name,
    last_name,
    email,
    businessId,
    timeslotId,
  }) {
    return this.booking
      .post("/api/booking/contact-info", {
        first_name,
        last_name,
        email,
        businessId,
        timeslotId,
      })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  //Route /booking/:bookingId/payment-information
  bookingUserPaymentInfo(creditCardObj, bookingId) {
    return this.booking
      .put(`/api/booking/${bookingId}/payment-information`, creditCardObj)
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  // Route /booking/:bookingId
  getBooking(id) {
    return this.business.get(`/api/booking/${id}`).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Booking();

export default axiosRequestFunctions;
