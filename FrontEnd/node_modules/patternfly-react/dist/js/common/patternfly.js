'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layout = exports.c3ChartDefaults = exports.patternfly = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('patternfly/dist/js/patternfly-settings');

require('patternfly/dist/js/patternfly-settings-charts');

var _breakjs = require('breakjs');

var _breakjs2 = _interopRequireDefault(_breakjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    patternfly = _window.patternfly;

var c3ChartDefaults = patternfly.c3ChartDefaults();

var mockLayout = {
  is: function is(layout) {
    return layout === 'desktop';
  },
  addChangeListener: function addChangeListener() {},
  removeChangeListener: function removeChangeListener() {}
};

var layout = process.env.NODE_ENV === 'test' ? mockLayout : (0, _breakjs2.default)(_extends({ mobile: 0 }, patternfly.pfBreakpoints));

exports.patternfly = patternfly;
exports.c3ChartDefaults = c3ChartDefaults;
exports.layout = layout;