'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BulletChartRange = function BulletChartRange(_ref) {
  var className = _ref.className,
      value = _ref.value,
      percent = _ref.percent,
      maxValue = _ref.maxValue,
      index = _ref.index,
      color = _ref.color,
      vertical = _ref.vertical,
      props = _objectWithoutProperties(_ref, ['className', 'value', 'percent', 'maxValue', 'index', 'color', 'vertical']);

  var rangeClasses = (0, _classnames2.default)('bullet-chart-pf-range-bar', 'range-' + index, className);
  if (value > 0 && (percent ? value <= 100 : value <= maxValue)) {
    var showValue = percent ? value : value / maxValue * 100;
    var rangeStyle = {
      width: vertical ? undefined : showValue + '%',
      height: vertical ? showValue + '%' : undefined,
      zIndex: Math.round(100 - showValue)
    };
    if (color) {
      rangeStyle.backgroundColor = color;
    }
    return _react2.default.createElement('div', _extends({ className: rangeClasses, style: rangeStyle }, props));
  }

  return null;
};

BulletChartRange.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** End value for the range */
  value: _propTypes2.default.number.isRequired,
  /** Option to use end value as a percentage, default is true */
  percent: _propTypes2.default.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: _propTypes2.default.number,
  /** Index for the range (1-3) */
  index: _propTypes2.default.number.isRequired,
  /** Optional color for the range, should use defaults but provided for flexibility */
  color: _propTypes2.default.string,
  /** Vertical chart, default false */
  vertical: _propTypes2.default.bool
};

BulletChartRange.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  color: '',
  vertical: false
};

exports.default = BulletChartRange;