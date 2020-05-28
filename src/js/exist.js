import createElement from './createElement';
import { currentLanguage } from './localStorage';

function exist(value) {
  const isExist = document.querySelector(value);
  if (isExist) {
    isExist.remove();
  }
}

function error() {
  const isErrorMessage = document.querySelector('.error-message');
  if (!isErrorMessage) {
    const noResult = createElement('div', {
      innerText: 'no results',
      classList: ['error-message'],
    });
    document.querySelector('.nav-left').after(noResult);
  }
  document.querySelector('.main-weather').classList.add('weather-opacity-full');
  document.querySelector('.loader').classList.add('hidden');
}

let volume = 0.5;
let volumeReadable = '50%';
function say(vol) {
  if (vol === 'get volume') {
    return volumeReadable;
  }
  if (/[0-9]/.test(vol)) {
    if (vol < 1) {
      volume = 0.1;
      volumeReadable = '1%';
      document.querySelector('.today__volume').textContent = '1%';
    } else if (vol > 99) {
      volume = 1;
      volumeReadable = '100%';
      document.querySelector('.today__volume').textContent = '100%';
    } else {
      volume = `0.${vol}`;
      volumeReadable = `${vol}%`;
      document.querySelector('.today__volume').textContent = `${vol}%`;
    }
  }
  if (vol === 'speak weather') {
    let text = '';
    const temp = document.querySelector('.today__temp');
    if (temp) { text += `${temp.textContent} `; }
    const weather = document.querySelector('.today__description');
    if (weather) {
      [...weather.children].forEach((n) => {
        text += `${n.textContent.replace(':', '')}, `;
      });
    }
    const msg = new SpeechSynthesisUtterance(text);
    document.querySelector('.today__speak').classList.add('wave');
    msg.volume = volume;
    msg.onerror = error;
    msg.onend = () => {
      document.querySelector('.today__speak').classList.remove('wave');
    };
    msg.lang = currentLanguage();
    window.speechSynthesis.speak(msg);
  }
  document.querySelector('.searchcityinput').value = '';
  return 'set';
}

export {
  exist,
  error,
  say,
};
