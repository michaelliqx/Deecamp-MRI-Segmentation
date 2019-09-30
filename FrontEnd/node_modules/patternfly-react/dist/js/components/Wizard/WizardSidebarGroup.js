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

var _ListGroup = require('../ListGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * WizardSidebarGroup component for Patternfly React
 */
var WizardSidebarGroup = function WizardSidebarGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      step = _ref.step,
      activeStep = _ref.activeStep,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'step', 'activeStep']);

  var classes = (0, _classnames2.default)({ hidden: '' + step !== '' + activeStep }, className);
  return _react2.default.createElement(
    _ListGroup.ListGroup,
    _extends({ componentClass: 'ul', className: classes }, props),
    children
  );
};
WizardSidebarGroup.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** The wizard step number for this step */
  step: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** The active step */
  activeStep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
WizardSidebarGroup.defaultProps = {
  children: null,
  className: '',
  step: '',
  activeStep: ''
};
exports.default = WizardSidebarGroup;