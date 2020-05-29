/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/create */ "./src/js/create.js");
/* harmony import */ var _js_api_locationUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/api.locationUser */ "./src/js/api.locationUser.js");
/* harmony import */ var _js_api_locationUserCountry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/api.locationUserCountry */ "./src/js/api.locationUserCountry.js");
/* harmony import */ var _js_api_locationTimeZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/api.locationTimeZone */ "./src/js/api.locationTimeZone.js");
/* harmony import */ var _js_api_locationUserWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/api.locationUserWeather */ "./src/js/api.locationUserWeather.js");
/* harmony import */ var _js_api_locationUserMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/api.locationUserMap */ "./src/js/api.locationUserMap.js");
/* harmony import */ var _js_api_locationNews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/api.locationNews */ "./src/js/api.locationNews.js");
/* harmony import */ var _js_localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/localStorage */ "./src/js/localStorage.js");
/* harmony import */ var _js_SpeechRecognition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/SpeechRecognition */ "./src/js/SpeechRecognition.js");
/* harmony import */ var _js_location_UserTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/location.UserTime */ "./src/js/location.UserTime.js");
/* harmony import */ var _js_addInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/addInfo */ "./src/js/addInfo.js");
/* harmony import */ var _js_exist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/exist */ "./src/js/exist.js");













window.onload = function () {
  var currentCity;
  var stopInterval;
  var recognition;
  var degree = Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["currentDegree"])(); // *imperial:[F]* or *metric:[C]*

  var language = Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["currentLanguage"])(); // *en* or *ru* or *be*

  Object(_js_api_locationUser__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (city) {
    // start with city
    Object(_js_api_locationUserCountry__WEBPACK_IMPORTED_MODULE_2__["default"])(city).then(function (country) {
      Object(_js_api_locationUserMap__WEBPACK_IMPORTED_MODULE_5__["default"])(country).then(function (map) {
        Object(_js_api_locationTimeZone__WEBPACK_IMPORTED_MODULE_3__["default"])(map).then(function (zone) {
          Object(_js_api_locationUserWeather__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_js_location_UserTime__WEBPACK_IMPORTED_MODULE_9__["default"])(zone), degree).then(function (weather) {
            Object(_js_api_locationNews__WEBPACK_IMPORTED_MODULE_6__["default"])(weather).then(function (City) {
              stopInterval = Object(_js_addInfo__WEBPACK_IMPORTED_MODULE_10__["default"])(City, language, stopInterval);
              currentCity = City;
            });
          });
        });
      });
    });
  })["catch"](_js_exist__WEBPACK_IMPORTED_MODULE_11__["error"]);
  document.querySelector('.searchcityinput').addEventListener('change', function (_ref) {
    var target = _ref.target;
    Object(_js_api_locationUserCountry__WEBPACK_IMPORTED_MODULE_2__["default"])(target.value).then(function (country) {
      Object(_js_api_locationUserMap__WEBPACK_IMPORTED_MODULE_5__["default"])(country).then(function (map) {
        Object(_js_api_locationTimeZone__WEBPACK_IMPORTED_MODULE_3__["default"])(map).then(function (zone) {
          Object(_js_api_locationUserWeather__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_js_location_UserTime__WEBPACK_IMPORTED_MODULE_9__["default"])(zone), degree).then(function (weather) {
            Object(_js_api_locationNews__WEBPACK_IMPORTED_MODULE_6__["default"])(weather).then(function (City) {
              stopInterval = Object(_js_addInfo__WEBPACK_IMPORTED_MODULE_10__["default"])(City, language, stopInterval);
              currentCity = City;
            });
          });
        });
      });
    })["catch"](_js_exist__WEBPACK_IMPORTED_MODULE_11__["error"]);
  });
  document.querySelector('.imgVoice').addEventListener('click', function () {
    if (recognition) {
      document.querySelector('.imgVoice').classList.remove('wave');
      recognition.stop();
      recognition.onend = null;
      recognition = null;
    } else {
      document.querySelector('.imgVoice').classList.add('wave');
      recognition = Object(_js_SpeechRecognition__WEBPACK_IMPORTED_MODULE_8__["default"])(language);

      recognition.onend = function () {
        var result = document.querySelector('.searchcityinput').value;

        if (/speak weather/.test(result)) {
          Object(_js_exist__WEBPACK_IMPORTED_MODULE_11__["say"])('speak weather');
        } else if (/volume/.test(result)) {
          Object(_js_exist__WEBPACK_IMPORTED_MODULE_11__["say"])(result.match(/[0-9]+/));
        } else {
          Object(_js_api_locationUserCountry__WEBPACK_IMPORTED_MODULE_2__["default"])(result).then(function (country) {
            Object(_js_api_locationUserMap__WEBPACK_IMPORTED_MODULE_5__["default"])(country).then(function (map) {
              Object(_js_api_locationTimeZone__WEBPACK_IMPORTED_MODULE_3__["default"])(map).then(function (zone) {
                Object(_js_api_locationUserWeather__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_js_location_UserTime__WEBPACK_IMPORTED_MODULE_9__["default"])(zone), degree).then(function (weather) {
                  Object(_js_api_locationNews__WEBPACK_IMPORTED_MODULE_6__["default"])(weather).then(function (City) {
                    stopInterval = Object(_js_addInfo__WEBPACK_IMPORTED_MODULE_10__["default"])(City, language, stopInterval);
                    currentCity = City;
                  });
                });
              });
            });
          })["catch"](_js_exist__WEBPACK_IMPORTED_MODULE_11__["error"]);
        }

        recognition = null;
        document.querySelector('.imgVoice').classList.remove('wave');
      };
    }
  });
  document.querySelector('.language').addEventListener('change', function (_ref2) {
    var target = _ref2.target;
    Object(_js_exist__WEBPACK_IMPORTED_MODULE_11__["exist"])('.error-message');
    Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["storageSet"])('language', target.value);
    language = Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["currentLanguage"])();
    currentCity.translateInput(language);
    currentCity.transtaleCity(language);
    currentCity.translateNews(language);
    currentCity.dateTime(language);
    currentCity.todayWeatherDescription(language);
    currentCity.tothreedaysWeather.forEach(function (tomorrow) {
      return tomorrow(language);
    });
    currentCity.translateMap(language);
  });
  document.querySelector('.refresh').addEventListener('click', function () {
    var city = currentCity.city || currentCity.town || currentCity.state || currentCity.country;
    currentCity.infoBackground(currentCity.timeOfDay, currentCity.timeOfYear, city);
  });
  document.querySelector('.degrees').addEventListener('click', function (_ref3) {
    var target = _ref3.target;

    switch (target.classList[0]) {
      case 'fahrenheit':
        Object(_js_exist__WEBPACK_IMPORTED_MODULE_11__["exist"])('.error-message');
        Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["storageSet"])('temp', 'imperial');
        degree = Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["currentDegree"])();
        Object(_js_api_locationUserWeather__WEBPACK_IMPORTED_MODULE_4__["default"])(currentCity, 'imperial').then(function (City) {
          currentCity = City;
          currentCity.infoWeatherToday(language);
          currentCity.infoWeatherTothreedays(language);
        });
        break;

      case 'celsius':
        Object(_js_exist__WEBPACK_IMPORTED_MODULE_11__["exist"])('.error-message');
        Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["storageSet"])('temp', 'metric');
        degree = Object(_js_localStorage__WEBPACK_IMPORTED_MODULE_7__["currentDegree"])();
        Object(_js_api_locationUserWeather__WEBPACK_IMPORTED_MODULE_4__["default"])(currentCity, 'metric').then(function (City) {
          currentCity = City;
          currentCity.infoWeatherToday(language);
          currentCity.infoWeatherTothreedays(language);
        });
        break;

      default:
    }
  });
};

