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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  var classes = (0, _classnames2.default)('wizard-pf-contents', {
    // hide contents if the step is not active
    // OR if we have sub steps and this sub step is not active
    hidden: activeStepIndex !== stepIndex || activeSubStepIndex !== null && activeSubStepIndex !== subStepIndex
  }, className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
WizardContents.propTypes = {
  /** WizardStep nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** The wizard step index for these contents */
  stepIndex: _propTypes2.default.number.isRequired,
  /** The wizard sub step index for these contents */
  subStepIndex: _propTypes2.default.number,
  /** The active wizard step index */
  activeStepIndex: _propTypes2.default.number.isRequired,
  /** The active wizard sub step index */
  activeSubStepIndex: _propTypes2.default.number
};
WizardContents.defaultProps = {
  children: null,
  className: '',
  subStepIndex: null,
  activeSubStepIndex: null
};
exports.default = WizardContents;