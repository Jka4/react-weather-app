import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import "./App.css";
import { API_KEY } from ".././utils";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: {} };
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  async fetchWeatherData() {
    const json = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=Odessa&units=metric&cnt=7&appid=${API_KEY}`
    );
    const data = await json.json();

    this.setState({ weather: data });
  }

  render() {
    let data = this.state.weather;
    let dataIsEmpy = Object.keys(data).length > 0;

    return (
      <div className='base'>
        {!dataIsEmpy ? (
          <Loader />
        ) : (
          <main className='content'>
            <WeatherCard weather={this.state.weather} />

            <div className='weatherCardRightSide'>
              <div className='video__background'>
                <video className='video_content' autoPlay muted loop>
                  <source src='./video/wind2.webm' type='video/webm'></source>
                  <source src='./video/wind2.mp4' type='video/mp4'></source>
                </video>
              </div>
            </div>
          </main>
        )}
      </div>
    );
  }
}

let Loader = () => {
  return (
    <div className='loader'>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
