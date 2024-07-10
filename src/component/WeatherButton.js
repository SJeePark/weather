import React from 'react';
import Button from 'react-bootstrap/Button';


const WeatherButton = ({cities}) => {
    console.log("cities", cities);
  return (
    <div>
      <Button variant="light">Current Location</Button>
      
      {cities.map((item)=>(
      <Button variant='light'>{item}</Button>))}
    </div>
  )
}


export default WeatherButton
