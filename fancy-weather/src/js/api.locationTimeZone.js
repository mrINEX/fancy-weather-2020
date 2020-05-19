const API_GATEWAY = 'https://api.timezonedb.com/';
const API_KEY = 'XM23RFKXPW3D';

function getZone(City) {
  const url = `${API_GATEWAY}v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${City.latitude}&lng=${City.longitude}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const node = City;
      node.timeZone = result.formatted;
      return node;
    });
}

module.exports = {
  getZone,
};
