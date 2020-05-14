const API_KEY = 'trnsl.1.1.20191212T163559Z.5976e236f00df928.df3aab73e789795377c7f6b4f57195e585fb0e53';
const URL_API = 'https://translate.yandex.net/';

function translate(language, text) {
  const url = `${URL_API}api/v1.5/tr.json/translate?lang=${language}&key=${API_KEY}&text=${text}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result.text);
}

module.exports = {
  translate,
};
