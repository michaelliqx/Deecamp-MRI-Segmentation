'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

var _WizardPatternConstants = require('./WizardPatternConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(
      _index.Wizard.Row,
      null,
      _react2.default.createElement(
        _index.Wizard.Main,
        null,
        _react2.default.createElement(
          _index.EmptyState,
          null,
          _react2.default.createElement(_index.Spinner, { size: 'lg', className: 'blank-slate-pf-icon', loading: true }),
          _react2.default.createElement(
            _index.EmptyState.Action,
            null,
            _react2.default.createElement(
              'h3',
              null,
              loadingTitle
            )
          ),
          _react2.default.createElement(
            _index.EmptyState.Action,
            { secondary: true },
            _react2.default.createElement(
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

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_index.Wizard.Steps, {
        steps: steps.map(function (stepObj, index) {
          return _react2.default.createElement(_index.Wizard.Step, _extends({}, stepProps(index, stepObj.title), { onClick: function onClick() {
              return goToStep(index);
            } }));
        })
      }),
      _react2.default.createElement(
        _index.Wizard.Row,
        null,
        _react2.default.createElement(
          _index.Wizard.Main,
          null,
          _react2.default.createElement(
            _index.Wizard.Contents,
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
  loadingTitle: _propTypes2.default.string,
  loadingMessage: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape(_WizardPatternConstants.wizardStepShape)),
  activeStepIndex: _propTypes2.default.number,
  activeStepStr: _propTypes2.default.string,
  goToStep: _propTypes2.default.func
};

WizardPatternBody.defaultProps = {
  loadingTitle: 'Loading Wizard...',
  loadingMessage: 'Loading...',
  loading: false,
  steps: [],
  activeStepIndex: 0,
  activeStepStr: '1',
  goToStep: _index.noop
};

exports.default = WizardPatternBody;