const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function showTime(node) {
  const today = new Date(node.timeZone);
  const City = node;

  City.day = DAYWEEK_EN[today.getDay()];
  City.date = String(today).substring(8, 10);
  City.month = MONTH[today.getMonth()];
  City.time = String(today).substring(16, 21);

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

  if (City.time.slice(0, -3) <= 6) {
    City.timeOfDay = 'night';
  } else if (City.time.slice(0, -3) > 6 && City.time.slice(0, -3) <= 12) {
    City.timeOfDay = 'morning';
  } else if (City.time.slice(0, -3) > 12 && City.time.slice(0, -3) <= 18) {
    City.timeOfDay = 'afternoon';
  } else {
    City.timeOfDay = 'evening';
  }

  node.infoCity();
  node.infoDate();
  node.infoMap();

  return City;
}

module.exports = {
  showTime,
};
