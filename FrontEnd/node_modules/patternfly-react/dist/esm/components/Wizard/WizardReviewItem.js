var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardReviewItem component for Patternfly React
 */
var WizardReviewItem = function WizardReviewItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classNames('wizard-pf-review-item', className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
WizardReviewItem.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardReviewItem.defaultProps = {
  children: null,
  className: ''
};
export default WizardReviewItem;