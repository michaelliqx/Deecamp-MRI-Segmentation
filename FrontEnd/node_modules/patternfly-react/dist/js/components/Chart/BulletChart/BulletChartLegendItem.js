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

var BulletChartLegendItem = function BulletChartLegendItem(_ref) {
  var className = _ref.className,
      title = _ref.title,
      value = _ref.value,
      color = _ref.color,
      boxClassName = _ref.boxClassName,
      tooltipFunction = _ref.tooltipFunction,
      tooltipId = _ref.tooltipId,
      props = _objectWithoutProperties(_ref, ['className', 'title', 'value', 'color', 'boxClassName', 'tooltipFunction', 'tooltipId']);

  var classes = (0, _classnames2.default)('bullet-chart-pf-legend-item', className);

  var boxClasses = (0, _classnames2.default)('bullet-chart-pf-legend-item-box', boxClassName);

  var TooltipFunction = function TooltipFunction() {
    if (tooltipFunction) {
      return tooltipFunction(title, value, color);
    }

    return _react2.default.createElement(
      _index2.Tooltip,
      { id: tooltipId || randomId() },
      title + ': ' + value + '%'
    );
  };

  return _react2.default.createElement(
    _index.OverlayTrigger,
    _extends({
      overlay: TooltipFunction(title, value, color),
      placement: 'top',
      trigger: ['hover', 'focus'],
      rootClose: false
    }, props),
    _react2.default.createElement(
      'span',
      { className: classes },
      _react2.default.createElement('span', {
        className: boxClasses,
        style: {
          backgroundColor: color
        }
      }),
      _react2.default.createElement(
        'span',
        { className: 'bullet-chart-pf-legend-item-text' },
        title
      )
    )
  );
};

BulletChartLegendItem.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Text for the legend item */
  title: _propTypes2.default.string,
  /* Value of the item */
  value: _propTypes2.default.number,
  /* Color for the box */
  color: _propTypes2.default.string,
  /** Additional css classes for the box */
  boxClassName: _propTypes2.default.string,
  /** Tooltip function(title, value, color) to render tooltip contents */
  tooltipFunction: _propTypes2.default.func,
  /** Tooltip ID */
  tooltipId: _propTypes2.default.string
};

BulletChartLegendItem.defaultProps = {
  className: '',
  title: '',
  value: 0,
  color: undefined,
  boxClassName: '',
  tooltipFunction: undefined,
  tooltipId: undefined
};

exports.default = BulletChartLegendItem;