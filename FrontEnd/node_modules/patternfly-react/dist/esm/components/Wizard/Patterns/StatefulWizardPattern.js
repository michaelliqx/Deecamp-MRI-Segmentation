var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import WizardPattern from './WizardPattern';
import { wizardStepShape } from './WizardPatternConstants';
import { noop, propOrState, excludeKeys } from '../../../index';

/**
 * StatefulWizardPattern - the Stateful Wizard Pattern component.
 */

var StatefulWizardPattern = function (_React$Component) {
  _inherits(StatefulWizardPattern, _React$Component);

  _createClass(StatefulWizardPattern, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        activeStepIndex: propOrState(nextProps, prevState, 'activeStepIndex')
      };
    }
  }]);

  function StatefulWizardPattern(props) {
    _classCallCheck(this, StatefulWizardPattern);

    var _this = _possibleConstructorReturn(this, (StatefulWizardPattern.__proto__ || Object.getPrototypeOf(StatefulWizardPattern)).call(this, props));

    _this.onStepChanged = function (newStepIndex) {
      var _this$props = _this.props,
          shouldPreventStepChange = _this$props.shouldPreventStepChange,
          steps = _this$props.steps;
      var activeStepIndex = _this.state.activeStepIndex;
      var shouldPreventExit = steps[activeStepIndex].shouldPreventExit;
      var shouldPreventEnter = steps[newStepIndex].shouldPreventEnter;

      if (shouldPreventStepChange(activeStepIndex, newStepIndex) || shouldPreventExit && shouldPreventExit(newStepIndex) || shouldPreventEnter && shouldPreventEnter(activeStepIndex)) {
        return;
      }
      _this.setState({ activeStepIndex: newStepIndex });
    };

    _this.state = { activeStepIndex: 0 };
    return _this;
  }

  _createClass(StatefulWizardPattern, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          shouldDisableNextStep = _props.shouldDisableNextStep,
          shouldDisablePreviousStep = _props.shouldDisablePreviousStep,
          shouldDisableCancelButton = _props.shouldDisableCancelButton,
          otherProps = _objectWithoutProperties(_props, ['shouldDisableNextStep', 'shouldDisablePreviousStep', 'shouldDisableCancelButton']);

      var activeStepIndex = this.state.activeStepIndex;
      // NOTE: the steps array is passed down with ...otherProps, including any shouldPreventEnter or shouldPreventExit functions inside it.
      // These functions are for StatefulWizardPattern only and should not be used in WizardPattern despite being passed down here.

      return React.createElement(WizardPattern, _extends({
        nextStepDisabled: shouldDisableNextStep(activeStepIndex),
        previousStepDisabled: shouldDisablePreviousStep(activeStepIndex),
        cancelButtonDisabled: shouldDisableCancelButton(activeStepIndex)
      }, excludeKeys(otherProps, ['shouldPreventStepChange']), {
        activeStepIndex: activeStepIndex // Value from state, as set by getDerivedStateFromProps
        , onStepChanged: this.onStepChanged
      }));
    }
  }]);

  return StatefulWizardPattern;
}(React.Component);

StatefulWizardPattern.propTypes = _extends({}, excludeKeys(WizardPattern.propTypes, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  steps: PropTypes.arrayOf(PropTypes.shape(_extends({}, wizardStepShape, {
    shouldPreventEnter: PropTypes.func,
    shouldPreventExit: PropTypes.func
  }))),
  shouldDisableNextStep: PropTypes.func,
  shouldDisablePreviousStep: PropTypes.func,
  shouldDisableCancelButton: PropTypes.func,
  shouldPreventStepChange: PropTypes.func
});

StatefulWizardPattern.defaultProps = _extends({}, excludeKeys(WizardPattern.defaultProps, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  shouldDisableNextStep: noop,
  shouldDisablePreviousStep: noop,
  shouldDisableCancelButton: noop,
  shouldPreventStepChange: noop
});

StatefulWizardPattern.displayName = 'StatefulWizardPattern';

export default StatefulWizardPattern;