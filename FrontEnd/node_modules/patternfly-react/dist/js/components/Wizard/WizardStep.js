'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  var classes = (0, _classnames2.default)('wizard-pf-step', { active: '' + step === '' + activeStep }, className);
  return _react2.default.createElement(
    'li',
    _extends({ className: classes }, props),
    _react2.default.createElement(
      'a',
      {
        href: '#',
        onClick: function onClick(e) {
          e.preventDefault();
          _onClick(stepIndex);
        }
      },
      _react2.default.createElement(
        'span',
        { className: 'wizard-pf-step-number' },
        label
      ),
      _react2.default.createElement(
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
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** The wizard step index */
  stepIndex: _propTypes2.default.number.isRequired,
  /** The wizard step for this step */
  step: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** The wizard step number label */
  label: _propTypes2.default.string,
  /** The wizard step title */
  title: _propTypes2.default.string,
  /** The active step */
  activeStep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** Step click handler */
  onClick: _propTypes2.default.func
};
WizardStep.defaultProps = {
  children: null,
  className: '',
  step: '',
  label: '',
  title: '',
  activeStep: '',
  onClick: _helpers.noop
};
exports.default = WizardStep;