/***/ }),

/***/ "./src/js/City.js":
/*!************************!*\
  !*** ./src/js/City.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return City; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _exist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exist */ "./src/js/exist.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate */ "./src/js/translate.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var City = /*#__PURE__*/function () {
  function City(_ref) {
    var geometry = _ref.geometry,
        formatted = _ref.formatted,
        components = _ref.components,
        url = _ref.url;

    _classCallCheck(this, City);

    this.formatted = formatted;
    this.city = components.city;
    this.county = components.county;
    this.country = components.country;
    this.state = components.state;
    this.town = components.town;
    this.map = url;
    this.latitude = geometry.lat;
    this.longitude = geometry.lng;
  }

  _createClass(City, [{
    key: "infoCity",
    value: function infoCity(language) {
      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.today__city');
      var todayCity = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['today__city']
      });
      this.transtaleCity(language).forEach(function (element) {
        return todayCity.append(element);
      });
      document.querySelector('.today').append(todayCity);
    }
  }, {
    key: "infoDate",
    value: function infoDate(language) {
      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.today__date-time');
      var todayTime = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['today__date-time']
      });
      this.dateTime(language).forEach(function (element) {
        return todayTime.append(element);
      });
      document.querySelector('.today').append(todayTime);
    }
  }, {
    key: "infoWeatherToday",
    value: function infoWeatherToday(language) {
      var _this = this;

      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.today__weather');
      var todayWeather = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['today__weather']
      });
      var temp = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
        classList: ['today__temp'],
        innerText: this.todayWeatherTemp
      });
      var image = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
        classList: ['today__image'],
        src: this.todayWeatherIcon
      });
      var description = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['today__description']
      });
      this.todayWeatherDescription(language).forEach(function (element) {
        return description.append(element);
      });
      todayWeather.append(temp, image, description);
      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.today__speak');
      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.today__volume');
      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.today__news');
      var todaySpeak = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['today__speak']
      });
      var todayKey = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
        classList: ['today__volume'],
        innerText: "".concat(Object(_exist__WEBPACK_IMPORTED_MODULE_1__["say"])('get volume'))
      });
      var todayNews = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
        classList: ['today__news']
      });
      Object(_translate__WEBPACK_IMPORTED_MODULE_3__["default"])(language, 'news').then(function (data) {
        todayNews.innerText = data;
      });

      this.translateNews = function (lang) {
        Object(_translate__WEBPACK_IMPORTED_MODULE_3__["default"])(lang, 'news').then(function (data) {
          todayNews.innerText = data;
        });
      };

      todayNews.onclick = function () {
        document.querySelector('.weather').classList.add('event-none');

        _this.infoNews(Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__["storageGet"])('language'));
      };

      todaySpeak.onclick = function () {
        Object(_exist__WEBPACK_IMPORTED_MODULE_1__["say"])('speak weather');
      };

      document.querySelector('.today').append(todayWeather, todayNews, todayKey, todaySpeak);
    }
  }, {
    key: "infoWeatherTothreedays",
    value: function infoWeatherTothreedays(language) {
      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.tothreedays');
      var tothreedays = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['tothreedays']
      });
      this.tothreedaysWeather.forEach(function (element) {
        var tomorrow = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['tothreedays-tomorrow']
        });
        tomorrow.append.apply(tomorrow, _toConsumableArray(element(language)));
        tothreedays.append(tomorrow);
      });
      document.querySelector('.wrapperForWeather').append(tothreedays);
    }
  }, {
    key: "infoMap",
    value: function infoMap(language) {
      Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.geodata');
      var geodata = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['geodata']
      });
      var mapiframe = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('iframe', {
        classList: ['maps'],
        src: this.map
      });
      geodata.append(mapiframe);
      this.translateMap(language).forEach(function (element) {
        return geodata.append(element);
      });
      document.querySelector('.main-weather').append(geodata);
    }
  }, {
    key: "infoNews",
    value: function infoNews(language) {
      var newsBlock = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['news__block']
      });
      var close = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
        classList: ['news__close'],
        innerText: 'x'
      });

      close.onclick = function () {
        document.querySelector('.weather').classList.remove('event-none');
        newsBlock.remove();
      };

      newsBlock.append(close);

      if (this.news) {
        this.news.forEach(function (val) {
          var element = val(language);
          newsBlock.append(element);
        });
      }

      document.querySelector('.weather').after(newsBlock);
    }
  }]);

  return City;
}();



