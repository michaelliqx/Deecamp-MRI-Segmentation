var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardReviewSubSteps component for Patternfly React
 */
var WizardReviewSubSteps = function WizardReviewSubSteps(_ref) {
  var children = _ref.children,
      className = _ref.className,
      collapsed = _ref.collapsed,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'collapsed']);

  var classes = classNames('wizard-pf-review-substeps', { collapse: collapsed }, className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    React.createElement(
      ListGroup,
      { componentClass: 'ul' },
      children
    )
  );
};
WizardReviewSubSteps.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Step collapsed */
  collapsed: PropTypes.bool
};
WizardReviewSubSteps.defaultProps = {
  children: null,
  className: '',
  collapsed: false
};
export default WizardReviewSubSteps;