require('./js/create');
const { currentData } = require('./js/locationUser');
const { dataCity } = require('./js/dataSearch');

window.onload = () => {
  currentData().then((city) => {
    dataCity(city);
  });
};
