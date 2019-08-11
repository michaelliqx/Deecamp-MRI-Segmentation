var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardSidebarGroup component for Patternfly React
 */
var WizardSidebarGroup = function WizardSidebarGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      step = _ref.step,
      activeStep = _ref.activeStep,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'step', 'activeStep']);

  var classes = classNames({ hidden: '' + step !== '' + activeStep }, className);
  return React.createElement(
    ListGroup,
    _extends({ componentClass: 'ul', className: classes }, props),
    children
  );
};
WizardSidebarGroup.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard step number for this step */
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The active step */
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WizardSidebarGroup.defaultProps = {
  children: null,
  className: '',
  step: '',
  activeStep: ''
};
export default WizardSidebarGroup;