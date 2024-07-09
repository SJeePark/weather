import React from 'react';
import Button from 'react-bootstrap/Button';


const WeatherButton = () => {
  return (
    <div>
      <Button variant="light">Current Location</Button>
      <Button variant="light">Seoul</Button>
      <Button variant="light">Paris</Button>
      <Button variant="light">ToKyo</Button>
      <Button variant="light">Rome</Button>
    </div>
  )
}

export default WeatherButton
