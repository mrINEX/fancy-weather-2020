function exist(value) {
  const isExist = document.querySelector(value);
  if (isExist) {
    isExist.remove();
  }
}

function error() {
  const div = document.createElement('div');
  div.innerText = 'NO result:';
  document.querySelector('.searchcityinput').before(div);
}

module.exports = {
  exist,
  error,
};
