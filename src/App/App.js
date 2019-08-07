import React from 'react';
import './App.css';

import WeatherCard from '../WeatherCard/index';

function App() {
  return (
    <div className="base">
      <main className="content">
        <WeatherCard />

        <div className='weatherCardRightSide'>
        <img src="./wind2.gif" className='willer' alt="windwiller" />
        </div>

      </main>
    </div>
  );
}

export default App;
