'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactC3js = require('react-c3js');

var _reactC3js2 = _interopRequireDefault(_reactC3js);

var _ChartConstants = require('./ChartConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LineChart = (0, _ChartConstants.getComposer)('LINE_CHART')(function (_ref) {
  var className = _ref.className,
      type = _ref.type,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, ['className', 'type', 'data']);

  return _react2.default.createElement(_reactC3js2.default, _extends({ className: className, type: type, data: data }, props));
});

exports.default = LineChart;