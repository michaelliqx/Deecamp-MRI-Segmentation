var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger } from '../../OverlayTrigger/index';
import { Tooltip } from '../../Tooltip/index';

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
    return React.createElement(
      Tooltip,
      { id: value.tooltipId || randomId() },
      tipText
    );
  };

  var valueClasses = classNames({
    'bullet-chart-pf-value-dot': dot,
    'bullet-chart-pf-value-bar': !dot
  }, className);

  var valueComponent = void 0;
  if (dot) {
    valueComponent = React.createElement('div', _extends({
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
    valueComponent = React.createElement('div', _extends({
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
  return React.createElement(
    OverlayTrigger,
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
  className: PropTypes.string,
  /** Value */
  value: PropTypes.shape({
    value: PropTypes.number.isRequired,
    title: PropTypes.string,
    color: PropTypes.string,
    tooltipFunction: PropTypes.func,
    tooltipId: PropTypes.string
  }).isRequired,
  /** Option to use value as a percentage, default is true */
  percent: PropTypes.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number,
  /** Previous value (for stacked charts), default 0 */
  prevValue: PropTypes.number,
  /** Display a dot rather than a bar, default false */
  dot: PropTypes.bool,
  /** Vertical chart, default false */
  vertical: PropTypes.bool
};

BulletChartValue.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  prevValue: 0,
  dot: false,
  vertical: false
};

export default BulletChartValue;