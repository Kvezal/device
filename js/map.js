'use strict';

(function () {
  var map = document.querySelector('#map');
  var mapOpen = document.querySelector('.info__map');

  var mapOpenClickHandler = function (evt) {
    evt.preventDefault();
    window.utils.showElement(map);
  };

  mapOpen.addEventListener('click', mapOpenClickHandler);

  var mapClose = document.querySelector('#map-close');

  var mapCloseClickHandler = function (evt) {
    evt.preventDefault();
    window.utils.hiddenElement(map);
  };

  mapClose.addEventListener('click', mapCloseClickHandler);
})();
