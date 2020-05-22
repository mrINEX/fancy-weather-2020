const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const { showTimeDate } = require('./translate-creator');

function getTime(node) {
  const today = new Date(node.timeZone);
  const City = node;

  City.dateTime = showTimeDate(today);
  City.day = DAYWEEK_EN[today.getDay()];
  City.date = String(today).substring(8, 10);
  City.month = MONTH[today.getMonth()];
  City.time = String(today).substring(16, 24);

  if (today.getMonth() < 2 || today.getMonth() > 10) {
    City.timeOfYear = 'winter';
  }
  if (today.getMonth() < 5 && today.getMonth() > 1) {
    City.timeOfYear = 'spring';
  }
  if (today.getMonth() < 8 && today.getMonth() > 4) {
    City.timeOfYear = 'summer';
  }
  if (today.getMonth() < 11 && today.getMonth() > 7) {
    City.timeOfYear = 'autumn';
  }

  if (today.getHours() <= 6) {
    City.timeOfDay = 'night';
  } else if (today.getHours() > 6 && today.getHours() <= 12) {
    City.timeOfDay = 'morning';
  } else if (today.getHours() > 12 && today.getHours() <= 18) {
    City.timeOfDay = 'afternoon';
  } else {
    City.timeOfDay = 'evening';
  }

  return City;
}

module.exports = {
  getTime,
};
