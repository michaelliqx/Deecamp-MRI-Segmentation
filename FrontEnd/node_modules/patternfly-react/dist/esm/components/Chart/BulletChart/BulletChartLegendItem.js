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

var BulletChartLegendItem = function BulletChartLegendItem(_ref) {
  var className = _ref.className,
      title = _ref.title,
      value = _ref.value,
      color = _ref.color,
      boxClassName = _ref.boxClassName,
      tooltipFunction = _ref.tooltipFunction,
      tooltipId = _ref.tooltipId,
      props = _objectWithoutProperties(_ref, ['className', 'title', 'value', 'color', 'boxClassName', 'tooltipFunction', 'tooltipId']);

  var classes = classNames('bullet-chart-pf-legend-item', className);

  var boxClasses = classNames('bullet-chart-pf-legend-item-box', boxClassName);

  var TooltipFunction = function TooltipFunction() {
    if (tooltipFunction) {
      return tooltipFunction(title, value, color);
    }

    return React.createElement(
      Tooltip,
      { id: tooltipId || randomId() },
      title + ': ' + value + '%'
    );
  };

  return React.createElement(
    OverlayTrigger,
    _extends({
      overlay: TooltipFunction(title, value, color),
      placement: 'top',
      trigger: ['hover', 'focus'],
      rootClose: false
    }, props),
    React.createElement(
      'span',
      { className: classes },
      React.createElement('span', {
        className: boxClasses,
        style: {
          backgroundColor: color
        }
      }),
      React.createElement(
        'span',
        { className: 'bullet-chart-pf-legend-item-text' },
        title
      )
    )
  );
};

BulletChartLegendItem.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Text for the legend item */
  title: PropTypes.string,
  /* Value of the item */
  value: PropTypes.number,
  /* Color for the box */
  color: PropTypes.string,
  /** Additional css classes for the box */
  boxClassName: PropTypes.string,
  /** Tooltip function(title, value, color) to render tooltip contents */
  tooltipFunction: PropTypes.func,
  /** Tooltip ID */
  tooltipId: PropTypes.string
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

export default BulletChartLegendItem;