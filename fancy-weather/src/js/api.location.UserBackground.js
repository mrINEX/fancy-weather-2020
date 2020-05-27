import { exist } from './exist';

const URL_API = 'https://api.unsplash.com/';
const CLIENT_ID = '87e26779aa6242a2b2fc8e863886185d1d1f07215e4890071e45448baedf8950';

export default function setBackgroundImage(monthtime, weather, city) {
  document.querySelector('.loader').classList.remove('hidden');
  document.querySelector('.weather-default').classList.add('hidden');
  const url = `${URL_API}photos/random?query=${monthtime},${weather},${city}&client_id=${CLIENT_ID}`;
  console.log(`query=${monthtime},${weather},${city} || key: "speak weather" || key volume: "volume 1% - 100%"`);
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      exist('.weather-image');
      exist('.weather-image-height');
      exist('.error-message');
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
    }).catch(() => {
      document.querySelector('.weather-default').classList.remove('hidden');
    });
}
