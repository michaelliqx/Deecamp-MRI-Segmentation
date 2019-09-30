var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var BulletChartTitle = function BulletChartTitle(_ref) {
  var className = _ref.className,
      label = _ref.label,
      details = _ref.details,
      props = _objectWithoutProperties(_ref, ['className', 'label', 'details']);

  var titleContainerClasses = classNames('bullet-chart-pf-title-container', className);

  return React.createElement(
    'div',
    _extends({ className: titleContainerClasses }, props),
    React.createElement(
      'div',
      { className: 'bullet-chart-pf-title' },
      label
    ),
    React.createElement(
      'div',
      { className: 'bullet-chart-pf-details' },
      details
    )
  );
};

BulletChartTitle.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Details text */
  details: PropTypes.string
};

BulletChartTitle.defaultProps = {
  className: '',
  label: '',
  details: ''
};

export default BulletChartTitle;