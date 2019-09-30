var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';

/**
 * WizardStep component for Patternfly React
 */
var WizardStep = function WizardStep(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stepIndex = _ref.stepIndex,
      step = _ref.step,
      label = _ref.label,
      title = _ref.title,
      activeStep = _ref.activeStep,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'stepIndex', 'step', 'label', 'title', 'activeStep', 'onClick']);

  var classes = classNames('wizard-pf-step', { active: '' + step === '' + activeStep }, className);
  return React.createElement(
    'li',
    _extends({ className: classes }, props),
    React.createElement(
      'a',
      {
        href: '#',
        onClick: function onClick(e) {
          e.preventDefault();
          _onClick(stepIndex);
        }
      },
      React.createElement(
        'span',
        { className: 'wizard-pf-step-number' },
        label
      ),
      React.createElement(
        'span',
        { className: 'wizard-pf-step-title' },
        title
      ),
      children
    )
  );
};
WizardStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard step index */
  stepIndex: PropTypes.number.isRequired,
  /** The wizard step for this step */
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The wizard step number label */
  label: PropTypes.string,
  /** The wizard step title */
  title: PropTypes.string,
  /** The active step */
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Step click handler */
  onClick: PropTypes.func
};
WizardStep.defaultProps = {
  children: null,
  className: '',
  step: '',
  label: '',
  title: '',
  activeStep: '',
  onClick: noop
};
export default WizardStep;