/***/ }),

/***/ "./src/js/SpeechRecognition.js":
/*!*************************************!*\
  !*** ./src/js/SpeechRecognition.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return speechInput; });
function speechInput(language) {
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  var recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.lang = language;

  recognition.onresult = function (event) {
    var speechToText = event.results[0][0].transcript;
    document.querySelector('.searchcityinput').value = speechToText;
  };

  recognition.start();
  return recognition;
}

/***/ }),

/***/ "./src/js/addInfo.js":
/*!***************************!*\
  !*** ./src/js/addInfo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addInfo; });
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/js/clock.js");
/* harmony import */ var _exist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exist */ "./src/js/exist.js");


function addInfo(city, language, stopInterval) {
  Object(_exist__WEBPACK_IMPORTED_MODULE_1__["exist"])('.error-message');
  clearInterval(stopInterval);
  city.translateInput(language);
  city.infoCity(language);
  city.infoDate(language);
  city.infoWeatherToday(language);
  city.infoWeatherTothreedays(language);
  city.infoMap(language);
  var town = city.city || city.town || city.state || city.country;
  city.infoBackground(city.timeOfDay, city.timeOfYear, town);
  return setInterval(_clock__WEBPACK_IMPORTED_MODULE_0__["default"], 1000);
}

/***/ }),

/***/ "./src/js/api.location.UserBackground.js":
/*!***********************************************!*\
  !*** ./src/js/api.location.UserBackground.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setBackgroundImage; });
/* harmony import */ var _exist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exist */ "./src/js/exist.js");

var URL_API = 'https://api.unsplash.com/';
var CLIENT_ID = '87e26779aa6242a2b2fc8e863886185d1d1f07215e4890071e45448baedf8950';
function setBackgroundImage(monthtime, weather, city) {
  document.querySelector('.loader').classList.remove('hidden');
  document.querySelector('.weather-default').classList.add('hidden');
  var url = "".concat(URL_API, "photos/random?query=").concat(monthtime, ",").concat(weather, ",").concat(city, "&client_id=").concat(CLIENT_ID);
  console.log("query=".concat(monthtime, ",").concat(weather, ",").concat(city));
  console.log('озвучить прогноз погоды (voice weather forecast) key: "speak weather"');
  console.log('настройка звука (sound setting) key: "volume 1 - 100%"');
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    var img = document.createElement('img');

    if (result.width > result.height) {
      img.setAttribute('class', 'weather-image weather-opacity');
    } else {
      img.setAttribute('class', 'weather-image-height weather-opacity');
    }

    img.setAttribute('src', "".concat(result.urls.regular));

    img.onload = function () {
      Object(_exist__WEBPACK_IMPORTED_MODULE_0__["exist"])('.weather-image');
      Object(_exist__WEBPACK_IMPORTED_MODULE_0__["exist"])('.weather-image-height');
      Object(_exist__WEBPACK_IMPORTED_MODULE_0__["exist"])('.error-message');
      document.querySelector('.wrapper').append(img);
      document.querySelector('.loader').classList.add('hidden');
      document.querySelector('.main-weather').classList.add('weather-opacity-full');
      img.classList.add('weather-opacity-full');
    };
  })["catch"](function () {
    document.querySelector('.loader').classList.add('hidden');
    document.querySelector('.weather-default').classList.remove('hidden');
  });
}

