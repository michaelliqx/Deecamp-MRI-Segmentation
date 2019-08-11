var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var BulletChartThreshold = function BulletChartThreshold(_ref) {
  var className = _ref.className,
      threshold = _ref.threshold,
      vertical = _ref.vertical,
      percent = _ref.percent,
      maxValue = _ref.maxValue,
      props = _objectWithoutProperties(_ref, ['className', 'threshold', 'vertical', 'percent', 'maxValue']);

  var percentValue = percent ? threshold : threshold / maxValue * 100;

  if (percentValue > 0 && percentValue <= 100) {
    var thresholdClasses = classNames('bullet-chart-pf-threshold-indicator', className);
    return React.createElement('div', _extends({
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
  className: PropTypes.string,
  /** Threshold value */
  threshold: PropTypes.number.isRequired,
  /** Vertical chart, default false */
  vertical: PropTypes.bool,
  /** Option to use threshold value as a percentage, default is true */
  percent: PropTypes.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number
};

BulletChartThreshold.defaultProps = {
  className: '',
  vertical: false,
  percent: true,
  maxValue: 100
};

export default BulletChartThreshold;