'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

var _Icon = require('../Icon');

var _helpers = require('./helpers');

var _AlertConstants = require('./AlertConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Alert Component for Patternfly React
 */
var Alert = function Alert(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onDismiss = _ref.onDismiss,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onDismiss', 'type']);

  (0, _helpers.warnIfDeprecatedType)(type);

  var alertClass = (0, _classnames2.default)('alert', className, (0, _helpers.getClassName)(type), {
    'alert-dismissable': onDismiss
  });

  var iconName = (0, _helpers.getIconName)(type);

  return _react2.default.createElement(
    'div',
    _extends({ className: alertClass }, props),
    onDismiss && _react2.default.createElement(
      _Button.Button,
      { bsClass: 'close', 'aria-hidden': 'true', onClick: onDismiss },
      _react2.default.createElement(_Icon.Icon, { type: 'pf', name: 'close' })
    ),
    _react2.default.createElement(_Icon.Icon, { type: 'pf', name: iconName }),
    children
  );
};
Alert.propTypes = {
  /** additional alert classes */
  className: _propTypes2.default.string,
  /** callback when alert is dismissed  */
  onDismiss: _propTypes2.default.func,
  /** the type of alert  */
  type: _propTypes2.default.oneOf([].concat(_toConsumableArray(_AlertConstants.ALERT_TYPES), _toConsumableArray(_AlertConstants.DEPRECATED_ALERT_TYPES))),
  /** children nodes  */
  children: _propTypes2.default.node
};
Alert.defaultProps = {
  className: '',
  onDismiss: null, // we do not want to default noop b/c of conditional dismiss button
  type: _AlertConstants.ALERT_TYPE_ERROR,
  children: null
};
Alert.ALERT_TYPES = _AlertConstants.ALERT_TYPES;

exports.default = Alert;