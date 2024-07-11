import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
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

  const [weather, setWeather] = useState(null)
  const cities = ['Paris', 'New York', 'Tokyo', 'Seoul'];
  const [city, setCity]= useState("");
  const [loading, setLoading] =useState(false);


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
    let url = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=12f16c18bca3e6647c2b6d2cfd03a0d8&units=metric`) 
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json(); 
    setWeather(data)
    setLoading(false)
  };


  // 버튼누르면 city이름을 가져와 city에 대한 정보 불러오기
  const getWeatherByCity = async() =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12f16c18bca3e6647c2b6d2cfd03a0d8&units=metric`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }
  

  // useState("") 초기값을 정하지 않았기 때문에 useEffect()를 따로 쓰면 정보 불러오기 X -> if문을 이용하여 오류 해결
  useEffect(() => {
    if(city === ""){
      getCurrentLocation();
    }else{
      getWeatherByCity();
    }
  }, [city]);


  return (
    <div>
      <div className='title'>How's the Weather?</div>

      <div>{loading?<div className='container'><ClipLoader color="#f88c6b" loading={loading} size={150}/></div>:<div className='container'>
        <WeatherBox weather ={weather} />
        <WeatherButton cities = {cities} getCurrentLocation = {getCurrentLocation} setCity={setCity}/>
      </div>}
      <div className='image'></div>
    </div>
    </div>
  );
}

export default App;

// 날씨 별로 움짤 변경되면 좋겠당

// 버튼 클릭
// 해당 버튼의 색깔 유지
// 함수 필요할 듯
// 