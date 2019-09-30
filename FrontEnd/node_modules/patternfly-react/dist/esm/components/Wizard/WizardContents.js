var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardContents component for Patternfly React
 */
var WizardContents = function WizardContents(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stepIndex = _ref.stepIndex,
      subStepIndex = _ref.subStepIndex,
      activeStepIndex = _ref.activeStepIndex,
      activeSubStepIndex = _ref.activeSubStepIndex,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'stepIndex', 'subStepIndex', 'activeStepIndex', 'activeSubStepIndex']);

  var classes = classNames('wizard-pf-contents', {
    // hide contents if the step is not active
    // OR if we have sub steps and this sub step is not active
    hidden: activeStepIndex !== stepIndex || activeSubStepIndex !== null && activeSubStepIndex !== subStepIndex
  }, className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
WizardContents.propTypes = {
  /** WizardStep nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard step index for these contents */
  stepIndex: PropTypes.number.isRequired,
  /** The wizard sub step index for these contents */
  subStepIndex: PropTypes.number,
  /** The active wizard step index */
  activeStepIndex: PropTypes.number.isRequired,
  /** The active wizard sub step index */
  activeSubStepIndex: PropTypes.number
};
WizardContents.defaultProps = {
  children: null,
  className: '',
  subStepIndex: null,
  activeSubStepIndex: null
};
export default WizardContents;