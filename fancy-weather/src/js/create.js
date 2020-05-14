const { createElement } = require('./createElement');

const background = createElement('section', { classList: ['background'] });
const wrapper = createElement('section', { classList: ['wrapper'] });
const nav = createElement('nav', { classList: ['controls'] });
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

const wrapperForWeather = createElement('main', { classList: ['wrapperForWeather'] });
const today = createElement('header', { classList: ['today'] });

const spanCityCountry = createElement('div', { classList: ['cityCountry'] });
const spanCity = createElement('span', { classList: ['city'] });
const spanCountry = createElement('span', { classList: ['country'] });

const spanDate = createElement('span', { classList: ['date'] });
const spanTime = createElement('span', { classList: ['time'] });
const spanTemp = createElement('span', { classList: ['temp'] });
const imgWeather = createElement('img', { classList: ['imgWeather'] });

const divDescription = createElement('div', { classList: ['description'] });
const spanSummaryWeather = createElement('span', { classList: ['summaryWeather'] });
const spanApparentTemp = createElement('span', { classList: ['apparentTemp'] });
const spanWindSpeed = createElement('span', { classList: ['windSpeed'] });
const spanHumidity = createElement('span', { classList: ['humidity'] });

const tothreedays = createElement('section', { classList: ['tothreedays'] });
for (let i = 0; i < 3; i += 1) {
  const wrapperTomorrom = createElement('div', { classList: ['wrapperTomorrom'] });
  const spanDayTomorrom = createElement('span', { classList: [`day${i}`] });
  const spanTempTomorrom = createElement('span', { classList: [`temp${i}`] });
  const imgWeatherTomorrom = createElement('img', { classList: [`iconWeather${i}`] });
  tothreedays.append(wrapperTomorrom);
  wrapperTomorrom.append(spanDayTomorrom);
  wrapperTomorrom.append(spanTempTomorrom);
  wrapperTomorrom.append(imgWeatherTomorrom);
}

const geodata = createElement('section', { classList: ['geodata'] });
const mapiframe = createElement('iframe', { classList: ['maps'] });
const spanLatitude = createElement('span', { classList: ['latitude'] });
const spanLongitude = createElement('span', { classList: ['longitude'] });

background.append(wrapper);
wrapper.append(nav);
wrapper.append(wrapperForWeather);
wrapper.append(geodata);
nav.append(buttonSwitch);
nav.append(buttonLanguage);
nav.append(buttonFC);
nav.append(buttonSearch);
wrapperForWeather.append(today);
wrapperForWeather.append(tothreedays);
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
today.append(spanCityCountry);
today.append(spanDate);
today.append(spanTime);
today.append(spanTemp);
today.append(imgWeather);
today.append(divDescription);
spanCityCountry.append(spanCity);
spanCityCountry.append(spanCountry);
divDescription.append(spanSummaryWeather);
divDescription.append(spanApparentTemp);
divDescription.append(spanWindSpeed);
divDescription.append(spanHumidity);

document.querySelector('body').append(background);
