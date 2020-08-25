import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { API_KEY } from ".././utils";
import AOS from "aos";
import "aos/dist/aos.css";

const WeatherCard = lazy(() => import("../components/WeatherCard/WeatherCard"));


const App = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetchWeatherData();
    AOS.init();
  }, []);

  const fetchWeatherData = async () => {
    const json = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=Odessa&units=metric&cnt=7&appid=${API_KEY}`
    );
    const data = await json.json();
    setWeather(data)
  }


  return (
    <div className='base'>
      {!weather?.city ? (
        <Loader />
      ) : (
          <main
            className='content'
            data-aos='zoom-out'
            data-aos-easing='ease-in-out'>
            <Suspense fallback={'Loading...'} >
              <WeatherCard weather={weather} />
            </Suspense>

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

const Loader = () => {
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

export default App;