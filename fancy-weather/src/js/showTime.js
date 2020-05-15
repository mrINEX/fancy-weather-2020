const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const OF_YEAR = ['winter', 'spring', 'summer', 'autumn'];
const { translate } = require('./translate');
const { createElement } = require('./createElement');

function showTime(data) {
  const today = new Date(data);
  const date = `${DAYWEEK_EN[today.getDay()]} ${String(today).substring(8, 10)} ${MONTH[today.getMonth()]}`;
  const time = String(today).substring(16, 21);
  const todayTime = createElement('div', { classList: ['today__date-time'] });
  const spanDate = createElement('span');
  const spanTime = createElement('span', { classList: ['current-time'] });
  todayTime.append(spanDate, spanTime);
  spanDate.textContent = date;
  spanTime.textContent = time;

  function years() {
    if (today.getMonth() < 2 || today.getMonth() > 10) {
      return OF_YEAR[0];
    }
    if (today.getMonth() < 5 && today.getMonth() > 1) {
      return OF_YEAR[1];
    }
    if (today.getMonth() < 8 && today.getMonth() > 4) {
      return OF_YEAR[2];
    }
    // if (today.getMonth() < 11 && today.getMonth() > 7) {
    return OF_YEAR[2];
    // }
  }

  document.querySelector('.today').append(todayTime);

  if (time.slice(0, -3) <= 6) {
    return `night,${years()}`;
  }
  if (time.slice(0, -3) > 6 && time.slice(0, -3) <= 12) {
    return `morning,${years()}`;
  }
  if (time.slice(0, -3) > 12 && time.slice(0, -3) <= 18) {
    return `afternoon,${years()}`;
  }
  return `evening,${years()}`;
}

module.exports = {
  showTime,
};
