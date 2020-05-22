import React, { Component, useState } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl } from "react-map-gl";
import { Link } from 'react-router-dom';
import businessService from "./../lib/business-service";
import "./Map.css"
// import data from "./../data.json";

export default class Map extends Component {
  state = {
    viewport: {
      width: "100vh",
      height: "100vh",
      latitude: 41.3851,
      longitude: 2.1734,
      zoom: 10,
      selectedBusiness: null,
      setSelectedBusiness: null,
      selectedBusinessVisible: false,
      pinVisible: false,
      
    //   data: data,
    },
    userLocation: {},
    businesses:[],
    selectedBusiness: null,
  };

  componentDidMount() {
    
    businessService
      .getAllBusinesses()
      .then((businesses)=> {
          console.log("business",businesses)
        this.setState({ businesses })
        
      })
      .catch( (err) => console.log(err));
  }
  componentDidUpdate(nextState){
return nextState !== this.state
  }
  
  //   const [selectedBusiness, setSelected] = useState(null);

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 10,
      };
      this.setState({
        viewport: newViewport,
        userLocation: setUserLocation,
      });
    });
  };

  setSelectedBusiness = (selectedBusiness) => {
    this.setState({
      selectedBusiness,
      selectedBusinessVisible: true,
      pinVisible: false,
    });
  };

  render() {
      
    const {
        latitude,
        longitude,
        width,
        height,
        zoom,
        
        
      } = this.state.viewport;
      const {businesses,selectedBusiness}=this.state
      const viewport = { latitude, longitude, width, height, zoom };
      return (
        <div>
        

          <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/granx02/cka9kifn53jh71jo248opf5q4"
            onViewportChange={(viewport) => this.setState({ viewport })}
          >
            <div >
              <GeolocateControl className="GeolocateControl"
              
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                onViewportChange={(viewport) => this.setState({ viewport })}
              />
            </div>
  
            <NavigationControl className="NavigationControl"/>
  
  
            {businesses?
                businesses.map((business) => {
                   return( 
                       
              <Marker
                key={business._id}
                latitude={business.coordinates[1]}
                longitude={business.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setSelectedBusiness(business);
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dksnrn8gi/image/upload/v1589701760/m3-project/pointer_ckmftw.png"
                    alt="Marker Icon"
                  />
                </button>
              </Marker>
              
                   )
            }):null}
  
            {selectedBusiness ? (
              <Popup className="popup"
                latitude={selectedBusiness.coordinates[1]}
                longitude={selectedBusiness.coordinates[0]}
                onClose={() => {
                  this.setSelectedBusiness(null);
                }}
              >
                <div>
                  <h2>{selectedBusiness.business_name}</h2>
                  <img src={selectedBusiness.image_url} alt="img-business"/>
                  {/* <h2>{selectedBusiness.type}</h2>
                  <h2>{selectedBusiness.properties.SERVICE}</h2> */}
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      );
    }
}
