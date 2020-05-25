import clock from './clock';

export default function addInfo(city, language, stopInterval) {
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