/***/ }),

/***/ "./src/js/api.locationNews.js":
/*!************************************!*\
  !*** ./src/js/api.locationNews.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNews; });
/* harmony import */ var _translate_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-creator */ "./src/js/translate-creator.js");

var URL_API = 'https://newsapi.org/v2/everything?';
var KEY = '89978571465f433fbbe6d7687b752d92';
var CORSone = 'https://cors-anywhere.herokuapp.com/';
function getNews(City) {
  var country = City.country || City.county || City.formatted;
  var date = City.timeZone.match(/^.+(?=\s)/);
  var url = "".concat(CORSone).concat(URL_API, "q=").concat(country, "&pageSize=7&from=").concat(date, "&apiKey=").concat(KEY);
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    var node = City;
    var newsFuncs = [];
    result.articles.forEach(function (val) {
      var element = Object(_translate_creator__WEBPACK_IMPORTED_MODULE_0__["newsTranslate"])(val);
      newsFuncs.push(element);
    });
    node.news = newsFuncs;
    return node;
  })["catch"](function () {
    return City;
  });
}

/***/ }),

/***/ "./src/js/api.locationTimeZone.js":
/*!****************************************!*\
  !*** ./src/js/api.locationTimeZone.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getZone; });
var API_GATEWAY = 'https://api.timezonedb.com/';
var API_KEY = 'XM23RFKXPW3D';
function getZone(City) {
  var url = "".concat(API_GATEWAY, "v2.1/get-time-zone?key=").concat(API_KEY, "&format=json&by=position&lat=").concat(City.latitude, "&lng=").concat(City.longitude);
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    var node = City;
    node.timeZone = result.formatted;
    return node;
  });
}

/***/ }),

/***/ "./src/js/api.locationUser.js":
/*!************************************!*\
  !*** ./src/js/api.locationUser.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return location; });
var URL_API = 'https://ipinfo.io/';
var TOKEN = '70b477a79140cb';
function location() {
  var url = "".concat(URL_API, "json?token=").concat(TOKEN);
  return fetch(url).then(function (data) {
    return data.json();
  }).then(function (data) {
    return data.city;
  });
}

/***/ }),

/***/ "./src/js/api.locationUserCountry.js":
/*!*******************************************!*\
  !*** ./src/js/api.locationUserCountry.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCountry; });
/* harmony import */ var _translate_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-creator */ "./src/js/translate-creator.js");
/* harmony import */ var _City__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./City */ "./src/js/City.js");


var URL_API = 'https://api.opencagedata.com/';
var KEY = '12ff4fe1ac804a4689043079fcfc5b48';
function getCountry(city) {
  document.querySelector('.main-weather').classList.remove('weather-opacity-full');
  document.querySelector('.loader').classList.remove('hidden');
  var url = "".concat(URL_API, "geocode/v1/json?q=").concat(city, "&key=").concat(KEY, "&pretty=1&no_annotations=1&language=en");
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    var cityInfo = new _City__WEBPACK_IMPORTED_MODULE_1__["default"](result.results[0]);
    cityInfo.placeholderInput = 'Search city';
    cityInfo.valueInput = 'SEARCH';
    cityInfo.translateInput = Object(_translate_creator__WEBPACK_IMPORTED_MODULE_0__["inputTranslate"])(cityInfo);
    cityInfo.transtaleCity = Object(_translate_creator__WEBPACK_IMPORTED_MODULE_0__["cityTranslate"])(cityInfo);
    cityInfo.translateMap = Object(_translate_creator__WEBPACK_IMPORTED_MODULE_0__["mapTranslate"])(cityInfo.latitude, cityInfo.longitude);
    return cityInfo;
  });
}

/***/ }),

/***/ "./src/js/api.locationUserMap.js":
/*!***************************************!*\
  !*** ./src/js/api.locationUserMap.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMap; });
var URL_API = 'https://api.opencagedata.com/';
var KEY = '12ff4fe1ac804a4689043079fcfc5b48';
function getMap(node) {
  var url = "".concat(URL_API, "geocode/v1/map?q=", "".concat(node.latitude, ",").concat(node.longitude), "&key=").concat(KEY, "&pretty=1&no_annotations=1&abbrv=1");
  return fetch(url).then(function (response) {
    return response;
  }).then(function (result) {
    var City = node;
    City.map = result.url;
    return City;
  });
}

/***/ }),

