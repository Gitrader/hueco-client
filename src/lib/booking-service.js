import axios from "axios";

class Booking {
  constructor() {
    this.booking = axios.create({
      baseURL: "http://localhost:5000",
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
      .post("/booking/contact-info", { 
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
  bookingUserPaymentInfo(creditCardObj) 
  {
  return this.booking
    .put("booking/:bookingId/payment-information",  creditCardObj)
    .then(({ data }) => data);
  // .then((response) => response.data);
}
///////////////ID////////////////////////

// Route /booking/:bookingId
getBooking(id) {
    return this.business
    .get(`/booking/${id}`)
    .then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
    }
    

}


const axiosRequestFunctions = new Booking();

export default axiosRequestFunctions;