'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var showElement = function (elem) {
    elem.style.visibility = 'visible';
    elem.style.opacity = '1';
  };

  var hiddenElement = function (elem) {
    elem.style.visibility = 'hidden';
    elem.style.opacity = '0';
  };

  window.utils = {
    ENTER_KEYCODE: ENTER_KEYCODE,
    ESC_KEYCODE: ESC_KEYCODE,

    showElement: showElement,
    hiddenElement: hiddenElement,

    isEnterEvent: isEnterEvent,
    isEscEvent: isEscEvent
  };
})();
