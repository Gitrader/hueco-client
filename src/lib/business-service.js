import axios from "axios";

class Business {
  constructor() {
    this.business = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }






getBusiness() {
return this.business
.get("/auth/myhueco")
.then(({ data }) => data);
// return this.auth.get("/auth/me").then((response) => response.data);
}


////////////////////ID//////////////////////////
///route : businesses/:businessId/add-hueco
addAHueco(id,{timeSlot}){
return this.business
.put(`/businesses/${id}/add-hueco`,{timeSlot})
.then(({ data }) => data);
}


//Route : businesses/:businessId/edit/:myHuecoId
editHueco(id,body){
    return this.business
    .put(`/businesses/${id}/edit/:myhuecoId`,body)
    .then(({ data }) => data);
}

// Route : /businesses/:businessId/delete/:myHuecoId
deleteHueco(businessId,myHuecoId){
return this.business
.delete(`/businesses/${businessId}/delete/${myHuecoId}`)
.then(({ data }) => data);
}

//////////////////////ID////////////////////////










}



//   const businessService = new Business();

//   export default businessService;

  const axiosRequestFunctions = new Business();

export default axiosRequestFunctions;