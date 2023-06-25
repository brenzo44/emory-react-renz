import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import WeatherForm from './components/WeatherForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBCozVYPnYOjlvwPjdvdNnKBIR8EkLJaE0",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <div className="App">
      <Navbar />
      <WeatherForm />
      <Footer />
    </div>
  );
}

export default App;