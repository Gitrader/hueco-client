import axios from "axios";

class Booking {
  constructor() {
    this.booking = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }


  bookingUserContactInfo({ 
      first_name,
      last_name,
      email,
      businessId,
      timeslot 
    }) 
    {
    return this.booking
      .post("/api/booking/contact-info", { 
          first_name,
          last_name,
          email,
          businessId,
          timeslot
         })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }


  ///////////ID//////////////////

  //Route /booking/:bookingId/payment-information
  bookingUserPaymentInfo(creditCardObj,bookingId) 
  {
  return this.booking
    .put(`/api/booking/${bookingId}/payment-information`,  creditCardObj)
    .then(({ data }) => data);
  // .then((response) => response.data);
}
///////////////ID////////////////////////

// Route /booking/:bookingId
getBooking(id) {
    return this.business
    .get(`/api/booking/${id}`)
    .then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
    }
    

}


const axiosRequestFunctions = new Booking();

export default axiosRequestFunctions;