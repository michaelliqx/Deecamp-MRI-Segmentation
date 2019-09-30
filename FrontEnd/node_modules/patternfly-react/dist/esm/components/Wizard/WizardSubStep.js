var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardSubStep component for Patternfly React
 */
var WizardSubStep = function WizardSubStep(_ref) {
  var className = _ref.className,
      subStep = _ref.subStep,
      title = _ref.title,
      activeSubStep = _ref.activeSubStep,
      props = _objectWithoutProperties(_ref, ['className', 'subStep', 'title', 'activeSubStep']);

  var classes = classNames('wizard-pf-step-title-substep', { active: '' + subStep === '' + activeSubStep }, className);
  return React.createElement(
    'span',
    _extends({ className: classes }, props),
    title
  );
};
WizardSubStep.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard sub step for this step */
  subStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The wizard sub step title */
  title: PropTypes.string,
  /** The active step */
  activeSubStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WizardSubStep.defaultProps = {
  className: '',
  subStep: '',
  title: '',
  activeSubStep: ''
};
export default WizardSubStep;