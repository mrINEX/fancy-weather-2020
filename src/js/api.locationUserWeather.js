import setBackgroundImage from './api.location.UserBackground';
import { showToday, showTothreedays } from './translate-creator';

const APPID = 'c6b65e868774bd345d33ca46c70b7a17';
const URL_API_OPENWEATHER = 'https://api.openweathermap.org/';
const URL_API_ICON = 'http://openweathermap.org/';

// imperial [F] metric [C] mph [F] m/s [C]
export default function getWeather(node, measure) {
  const City = node;
  const url = `${URL_API_OPENWEATHER}data/2.5/forecast?lat=${City.latitude}&lon=${City.longitude}&lang=en&units=${measure}&APPID=${APPID}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      City.weatherMain = result.list[0].weather[0].description;
      City.todayWeatherTemp = `${Math.round(result.list[0].main.temp)}°`;
      City.todayWeatherIcon = `${URL_API_ICON}img/wn/${result.list[0].weather[0].icon}@2x.png`;
      City.todayWeatherDescription = showToday(result, measure);
      City.tothreedaysWeather = [showTothreedays(result, 8),
        showTothreedays(result, 16),
        showTothreedays(result, 24)];
      City.infoBackground = setBackgroundImage;
      return City;
    }).catch(() => City);
}
