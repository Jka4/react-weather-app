import React, { lazy, Suspense, useEffect, useState } from "react";
import Icon from "../../Icon/index";
import { getDateFromDT, sliceTemp } from "../../utils";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { API_KEY } from "../../utils";
import { usePosition } from './usePosition';


import AOS from "aos";
import "aos/dist/aos.css";



const WeatherHistoryCards = lazy(() => import("../weatherHistoryCards/weatherHistoryCards"));

const WeatherCard = (props) => {
  const [weather, setWeather] = useState();
  const { lat, lon, error } = usePosition();
  console.log("lat, lon, error ", lat, lon, error)

  useEffect(() => {
    setWeather(props.weather);
  }, [props])

  useEffect(() => {
    if (lat) {
      AOS.init();
      getWeatherForCurrentLocation();
    }

  }, [lat])


  const getWeatherForCurrentLocation = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const json = await fetch(URL);
    const data = await json.json();
    setWeather(data);
  }

  const weatherToday = weather?.list[0];
  const tempDay = weatherToday?.temp?.day;

  return (
    <div className='weatherCardLEftSide'>
      {weatherToday && <section className='weatherCardLEftSide__inner'>
        <div className='topLine'>
          <div className='topLine__leftSide'>
            <h1>
              {getDateFromDT(weatherToday.dt, "dddd")} &nbsp;
                {getDateFromDT(weatherToday.dt, "D")}
            </h1>
            <span>{getDateFromDT(weatherToday.dt, "MMMM")}</span>
          </div>
          <div className='cityName'>
            <span>{weather.city.name}</span>
            {!!lat ? (
              <div
                className='locationBtn'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="100"
                data-aos-delay="500"
              >
                <LocationOnOutlinedIcon />
              </div>)
              : (
                <div className='locationBtn'> </div>
              )
            }
          </div>

        </div>
        <div className='curentTemperature'>
          <span>{sliceTemp(tempDay)}°</span>
          <span className='mainIcon'>
            <Icon
              size='large'
              weatherType={weatherToday.weather[0].main.toLowerCase()}
            />
          </span>
        </div>
      </section>}

      <Suspense fallback={'Loading...'} >
        <WeatherHistoryCards weather={weather} />
      </Suspense>
    </div>
  );
}

export default WeatherCard;