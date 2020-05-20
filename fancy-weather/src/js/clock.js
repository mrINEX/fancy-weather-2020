function clock() {
  const secondsSpan = document.querySelector('.current-time').children[2];
  if ((Number(secondsSpan.textContent) + 1) % 60 === 0) {
    const minutesSpan = document.querySelector('.current-time').children[1];
    const hourseSpan = document.querySelector('.current-time').children[0];
    if ((Number(minutesSpan.textContent) + 1) % 60 < 10) {
      minutesSpan.textContent = `0${(Number(minutesSpan.textContent) + 1) % 60}`;
    } else {
      minutesSpan.textContent = (Number(minutesSpan.textContent) + 1) % 60;
    }
    if ((Number(minutesSpan.textContent)) % 60 === 0) {
      if ((Number(hourseSpan.textContent) + 1) % 24 < 10) {
        hourseSpan.textContent = `0${(Number(hourseSpan.textContent) + 1) % 24}`;
      } else {
        hourseSpan.textContent = (Number(hourseSpan.textContent) + 1) % 24;
      }
      if ((Number(hourseSpan.textContent)) % 24 === 0) {
        console.log('next day !!!');
      }
    }
  }
  if ((Number(secondsSpan.textContent) + 1) % 60 < 10) {
    secondsSpan.textContent = `0${(Number(secondsSpan.textContent) + 1) % 60}`;
  } else {
    secondsSpan.textContent = (Number(secondsSpan.textContent) + 1) % 60;
  }
}

module.exports = {
  clock,
};
