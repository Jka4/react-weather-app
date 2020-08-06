import React from "react";
import Icon from "../../Icon/index";
import WeatherHistoryCards from "../weatherHistoryCards/weatherHistoryCards";
import { getDateFromDT, sliceTemp } from "../../utils";

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const weather = this.props.weather;
    console.log("WeatherCard -> render -> weather", weather)

    if (!weather.list) {
      return null;
    }

    const weatherToday = weather.list[0];
    const tempDay = weatherToday.temp.day;

    return (
      <div className='weatherCardLEftSide'>
        <section className='weatherCardLEftSide__inner'>
          <div className='topLine'>
            <div className='topLine__leftSide'>
              <h1>
                {getDateFromDT(weatherToday.dt, "dddd")} &nbsp;
                {getDateFromDT(weatherToday.dt, "D")}
              </h1>
              <span>{getDateFromDT(weatherToday.dt, "MMMM")}</span>
            </div>
            <div className='cityName'>{weather.city.name}</div>
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
        </section>
        <WeatherHistoryCards weather={weather} />
      </div>
    );
  }
}
