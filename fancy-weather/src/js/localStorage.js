function storageGet(value) {
  if (value === 'language') {
    const language = localStorage.getItem(value);
    if (language) {
      return localStorage.getItem(value);
    }
    return 'en';
  }
  return localStorage.getItem(value);
}

function currentDegree() {
  if (storageGet('temp') === 'imperial') {
    document.querySelector('.degreeF').classList.add('degree_active');
    document.querySelector('.degreeC').classList.remove('degree_active');
    return 'imperial';
  }
  document.querySelector('.degreeF').classList.remove('degree_active');
  document.querySelector('.degreeC').classList.add('degree_active');
  return 'metric';
}

function currentLanguage() {
  const option = document.querySelector('.language');
  const lang = storageGet('language');
  option.value = lang;
  return lang;
}

module.exports = {
  storageGet,
  currentDegree,
  currentLanguage,
};
