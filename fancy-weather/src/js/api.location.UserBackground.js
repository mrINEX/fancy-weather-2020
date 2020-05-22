const URL_API = 'https://api.unsplash.com/';
const CLIENT_ID = '87e26779aa6242a2b2fc8e863886185d1d1f07215e4890071e45448baedf8950';
const { exist } = require('./exist');

function setBackgroundImage(monthtime, weather, city) {
  document.querySelector('.loader').classList.remove('hidden');
  const url = `${URL_API}photos/random?query=${monthtime},${weather},${city}&client_id=${CLIENT_ID}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      exist('.weather-image');
      exist('.weather-image-height');
      const img = document.createElement('img');
      if (result.width > result.height) {
        img.setAttribute('class', 'weather-image weather-opacity');
      } else {
        img.setAttribute('class', 'weather-image-height weather-opacity');
      }
      img.setAttribute('src', `${result.urls.regular}`);
      document.querySelector('.wrapper').append(img);
      img.onload = () => {
        document.querySelector('.loader').classList.add('hidden');
        img.classList.add('weather-opacity-full');
      };
    });
}

module.exports = {
  setBackgroundImage,
};
