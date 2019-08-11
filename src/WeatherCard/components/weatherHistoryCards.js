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


        return (
            <div className='weekHistoryCards'>

                {weatherForecast.map((key, i) => (

                    <div className='historyCard'>
                        <h4 key={i}>{getDateFromDT(weatherForecast[i].dt, 'ddd')}</h4>
                        <Icon size="small" weatherType={weatherForecast[i].weather[0].main.toLowerCase()} />
                        <h5>{sliceTemp(weatherForecast[i].temp.day)}°</h5>
                    </div>

                ))}

            </div>
        );
    }
}