/***/ "./src/js/api.locationUserWeather.js":
/*!*******************************************!*\
  !*** ./src/js/api.locationUserWeather.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWeather; });
/* harmony import */ var _api_location_UserBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.location.UserBackground */ "./src/js/api.location.UserBackground.js");
/* harmony import */ var _translate_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate-creator */ "./src/js/translate-creator.js");


var APPID = 'c6b65e868774bd345d33ca46c70b7a17';
var URL_API_OPENWEATHER = 'https://api.openweathermap.org/';
var URL_API_ICON = 'http://openweathermap.org/'; // imperial [F] metric [C] mph [F] m/s [C]

function getWeather(node, measure) {
  var City = node;
  var url = "".concat(URL_API_OPENWEATHER, "data/2.5/forecast?lat=").concat(City.latitude, "&lon=").concat(City.longitude, "&lang=en&units=").concat(measure, "&APPID=").concat(APPID);
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    City.weatherMain = result.list[0].weather[0].description;
    City.todayWeatherTemp = "".concat(Math.round(result.list[0].main.temp), "\xB0");
    City.todayWeatherIcon = "".concat(URL_API_ICON, "img/wn/").concat(result.list[0].weather[0].icon, "@2x.png");
    City.todayWeatherDescription = Object(_translate_creator__WEBPACK_IMPORTED_MODULE_1__["showToday"])(result, measure);
    City.tothreedaysWeather = [Object(_translate_creator__WEBPACK_IMPORTED_MODULE_1__["showTothreedays"])(result, 8), Object(_translate_creator__WEBPACK_IMPORTED_MODULE_1__["showTothreedays"])(result, 16), Object(_translate_creator__WEBPACK_IMPORTED_MODULE_1__["showTothreedays"])(result, 24)];
    City.infoBackground = _api_location_UserBackground__WEBPACK_IMPORTED_MODULE_0__["default"];
    return City;
  })["catch"](function () {
    return City;
  });
}

/***/ }),

/***/ "./src/js/clock.js":
/*!*************************!*\
  !*** ./src/js/clock.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clock; });
function clock() {
  var hhmmss = document.querySelector('.current-time').children;
  var secondsSpan = hhmmss[2];
  var minutesSpan = hhmmss[1];
  var hourseSpan = hhmmss[0];

  if ((Number(secondsSpan.textContent) + 1) % 60 === 0) {
    if ((Number(minutesSpan.textContent) + 1) % 60 < 10) {
      minutesSpan.textContent = "0".concat((Number(minutesSpan.textContent) + 1) % 60);
    } else {
      minutesSpan.textContent = (Number(minutesSpan.textContent) + 1) % 60;
    }

    if (Number(minutesSpan.textContent) % 60 === 0) {
      if ((Number(hourseSpan.textContent) + 1) % 24 < 10) {
        hourseSpan.textContent = "0".concat((Number(hourseSpan.textContent) + 1) % 24);
      } else {
        hourseSpan.textContent = (Number(hourseSpan.textContent) + 1) % 24;
      }

      if (Number(hourseSpan.textContent) % 24 === 0) {
        window.location.reload();
      }
    }
  }

  if ((Number(secondsSpan.textContent) + 1) % 60 < 10) {
    secondsSpan.textContent = "0".concat((Number(secondsSpan.textContent) + 1) % 60);
  } else {
    secondsSpan.textContent = (Number(secondsSpan.textContent) + 1) % 60;
  }
}

/***/ }),

