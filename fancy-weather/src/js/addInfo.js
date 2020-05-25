import clock from './clock';
import { exist } from './exist';

export default function addInfo(city, language, stopInterval) {
  exist('.error-message');

  clearInterval(stopInterval);
  city.translateInput(language);
  city.infoCity(language);
  city.infoDate(language);
  city.infoWeatherToday(language);
  city.infoWeatherTothreedays(language);
  city.infoMap(language);

  const town = city.city || city.town || city.state || city.country;
  city.infoBackground(city.timeOfDay, city.timeOfYear, town);
  return setInterval(clock, 1000);
}
