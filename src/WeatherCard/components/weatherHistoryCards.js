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

        console.log(weatherForecast);


        return (
            <div className='weekHistoryCards'>

                {weatherForecast.map((day, index) => (

                    <div className='historyCard'>
                        <h4 key={day} >{getDateFromDT(weatherForecast[index].dt, 'ddd')}</h4>
                        <Icon size="small" weatherType={weatherForecast[index].weather[0].main.toLowerCase()} />
                        <h5 >{sliceTemp(weatherForecast[index].temp.day)}°</h5>
                    </div>

                ))}

            </div>
        );
    }
}

