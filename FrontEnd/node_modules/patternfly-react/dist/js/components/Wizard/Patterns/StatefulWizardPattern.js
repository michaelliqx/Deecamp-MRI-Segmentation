'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WizardPattern = require('./WizardPattern');

var _WizardPattern2 = _interopRequireDefault(_WizardPattern);

var _WizardPatternConstants = require('./WizardPatternConstants');

var _index = require('../../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * StatefulWizardPattern - the Stateful Wizard Pattern component.
 */
var StatefulWizardPattern = function (_React$Component) {
  _inherits(StatefulWizardPattern, _React$Component);

  _createClass(StatefulWizardPattern, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        activeStepIndex: (0, _index.propOrState)(nextProps, prevState, 'activeStepIndex')
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

      return _react2.default.createElement(_WizardPattern2.default, _extends({
        nextStepDisabled: shouldDisableNextStep(activeStepIndex),
        previousStepDisabled: shouldDisablePreviousStep(activeStepIndex),
        cancelButtonDisabled: shouldDisableCancelButton(activeStepIndex)
      }, (0, _index.excludeKeys)(otherProps, ['shouldPreventStepChange']), {
        activeStepIndex: activeStepIndex // Value from state, as set by getDerivedStateFromProps
        , onStepChanged: this.onStepChanged
      }));
    }
  }]);

  return StatefulWizardPattern;
}(_react2.default.Component);

StatefulWizardPattern.propTypes = _extends({}, (0, _index.excludeKeys)(_WizardPattern2.default.propTypes, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape(_extends({}, _WizardPatternConstants.wizardStepShape, {
    shouldPreventEnter: _propTypes2.default.func,
    shouldPreventExit: _propTypes2.default.func
  }))),
  shouldDisableNextStep: _propTypes2.default.func,
  shouldDisablePreviousStep: _propTypes2.default.func,
  shouldDisableCancelButton: _propTypes2.default.func,
  shouldPreventStepChange: _propTypes2.default.func
});

StatefulWizardPattern.defaultProps = _extends({}, (0, _index.excludeKeys)(_WizardPattern2.default.defaultProps, ['activeStepIndex', 'nextStepDisabled', 'previousStepDisabled', 'cancelButtonDisabled']), {
  shouldDisableNextStep: _index.noop,
  shouldDisablePreviousStep: _index.noop,
  shouldDisableCancelButton: _index.noop,
  shouldPreventStepChange: _index.noop
});

StatefulWizardPattern.displayName = 'StatefulWizardPattern';

exports.default = StatefulWizardPattern;