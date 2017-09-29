'use strict';

(function () {
  var feedback = document.querySelector('.form-feedback');
  var buttonFeedbackOpen = document.querySelector('#write-us');

  var buttonFeedbackOpenClickHandler = function (evt) {
    evt.preventDefault();
    window.utils.showElement(feedback);
  };

  buttonFeedbackOpen.addEventListener('click', buttonFeedbackOpenClickHandler);

  var buttonFeedbackClose = feedback.querySelector('.btn__close');

  var buttonFeedbackCloseClickHandler = function (evt) {
    evt.preventDefault();
    window.utils.hiddenElement(feedback);
  };

  buttonFeedbackClose.addEventListener('click', buttonFeedbackCloseClickHandler);

  var buttomFeedbackSubmit = feedback.querySelector('.form-feedback__btn');
  var fieldName = feedback.querySelector('#field-name');
  var fieldEmail = feedback.querySelector('#field-email');
  var fieldComment = feedback.querySelector('#field-comment');

  var checkValidField = function (field) {
    field.style.backgroundColor = '';

    if (!field.validity.valid) {
      field.style.backgroundColor = '#f6dada';
    }

    return field.validity.valid;
  };

  var buttomFeedbackSubmitClickHandler = function (evt) {
    if (checkValidField(fieldName)) {
      evt.preventDefault();
    }

    if (checkValidField(fieldEmail)) {
      evt.preventDefault();
    }

    if (checkValidField(fieldComment)) {
      evt.preventDefault();
    }

    if (!checkValidField(fieldName) || !checkValidField(fieldEmail) || !checkValidField(fieldComment)) {
      return;
    }

    feedback.reset();
  };

  buttomFeedbackSubmit.addEventListener('click', buttomFeedbackSubmitClickHandler);
})();
