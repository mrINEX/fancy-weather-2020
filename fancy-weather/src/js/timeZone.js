const API_GATEWAY = 'https://api.timezonedb.com/';
const API_KEY = 'XM23RFKXPW3D';

function timeCity(lat, lng) {
  const url = `${API_GATEWAY}v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${lat}&lng=${lng}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result.formatted);
}

module.exports = {
  timeCity,
};
