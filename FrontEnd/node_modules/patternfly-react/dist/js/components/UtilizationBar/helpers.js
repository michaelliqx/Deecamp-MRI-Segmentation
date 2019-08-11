'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.barStyle = exports.mainDivClasses = exports.labelClasses = undefined;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labelClasses = exports.labelClasses = function labelClasses(top) {
  return (0, _classnames2.default)({ 'progress-label-top-right': top, 'progress-label-right': !top }, 'pull-right', 'display-inline-block');
};

var mainDivClasses = exports.mainDivClasses = function mainDivClasses(onSide, userClasses, description, label) {
  return (0, _classnames2.default)({
    'progress-container': onSide && description,
    'progress-description-left': onSide && description,
    'progress-label-right': onSide && label
  }, userClasses, 'utilization-bar-pf');
};

var barStyle = exports.barStyle = function barStyle(thresholdWarning, thresholdError, now) {
  if (thresholdWarning && thresholdError) {
    var style = 'success';
    if (thresholdWarning <= now) {
      style = 'warning';
    }
    if (thresholdError <= now) {
      style = 'danger';
    }
    return style;
  }
  return null;
};