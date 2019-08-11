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
 * WizardSubStep component for Patternfly React
 */
var WizardSubStep = function WizardSubStep(_ref) {
  var className = _ref.className,
      subStep = _ref.subStep,
      title = _ref.title,
      activeSubStep = _ref.activeSubStep,
      props = _objectWithoutProperties(_ref, ['className', 'subStep', 'title', 'activeSubStep']);

  var classes = (0, _classnames2.default)('wizard-pf-step-title-substep', { active: '' + subStep === '' + activeSubStep }, className);
  return _react2.default.createElement(
    'span',
    _extends({ className: classes }, props),
    title
  );
};
WizardSubStep.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** The wizard sub step for this step */
  subStep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** The wizard sub step title */
  title: _propTypes2.default.string,
  /** The active step */
  activeSubStep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
WizardSubStep.defaultProps = {
  className: '',
  subStep: '',
  title: '',
  activeSubStep: ''
};
exports.default = WizardSubStep;