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

var BulletChartThreshold = function BulletChartThreshold(_ref) {
  var className = _ref.className,
      threshold = _ref.threshold,
      vertical = _ref.vertical,
      percent = _ref.percent,
      maxValue = _ref.maxValue,
      props = _objectWithoutProperties(_ref, ['className', 'threshold', 'vertical', 'percent', 'maxValue']);

  var percentValue = percent ? threshold : threshold / maxValue * 100;

  if (percentValue > 0 && percentValue <= 100) {
    var thresholdClasses = (0, _classnames2.default)('bullet-chart-pf-threshold-indicator', className);
    return _react2.default.createElement('div', _extends({
      className: thresholdClasses,
      style: {
        left: vertical ? undefined : percentValue + '%',
        bottom: vertical ? percentValue + '%' : undefined
      }
    }, props));
  }

  return null;
};

BulletChartThreshold.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Threshold value */
  threshold: _propTypes2.default.number.isRequired,
  /** Vertical chart, default false */
  vertical: _propTypes2.default.bool,
  /** Option to use threshold value as a percentage, default is true */
  percent: _propTypes2.default.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: _propTypes2.default.number
};

BulletChartThreshold.defaultProps = {
  className: '',
  vertical: false,
  percent: true,
  maxValue: 100
};

exports.default = BulletChartThreshold;