const URL_API = 'https://ipinfo.io/';
const TOKEN = '70b477a79140cb';

function currentData() {
  const url = `${URL_API}json?token=${TOKEN}`;
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data.city);
}

module.exports = {
  currentData,
};
