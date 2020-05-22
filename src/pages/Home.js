import React from 'react'
import Map from "./../components/Map"
import BusinessListCard from "./../components/BusinessListCard"
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <Map/>
      <BusinessListCard/>
    </div>
  )
}

export default Home;