/***/ "./src/js/create.js":
/*!**************************!*\
  !*** ./src/js/create.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");

var background = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['weather', 'wrapper']
});
var wrapper = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['content']
});
var imageDefault = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
  classList: ['weather-default', 'hidden'],
  src: './src/assets/img/weather-default.jpg'
});
var loader = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['loader']
});
var nav = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', {
  classList: ['nav']
});
var navLeft = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['nav-left']
});
var navRight = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['nav-right']
});
var buttonSwitch = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['switch']
});
var refresh = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['refresh']
});
var buttonLanguage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('select', {
  classList: ['language'],
  name: 'select'
});
var optionEn = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
  classList: ['en'],
  value: 'en',
  innerText: 'EN'
});
var optionRu = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
  classList: ['ru'],
  value: 'ru',
  innerText: 'RU'
});
var optionBe = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
  classList: ['be'],
  value: 'be',
  innerText: 'BE'
});
var buttonFC = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['degrees']
});
var divF = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['degreeF']
});
var divC = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['degreeC']
});
var spanF = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
  classList: ['fahrenheit'],
  innerText: '°F'
});
var spanC = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
  classList: ['celsius'],
  innerText: '°С'
});
var buttonSearch = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['wrappersearch']
});
var inputSearch = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
  classList: ['searchcityinput'],
  placeholder: 'Search city',
  type: 'text'
});
var imgVoice = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
  classList: ['imgVoice'],
  src: './src/assets/img/voiceicon.png'
});
var inputSubmit = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
  classList: ['searchcityclick'],
  value: 'SEARCH',
  type: 'submit'
});
var mainWeather = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['main-weather', 'weather-opacity']
});
var wrapperForWeather = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('main', {
  classList: ['wrapperForWeather']
});
var today = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  classList: ['today']
});
background.append(wrapper, imageDefault, loader);
wrapper.append(nav);
wrapper.append(mainWeather);
mainWeather.append(wrapperForWeather);
nav.append(navLeft);
nav.append(navRight);
navLeft.append(buttonSwitch);
navLeft.append(buttonLanguage);
navLeft.append(buttonFC);
navRight.append(buttonSearch);
wrapperForWeather.append(today);
buttonSwitch.append(refresh);
buttonLanguage.append(optionEn);
buttonLanguage.append(optionRu);
buttonLanguage.append(optionBe);
buttonFC.append(divF);
buttonFC.append(divC);
divF.append(spanF);
divC.append(spanC);
buttonSearch.append(inputSearch);
buttonSearch.append(imgVoice);
buttonSearch.append(inputSubmit);
var keyVoice = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
  innerHTML: "\u043E\u0437\u0432\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u043D\u043E\u0437 \u043F\u043E\u0433\u043E\u0434\u044B (voice weather forecast) key:\n  <strong style=\"color: darkred;\">\"speak weather\"</strong>"
}, {
  'text-align-last': 'center'
});
var keyVolume = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
  innerHTML: "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0437\u0432\u0443\u043A\u0430 (sound setting) key:\n  <strong style=\"color: darkred;\">\"volume 1 - 100%\"</strong>"
}, {
  'text-align-last': 'center'
});
document.querySelector('body').append(background, keyVoice, keyVolume);

/***/ }),

/***/ "./src/js/createElement.js":
/*!*********************************!*\
  !*** ./src/js/createElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createElement(type) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var element = document.createElement(type);
  Object.keys(attributes).forEach(function (key) {
    if (key === 'classList') {
      var _element$classList;

      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(attributes[key]));
    } else if (/data-/.test(key)) {
      element.setAttribute(key, attributes[key]);
    } else {
      element[key] = attributes[key];
    }
  });
  Object.keys(styles).forEach(function (key) {
    element.style[key] = styles[key];
  });
  return element;
}

/***/ }),

/***/ "./src/js/exist.js":
/*!*************************!*\
  !*** ./src/js/exist.js ***!
  \*************************/
/*! exports provided: exist, error, say */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exist", function() { return exist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "say", function() { return say; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function exist(value) {
  var isExist = document.querySelector(value);

  if (isExist) {
    isExist.remove();
  }
}

function error() {
  var isErrorMessage = document.querySelector('.error-message');

  if (!isErrorMessage) {
    var noResult = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      innerText: 'no results',
      classList: ['error-message']
    });
    document.querySelector('.nav-left').after(noResult);
  }

  document.querySelector('.main-weather').classList.add('weather-opacity-full');
  document.querySelector('.loader').classList.add('hidden');
}

var volume = 0.5;
var volumeReadable = '50%';

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
      volume = "0.".concat(vol);
      volumeReadable = "".concat(vol, "%");
      document.querySelector('.today__volume').textContent = "".concat(vol, "%");
    }
  }

  if (vol === 'speak weather') {
    var text = '';
    var temp = document.querySelector('.today__temp');

    if (temp) {
      text += "".concat(temp.textContent, " ");
    }

    var weather = document.querySelector('.today__description');

    if (weather) {
      _toConsumableArray(weather.children).forEach(function (n) {
        text += "".concat(n.textContent.replace(':', ''), ", ");
      });
    }

    var msg = new SpeechSynthesisUtterance(text);
    document.querySelector('.today__speak').classList.add('wave');
    msg.volume = volume;
    msg.onerror = error;

    msg.onend = function () {
      document.querySelector('.today__speak').classList.remove('wave');
    };

    msg.lang = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["currentLanguage"])();
    window.speechSynthesis.speak(msg);
  }

  document.querySelector('.searchcityinput').value = '';
  return 'set';
}



/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/*! exports provided: storageGet, storageSet, currentDegree, currentLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageGet", function() { return storageGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageSet", function() { return storageSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentDegree", function() { return currentDegree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLanguage", function() { return currentLanguage; });
function storageGet(value) {
  if (value === 'language') {
    var language = localStorage.getItem(value);

    if (language) {
      return localStorage.getItem(value);
    }

    return 'en';
  }

  return localStorage.getItem(value);
}

function storageSet(value, data) {
  if (value === 'language') {
    localStorage.setItem(value, data);
  }

  if (value === 'temp') {
    localStorage.setItem(value, data);
  }
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
  var option = document.querySelector('.language');
  var lang = storageGet('language');
  option.value = lang;
  return lang;
}



/***/ }),

/***/ "./src/js/location.UserTime.js":
/*!*************************************!*\
  !*** ./src/js/location.UserTime.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTime; });
/* harmony import */ var _translate_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate-creator */ "./src/js/translate-creator.js");

var MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getTime(node) {
  var today = new Date(node.timeZone);
  var City = node;
  City.dateTime = Object(_translate_creator__WEBPACK_IMPORTED_MODULE_0__["showTimeDate"])(today);
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

/***/ }),

/***/ "./src/js/translate-creator.js":
/*!*************************************!*\
  !*** ./src/js/translate-creator.js ***!
  \*************************************/
/*! exports provided: inputTranslate, cityTranslate, showToday, showTothreedays, showTimeDate, mapTranslate, newsTranslate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTranslate", function() { return inputTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityTranslate", function() { return cityTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToday", function() { return showToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTothreedays", function() { return showTothreedays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTimeDate", function() { return showTimeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapTranslate", function() { return mapTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsTranslate", function() { return newsTranslate; });
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate */ "./src/js/translate.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");


var DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var DAYWEEK_RU = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
var DAYWEEK_BE = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];
var MONTH_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var MONTH_RU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var MONTH_BE = ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Май', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань'];

function inputTranslate(City) {
  return function (language) {
    var placeholderElem = document.querySelector('.searchcityinput');
    var valueElem = document.querySelector('.searchcityclick');

    if (language === 'ru') {
      placeholderElem.placeholder = 'Город поиск';
      valueElem.value = 'ПОИСК';
    } else if (language === 'be') {
      placeholderElem.placeholder = 'Горад пошук';
      valueElem.value = 'ПОШУК';
    } else {
      placeholderElem.placeholder = City.placeholderInput;
      valueElem.value = City.valueInput;
    }
  };
}

function cityTranslate(City) {
  var city = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    innerText: "".concat(City.city || City.town || City.state || City.formatted, ",")
  });
  var country = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    innerText: " ".concat(City.country || City.county || City.formatted)
  });
  return function (language) {
    Object(_translate__WEBPACK_IMPORTED_MODULE_0__["default"])(language, city.textContent).then(function (value) {
      city.innerText = value;
    });
    Object(_translate__WEBPACK_IMPORTED_MODULE_0__["default"])(language, country.textContent).then(function (value) {
      country.innerText = value;
    });
    return [city, country];
  };
}

function showTimeDate(today) {
  var hh = String(today).substring(16, 18);
  var mm = String(today).substring(19, 21);
  var ss = String(today).substring(22, 24);
  var spanDate = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['current-date']
  });
  var spanTime = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['current-time'],
    innerHTML: "<span>".concat(hh, "</span>:<span>").concat(mm, "</span>:<span>").concat(ss, "</span>")
  });
  return function (language) {
    var day;
    var date = String(today).substring(8, 10);
    var month;

    if (language === 'ru') {
      day = DAYWEEK_RU[today.getDay()];
      month = MONTH_RU[today.getMonth()];
    } else if (language === 'be') {
      day = DAYWEEK_BE[today.getDay()];
      month = MONTH_BE[today.getMonth()];
    } else {
      day = DAYWEEK_EN[today.getDay()];
      month = MONTH_EN[today.getMonth()];
    }

    spanDate.innerText = "".concat(day, " ").concat(date, " ").concat(month);
    return [spanDate, spanTime];
  };
}

function showToday(result, measure) {
  var summary = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['today__summary']
  });
  var apparentTemp = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['today__apparentTemp']
  });
  var windSpeed = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['today__windSpeed']
  });
  var humidity = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['today__humidity']
  });
  return function (language) {
    if (language === 'ru') {
      Object(_translate__WEBPACK_IMPORTED_MODULE_0__["default"])(language, result.list[0].weather[0].description).then(function (value) {
        summary.textContent = String(value).toUpperCase();
      });
      apparentTemp.textContent = "\u041E\u0429\u0423\u0429\u0410\u0415\u0422\u0421\u042F \u041A\u0410\u041A: ".concat(result.list[0].main.feels_like, "\xB0");

      if (measure === 'imperial') {
        windSpeed.innerHTML = "\u0412\u0415\u0422\u0415\u0420: ".concat(result.list[0].wind.speed, " \u043C\u0438\u043B\u044C/\u0447");
      } else {
        windSpeed.innerHTML = "\u0412\u0415\u0422\u0415\u0420: ".concat(result.list[0].wind.speed, " \u043C/c");
      }

      humidity.innerHTML = "\u0412\u041B\u0410\u0416\u041D\u041E\u0421\u0422\u042C: ".concat(result.list[0].main.humidity, " %");
    } else if (language === 'be') {
      Object(_translate__WEBPACK_IMPORTED_MODULE_0__["default"])(language, result.list[0].weather[0].description).then(function (value) {
        summary.textContent = String(value).toUpperCase();
      });
      apparentTemp.textContent = "\u0410\u0414\u0427\u0423\u0412\u0410\u0415\u0426\u0426\u0410 \u042F\u041A: ".concat(result.list[0].main.feels_like, "\xB0");

      if (measure === 'imperial') {
        windSpeed.innerHTML = "\u0412\u0415\u0426\u0415\u0420: ".concat(result.list[0].wind.speed, " \u043C\u0456\u043B\u044C/\u0433");
      } else {
        windSpeed.innerHTML = "\u0412\u0415\u0426\u0415\u0420: ".concat(result.list[0].wind.speed, " \u043C/c");
      }

      humidity.innerHTML = "\u0412\u0406\u041B\u042C\u0413\u041E\u0422\u041D\u0410\u0421\u0426\u042C: ".concat(result.list[0].main.humidity, " %");
    } else {
      summary.textContent = result.list[0].weather[0].description.toUpperCase();
      apparentTemp.textContent = "FEELS LIKE: ".concat(result.list[0].main.feels_like, "\xB0");

      if (measure === 'imperial') {
        windSpeed.innerText = "WIND: ".concat(result.list[0].wind.speed, " mph");
      } else {
        windSpeed.innerText = "WIND: ".concat(result.list[0].wind.speed, " m/s");
      }

      humidity.innerText = "HUMIDITY: ".concat(result.list[0].main.humidity, " %");
    }

    return [summary, apparentTemp, windSpeed, humidity];
  };
}

