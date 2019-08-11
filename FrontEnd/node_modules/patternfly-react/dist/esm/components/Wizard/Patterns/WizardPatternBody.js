var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { noop, EmptyState, Spinner, Wizard } from '../../../index';
import { wizardStepShape } from './WizardPatternConstants';

/**
 * WizardPatternBody - the Wizard Pattern Body component.
 */
var WizardPatternBody = function WizardPatternBody(_ref) {
  var loading = _ref.loading,
      steps = _ref.steps,
      activeStepIndex = _ref.activeStepIndex,
      goToStep = _ref.goToStep,
      loadingTitle = _ref.loadingTitle,
      loadingMessage = _ref.loadingMessage,
      activeStepStr = _ref.activeStepStr;

  if (loading) {
    return React.createElement(
      Wizard.Row,
      null,
      React.createElement(
        Wizard.Main,
        null,
        React.createElement(
          EmptyState,
          null,
          React.createElement(Spinner, { size: 'lg', className: 'blank-slate-pf-icon', loading: true }),
          React.createElement(
            EmptyState.Action,
            null,
            React.createElement(
              'h3',
              null,
              loadingTitle
            )
          ),
          React.createElement(
            EmptyState.Action,
            { secondary: true },
            React.createElement(
              'p',
              null,
              loadingMessage
            )
          )
        )
      )
    );
  }

  var stepProps = function stepProps(stepIndex, title) {
    var label = (stepIndex + 1).toString();
    return {
      key: 'wizard-step-' + title,
      stepIndex: stepIndex,
      label: label,
      step: label,
      title: title,
      activeStep: activeStepStr
    };
  };

  if (steps && steps.length) {
    var step = steps[activeStepIndex];

    var renderedStep = step && step.render && step.render(activeStepIndex, step.title);

    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Wizard.Steps, {
        steps: steps.map(function (stepObj, index) {
          return React.createElement(Wizard.Step, _extends({}, stepProps(index, stepObj.title), { onClick: function onClick() {
              return goToStep(index);
            } }));
        })
      }),
      React.createElement(
        Wizard.Row,
        null,
        React.createElement(
          Wizard.Main,
          null,
          React.createElement(
            Wizard.Contents,
            { stepIndex: activeStepIndex, activeStepIndex: activeStepIndex },
            renderedStep
          )
        )
      )
    );
  }
  return null;
};

WizardPatternBody.propTypes = {
  loadingTitle: PropTypes.string,
  loadingMessage: PropTypes.string,
  loading: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.shape(wizardStepShape)),
  activeStepIndex: PropTypes.number,
  activeStepStr: PropTypes.string,
  goToStep: PropTypes.func
};

WizardPatternBody.defaultProps = {
  loadingTitle: 'Loading Wizard...',
  loadingMessage: 'Loading...',
  loading: false,
  steps: [],
  activeStepIndex: 0,
  activeStepStr: '1',
  goToStep: noop
};

export default WizardPatternBody;