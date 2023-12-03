import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

import style from './weatherApp.module.css'
import Loading from "./Loading";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(()=> {
    loadInfo();
  }, [])

  useEffect(()=> {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  async function loadInfo(city = "londo") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);

    loadInfo(city);
  }
  return (
    <div className={style.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather}/> : <Loading/>}
      
    </div>
  );
}
