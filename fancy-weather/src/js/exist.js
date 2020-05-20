function exist(value) {
  const isExist = document.querySelector(value);
  if (isExist) {
    isExist.remove();
  }
}

function error() {
  const strong = 'NO result: ';
  document.querySelector('.searchcityinput').value = `${strong}${document.querySelector('.searchcityinput').value}`;
}

module.exports = {
  exist,
  error,
};
