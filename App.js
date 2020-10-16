import React, { useState } from 'react';
import { Apps, SearchBox, SearchBar, Main, Location, Dates, WeatherBox, Weather, Temp } from './App.elements';

const api = {
  key: "ee60336db3c9bef5a094517accdfd392",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(res => res.json()).then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <>
      <Apps>
        <Main>
          <SearchBox>
            <SearchBar
              type="text"
              className="search-bar"
              placeholder="Search...."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </SearchBox>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <Location>{weather.name}, {weather.sys.country}</Location>
                <Dates>{dateBuilder(new Date())}</Dates>
              </div>
              <WeatherBox>
                <Temp>{Math.round(weather.main.temp)}°c</Temp>
                <Weather>{weather.weather[0].main}</Weather>
              </WeatherBox>
            </div>
          ) : ('')}
        </Main>
      </Apps>
    </>
  )
}

export default App;