function showTothreedays(result, iweather) {
  var tomorromDay = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['tomorrow-day']
  });
  var tomorromTemp = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['tomorrow-temp'],
    innerText: "".concat(Math.round(result.list[iweather].main.temp), "\xB0")
  });
  var tomorromImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('img', {
    classList: ['tomorrow-image'],
    src: "https://openweathermap.org/img/wn/".concat(result.list[iweather].weather[0].icon, "@2x.png")
  });
  return function (language) {
    if (language === 'ru') {
      tomorromDay.innerText = DAYWEEK_RU[new Date(result.list[iweather].dt_txt).getDay()];
    } else if (language === 'be') {
      tomorromDay.innerText = DAYWEEK_BE[new Date(result.list[iweather].dt_txt).getDay()];
    } else {
      tomorromDay.innerText = DAYWEEK_EN[new Date(result.list[iweather].dt_txt).getDay()];
    }

    return [tomorromDay, tomorromTemp, tomorromImage];
  };
}

function mapTranslate(latInput, lonInput) {
  var lat = "".concat(latInput.toFixed(2).replace('.', '°'), "'");
  var lon = "".concat(lonInput.toFixed(2).replace('.', '°'), "'");
  var latitude = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['latitude']
  });
  var longitude = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('span', {
    classList: ['longitude']
  });
  return function (language) {
    if (language === 'ru') {
      latitude.textContent = "\u0428\u0438\u0440\u043E\u0442\u0430: ".concat(lat);
      longitude.textContent = "\u0414\u043E\u043B\u0433\u043E\u0442\u0430: ".concat(lon);
    } else if (language === 'be') {
      latitude.textContent = "\u0428\u044B\u0440\u0430\u0442\u0430: ".concat(lat);
      longitude.textContent = "\u0414\u0430\u045E\u0433\u0430\u0442\u0430: ".concat(lon);
    } else {
      latitude.textContent = "Latitude: ".concat(lat);
      longitude.textContent = "Longitude: ".concat(lon);
    }

    return [latitude, longitude];
  };
}

function newsTranslate(val) {
  var newsWrapper = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', {
    classList: ['news_wrapper']
  });
  var title = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('h3', {
    classList: ['news__title'],
    innerText: val.title
  });
  var image = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('img', {
    classList: ['news__image'],
    src: val.urlToImage || './src/assets/img/icons-news-ref.png'
  });

  if (val.urlToImage === 'null') {
    image.src = './src/assets/img/icons-news-ref.png';
  }

  var description = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('p', {
    classList: ['news__description'],
    innerHTML: val.description
  });
  var source = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('a', {
    classList: ['news__source'],
    href: val.url,
    innerText: val.source.name
  });
  return function (language) {
    if (title.textContent) {
      Object(_translate__WEBPACK_IMPORTED_MODULE_0__["default"])(language, title.textContent).then(function (data) {
        title.textContent = data;
      });
    }

    if (description.textContent) {
      Object(_translate__WEBPACK_IMPORTED_MODULE_0__["default"])(language, description.textContent).then(function (data) {
        description.innerHTML = data;
      });
    }

    newsWrapper.append(title, source, image, description);
    return newsWrapper;
  };
}



/***/ }),

/***/ "./src/js/translate.js":
/*!*****************************!*\
  !*** ./src/js/translate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return translate; });
var API_KEY = 'trnsl.1.1.20191212T163559Z.5976e236f00df928.df3aab73e789795377c7f6b4f57195e585fb0e53';
var URL_API = 'https://translate.yandex.net/';
function translate(language, text) {
  var url = "".concat(URL_API, "api/v1.5/tr.json/translate?lang=").concat(language, "&key=").concat(API_KEY, "&text=").concat(text);
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result.text;
  });
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map