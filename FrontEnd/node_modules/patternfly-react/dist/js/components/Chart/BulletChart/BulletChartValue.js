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

var _index = require('../../OverlayTrigger/index');

var _index2 = require('../../Tooltip/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var randomId = function randomId() {
  return Date.now();
};

var BulletChartValue = function BulletChartValue(_ref) {
  var className = _ref.className,
      value = _ref.value,
      percent = _ref.percent,
      maxValue = _ref.maxValue,
      prevValue = _ref.prevValue,
      dot = _ref.dot,
      vertical = _ref.vertical,
      props = _objectWithoutProperties(_ref, ['className', 'value', 'percent', 'maxValue', 'prevValue', 'dot', 'vertical']);

  var usedMax = percent ? 100 : maxValue;
  var percentValue = percent ? value.value + prevValue : (value.value + prevValue) / maxValue * 100;
  var showValue = Math.min(Math.max(percentValue, 0), usedMax * 1.2);

  var TooltipFunction = function TooltipFunction() {
    if (value.tooltipFunction) {
      return value.tooltipFunction(value.value, value.title);
    }

    var tipText = value.title + ': ' + value.value + (percent ? '%' : '');
    return _react2.default.createElement(
      _index2.Tooltip,
      { id: value.tooltipId || randomId() },
      tipText
    );
  };

  var valueClasses = (0, _classnames2.default)({
    'bullet-chart-pf-value-dot': dot,
    'bullet-chart-pf-value-bar': !dot
  }, className);

  var valueComponent = void 0;
  if (dot) {
    valueComponent = _react2.default.createElement('div', _extends({
      className: valueClasses,
      style: {
        left: vertical ? undefined : showValue + '%',
        bottom: vertical ? showValue + '%' : undefined,
        backgroundColor: value.color,
        zIndex: Math.round(100 + showValue)
      }
    }, props));
  } else {
    var prevShowValue = percent ? prevValue : prevValue / maxValue * 100;
    valueComponent = _react2.default.createElement('div', _extends({
      className: valueClasses,
      style: {
        left: vertical ? undefined : prevShowValue + '%',
        width: vertical ? undefined : showValue - prevShowValue + '%',
        bottom: vertical ? prevShowValue + '%' : undefined,
        height: vertical ? showValue - prevShowValue + '%' : undefined,
        backgroundColor: value.color,
        zIndex: Math.round(400 - showValue)
      }
    }, props));
  }
  return _react2.default.createElement(
    _index.OverlayTrigger,
    {
      key: value.title,
      overlay: TooltipFunction(value),
      placement: vertical ? 'right' : 'top',
      trigger: ['hover', 'focus'],
      rootClose: false
    },
    valueComponent
  );
};

BulletChartValue.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Value */
  value: _propTypes2.default.shape({
    value: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string,
    color: _propTypes2.default.string,
    tooltipFunction: _propTypes2.default.func,
    tooltipId: _propTypes2.default.string
  }).isRequired,
  /** Option to use value as a percentage, default is true */
  percent: _propTypes2.default.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: _propTypes2.default.number,
  /** Previous value (for stacked charts), default 0 */
  prevValue: _propTypes2.default.number,
  /** Display a dot rather than a bar, default false */
  dot: _propTypes2.default.bool,
  /** Vertical chart, default false */
  vertical: _propTypes2.default.bool
};

BulletChartValue.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  prevValue: 0,
  dot: false,
  vertical: false
};

exports.default = BulletChartValue;