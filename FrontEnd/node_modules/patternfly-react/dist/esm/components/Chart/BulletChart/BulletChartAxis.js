function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var BulletChartAxis = function BulletChartAxis(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var bulletChartAxisClass = classNames('bullet-chart-pf-axis', className);

  return React.createElement(
    'div',
    { className: bulletChartAxisClass },
    children
  );
};

BulletChartAxis.propTypes = {
  /** Children nodes */
  children: PropTypes.node.isRequired,
  /** Additional css classes */
  className: PropTypes.string
};

BulletChartAxis.defaultProps = {
  className: ''
};

export default BulletChartAxis;