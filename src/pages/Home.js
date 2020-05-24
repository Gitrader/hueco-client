import React from 'react'
import Map from "./../components/Map"
import BusinessListCard from "./../components/BusinessListCard"
// import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <div class="row">
          <div class="col-5" >
      <Map/>
      </div>
      </div>
      
      <div class="col-7">
      <BusinessListCard/>
      </div>
    </div>
  )
}

export default Home;