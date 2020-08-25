import React from "react";
import Icon from "../../Icon/index";
import { getDateFromDT, sliceTemp } from "../../utils";

const WeatherHistoryCards = (props) => {

  const { weather } = props;
  const weatherForecast = weather?.list;

  return (
    <div className='weekHistoryCards'>
      {!!weather?.list && weatherForecast.map((key, index) => (
        <div key={key.dt.toString()} className='historyCard'>
          <h4>{getDateFromDT(weatherForecast[index].dt, "MM")}</h4>
          <Icon
            size='small'
            weatherType={weatherForecast[index].weather[0].main.toLowerCase()}
          />
          <h5>{sliceTemp(weatherForecast[index].temp.day)}°</h5>
        </div>
      ))}
    </div>
  );
}

export default WeatherHistoryCards;