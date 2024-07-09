import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';


// 1. 앱 실행되자마자(=useEffect 사용) 현재 위치 기반 날씨 출력
// 2. 날씨 정보: 도시, 섭씨 화씨 날씨 상태
// 3. 5개의 버튼 -> 1개는 현재위치, 4개는 다른 도시
// 4. 버튼 클릭시 도시별 날씨 출력
// 5. 현재 위치 버튼을 누르면 현재 위치 기반 날씨
// 6. 버퍼링 시 로딩 스피너가 돈다. 


function App() {

  // 현재 위치 
  const getCurrentLocation =()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        console.log("현재 위치", lat, lon)
        getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon)=>{
    let url = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=12f16c18bca3e6647c2b6d2cfd03a0d8`) 
    let response = await fetch(url)
    let data = await response.json(); 
    console.log("data", data)
  };


  useEffect(()=>{
    getCurrentLocation()
  }, []);


  return (
    <div>
      <div className='title'>How's the Weather?</div>
      <div className='container'>
        <WeatherBox />
        <WeatherButton />
      </div>
      <div className='image'></div>
    </div>
  );
}

export default App;

// 날씨 별로 움짤 변경되면 좋겠당