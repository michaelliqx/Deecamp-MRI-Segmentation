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
 * WizardSidebar component for Patternfly React
 */
var WizardSidebar = function WizardSidebar(_ref) {
  var items = _ref.items,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['items', 'className']);

  var classes = (0, _classnames2.default)('wizard-pf-sidebar', className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    items
  );
};
WizardSidebar.propTypes = {
  /** Wizard sidebar items */
  items: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string
};
WizardSidebar.defaultProps = {
  items: null,
  className: ''
};
exports.default = WizardSidebar;