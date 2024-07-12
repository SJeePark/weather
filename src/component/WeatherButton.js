import React from 'react';
import Button from 'react-bootstrap/Button';

// app.js에 있는 setCity 함수를 갖고 온다. 여기서 사용하기만 한다.

const WeatherButton = ({cities, getCurrentLocation, setCity, selectedButton}) => {
  return (
    <div className="button-container">
      <Button 
        variant={selectedButton === "" ? "primary" : "light"} 
        onClick={() => {
          getCurrentLocation();
          setCity("");
        }}
      >
        Current Location
      </Button>
      {cities.map((cityName) => (
        <Button 
          key={cityName} 
          variant={selectedButton === cityName ? "primary" : "light"} 
          onClick={() => setCity(cityName)}
        >
          {cityName}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton