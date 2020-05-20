const { clock } = require('./clock');

function addInfo(city, language, stopInterval) {
  clearInterval(stopInterval);
  city.translateInput(language);
  city.infoCity(language);
  city.infoDate(language);
  city.infoWeatherToday(language);
  city.infoWeatherTothreedays(language);
  city.infoMap(language);
  city.infoBackground(city.timeOfDay, city.weatherMain, city.city || city.state || city.country);
  return setInterval(clock, 1000);
}

module.exports = {
  addInfo,
};
