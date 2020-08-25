import React, { lazy, Suspense, useEffect, useState } from "react";
import Icon from "../../Icon/index";
import { getDateFromDT, sliceTemp } from "../../utils";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useGeolocation from 'react-hook-geolocation'
import { API_KEY } from "../../utils";

const WeatherHistoryCards = lazy(() => import("../weatherHistoryCards/weatherHistoryCards"));

const WeatherCard = (props) => {
  const [weather, setWeather] = useState();
  const geolocation = useGeolocation()
  console.log("WeatherCard -> geolocation", geolocation)

  const lat = geolocation.latitude;
  const lon = geolocation.longitude;

  useEffect(() => {
    setWeather(props.weather);
  }, [props])


  const getWeatherForCurrentLocation = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const json = await fetch(URL);
    const data = await json.json();
    setWeather(data);
  }

  const canHaveGeolocation = !!geolocation?.accuracy;
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
            {canHaveGeolocation && <div className='locationBtn' onClick={getWeatherForCurrentLocation} >
              <LocationOnOutlinedIcon />
            </div>}
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