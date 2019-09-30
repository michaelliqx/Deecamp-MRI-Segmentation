var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardSidebar component for Patternfly React
 */
var WizardSidebar = function WizardSidebar(_ref) {
  var items = _ref.items,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['items', 'className']);

  var classes = classNames('wizard-pf-sidebar', className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    items
  );
};
WizardSidebar.propTypes = {
  /** Wizard sidebar items */
  items: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardSidebar.defaultProps = {
  items: null,
  className: ''
};
export default WizardSidebar;