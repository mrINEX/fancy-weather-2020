const { createElement } = require('./createElement');

const background = createElement('div', { classList: ['weather', 'wrapper'] });
const wrapper = createElement('div', { classList: ['content'] });
const nav = createElement('nav', { classList: ['nav'] });
const navLeft = createElement('div', { classList: ['nav-left'] });
const navRight = createElement('div', { classList: ['nav-right'] });
const buttonSwitch = createElement('div', { classList: ['switch'] });
const refresh = createElement('div', { classList: ['refresh'] });
const buttonLanguage = createElement('select', {
  classList: ['language'],
  name: 'select',
});
const optionEn = createElement('option', { classList: ['en'], value: 'en', innerText: 'EN' });
const optionRu = createElement('option', { classList: ['ru'], value: 'ru', innerText: 'RU' });
const optionBe = createElement('option', { classList: ['be'], value: 'be', innerText: 'BE' });

const buttonFC = createElement('div', { classList: ['wrappfc'] });
const divF = createElement('div', { classList: ['fahrenheit'] });
const divC = createElement('div', { classList: ['celsius'] });
const spanF = createElement('span', { classList: ['degreeF'], innerText: '°F' });
const spanC = createElement('span', { classList: ['degreeC'], innerText: '°С' });

const buttonSearch = createElement('div', { classList: ['wrappersearch'] });
const inputSearch = createElement('input', {
  classList: ['searchcityinput'],
  placeholder: 'Search city',
  type: 'text',
});
const imgVoice = createElement('img', {
  classList: ['imgVoice'],
  src: './src/assets/img/voiceicon.png',
});
const inputSubmit = createElement('input', {
  classList: ['searchcityclick'],
  value: 'SEARCH',
  type: 'submit',
});

const mainWeather = createElement('div', { classList: ['main-weather'] });
const wrapperForWeather = createElement('main', { classList: ['wrapperForWeather'] });
const today = createElement('div', { classList: ['today'] });
const geodata = createElement('div', { classList: ['geodata'] });
const mapiframe = createElement('iframe', { classList: ['maps'] });
const spanLatitude = createElement('span', { classList: ['latitude'] });
const spanLongitude = createElement('span', { classList: ['longitude'] });

background.append(wrapper);
wrapper.append(nav);
wrapper.append(mainWeather);
mainWeather.append(wrapperForWeather);
mainWeather.append(geodata);
nav.append(navLeft);
nav.append(navRight);
navLeft.append(buttonSwitch);
navLeft.append(buttonLanguage);
navLeft.append(buttonFC);
navRight.append(buttonSearch);
wrapperForWeather.append(today);
geodata.append(mapiframe);
geodata.append(spanLatitude);
geodata.append(spanLongitude);
buttonSwitch.append(refresh);
buttonLanguage.append(optionEn);
buttonLanguage.append(optionRu);
buttonLanguage.append(optionBe);
buttonFC.append(divF);
buttonFC.append(divC);
divF.append(spanF);
divC.append(spanC);
buttonSearch.append(inputSearch);
buttonSearch.append(imgVoice);
buttonSearch.append(inputSubmit);

document.querySelector('body').append(background);
