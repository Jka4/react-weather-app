import React from 'react';
import Icon from '../Icon/index';
import { API_KEY, getDateFromDT, sliceTemp } from '../utils';
import WeatherHistoryCards from './components/weatherHistoryCards'

export default class WeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
        }

        this.fetchWeatherData = this.fetchWeatherData.bind(this);
    }

    componentDidMount() {
        this.fetchWeatherData();
    }

    async fetchWeatherData() {
        const json = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Odessa&units=metric&cnt=7&appid=${API_KEY}`);
        const data = await json.json();

        this.setState({ weather: data });
        console.log(data)
    }


    render() {

        const { weather } = this.state;

        if (!weather.list) {
            return null;
        }

        const weatherToday = weather.list[0];
        const tempDay = weatherToday.temp.day;


        return (

            <div className='weatherCardLEftSide'>
                <section className='container'>

                    <div className="cityName">
                        {weather.city.name}
                    </div>

                    <div className='mainDate'>

                        <h1>
                            {getDateFromDT(weatherToday.dt, 'dddd')} &nbsp;
                            {getDateFromDT(weatherToday.dt, 'D')}
                        </h1>
                        <span>{getDateFromDT(weatherToday.dt, 'MMMM')}</span>

                    </div>
                    <div className='curentTemperature'>
                        <span>{sliceTemp(tempDay)}°</span>
                        <span className='mainIcon'>
                            <Icon size="large" weatherType={weatherToday.weather[0].main.toLowerCase()} />
                        </span>
                    </div>
                </section>
                <WeatherHistoryCards weather={this.state.weather} />
            </div>
        );
    }
}
