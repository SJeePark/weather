import React from 'react';

const WeatherBox = ({weather}) => {
  console.log('weather?', weather);
  return (
    <div>
    <div className='weather-box'>
      <div style={{fontWeight: 1000, fontSize:'30px', marginBottom:'15px', justifyContent:'center', display:'flex'}}>{weather?.sys.country} {weather?.name}</div>
      <h2 className='temp'>{Math.round(weather?.main.temp)}°C / {Math.round(((weather?.main.temp)*9/5)+32)}°F</h2>
      <div className='minmax'>MaxTemp: {Math.round(weather?.main.temp_max)}°C / {Math.round((weather?.main.temp_max)*9/5)+32}°F</div>
      <div className='minmax'> MinTemp: {Math.round(weather?.main.temp_min)}°C / {Math.round((weather?.main.temp_min)*9/5)+32}°F</div>
      <h3 className='description' style={{marginTop: "20px"}}>{weather?.weather[0].description}</h3>
      <table>
          <tbody>
            <tr>
              <th scope="col">해수면</th>
              <th scope="col">지상층</th>
              <th scope="col">구름양</th>
              <th scope="col">풍속</th>
            </tr>
            <tr>
              <td>{weather?.main.sea_level}hPa</td>
              <td>{weather?.main.grnd_level}hPa</td>
              <td>{weather?.clouds.all}%</td>
              <td>{weather?.wind.speed}m/s</td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default WeatherBox
