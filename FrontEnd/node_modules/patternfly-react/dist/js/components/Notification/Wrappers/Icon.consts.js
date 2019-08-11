'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-throw-literal */
/* eslint-disable no-throw-literal */
var okIcon = 'ok';
var infoIcon = 'info';
var warningIcon = 'warning-triangle-o';
var errorIcon = 'error-circle-o';
var closeIcon = 'close';
var questionSign = 'glyphicon glyphicon-question-sign';

exports.default = function (type) {
  switch (type) {
    case 'ok':
    case 'notice':
    case 'success':
      return okIcon;
    case 'info':
      return infoIcon;
    case 'warning':
      return warningIcon;
    case 'danger':
    case 'error':
      return errorIcon;
    case 'close':
      return closeIcon;
    case 'question-sign':
      return questionSign;
    default:
      throw { error: 'unknown icon type ' + type };
  }
};