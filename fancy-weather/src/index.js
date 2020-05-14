require('./js/create');
const { currentData } = require('./js/locationUser');
const { dataCity } = require('./js/dataSearch');
const { timeCity } = require('./js/timeZone');
const { storageGet, currentDegree, currentLanguage } = require('./js/localStorage');
const { getElement } = require('./js/getElement');
const { weatherUser } = require('./js/weatherUser');
const { showTime } = require('./js/showTime');
const { setBackgroundImage } = require('./js/setBackgroundImage');
const { mapUser } = require('./js/mapUser');

const locations = [];
const search = [];

window.onload = () => {
  currentDegree();
  currentLanguage();
  currentData().then((city) => {
    dataCity(city).then((location) => {
      locations.push(location.lat, location.lng);
      mapUser(`${location.lat},${location.lng}`);
      timeCity(location.lat, location.lng).then((currentTime) => {
        const month = showTime(currentTime);
        if (getElement('.degreeC').classList.contains('degree_active')) {
          weatherUser(location.lat, location.lng, 'metric').then((description) => {
            search.push(month, description);
            setBackgroundImage(month, description, city);
          });
        } else {
          weatherUser(location.lat, location.lng, 'imperial').then((description) => {
            search.push(month, description);
            setBackgroundImage(month, description, city);
          });
        }
      });
    });
  });
};
