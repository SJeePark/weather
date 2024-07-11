import React from 'react';
import Button from 'react-bootstrap/Button';

// app.js에 있는 setCity 함수를 갖고 온다. 여기서 사용하기만 한다.

const WeatherButton = ({cities, setCity, getCurrentLocation}) => {
  return (
    <div>
      <Button variant="light" setCity={null} onClick={()=>{getCurrentLocation()}}>Current Location</Button>
      {cities.map((item)=>(
      <Button variant="light" 
      onClick={()=>setCity(item)}> 
      {item}</Button>))}   
    </div>
  )
}

export default WeatherButton