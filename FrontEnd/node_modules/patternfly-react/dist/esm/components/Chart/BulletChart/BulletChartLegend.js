var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var BulletChartLegend = function BulletChartLegend(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var bulletChartLegendClass = classNames('bullet-chart-pf-legend', className);

  return React.createElement(
    'div',
    _extends({ className: bulletChartLegendClass }, props),
    children
  );
};

BulletChartLegend.propTypes = {
  /** Children nodes */
  children: PropTypes.node.isRequired,
  /** Additional css classes */
  className: PropTypes.string
};
BulletChartLegend.defaultProps = {
  className: ''
};
export default BulletChartLegend;