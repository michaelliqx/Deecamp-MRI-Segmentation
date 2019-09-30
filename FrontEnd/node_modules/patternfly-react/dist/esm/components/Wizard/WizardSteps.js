var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardSteps component for Patternfly React
 */
var WizardSteps = function WizardSteps(_ref) {
  var steps = _ref.steps,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['steps', 'className']);

  var classes = classNames('wizard-pf-steps', className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    React.createElement(
      'ul',
      { className: 'wizard-pf-steps-indicator' },
      steps
    )
  );
};
WizardSteps.propTypes = {
  /** WizardStep nodes */
  steps: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardSteps.defaultProps = {
  steps: null,
  className: ''
};
export default WizardSteps;