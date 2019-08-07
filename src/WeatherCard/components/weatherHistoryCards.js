import React from 'react';
import Icon from '../../Icon/index';
import { getDateFromDT, sliceTemp } from '../../utils';



export default class WeatherHistoryCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { weather: {} };
    }



    render() {

        const { weather } = this.props;


        const weatherForecast = weather.list;
        const weatherToday = weather.list[0];
        // const tempDay = weatherToday.temp.day;

        // console.log(weatherToday);


        return (
            <div className='weekHistoryCards'>


                {weatherForecast.map((keyName, i) => (

                    <div className='historyCard'>
                        <h4>{getDateFromDT(weatherForecast[i].dt, 'ddd')}</h4>
                        <Icon size="small" weatherType={weatherToday.weather[0].main.toLowerCase()} />
                        <h5>{sliceTemp(weatherForecast[i].temp.day)}°</h5>
                    </div>

                ))}


            </div>
        );
    }
}

