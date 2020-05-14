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
  } else {
    document.querySelector('.degreeC').classList.add('degree_active');
  }
}

function currentLanguage() {
  const option = document.querySelector('.language');
  option.value = storageGet('language');
}

module.exports = {
  storageGet,
  currentDegree,
  currentLanguage,
};
