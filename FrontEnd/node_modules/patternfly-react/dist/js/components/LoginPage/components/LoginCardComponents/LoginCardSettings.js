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

var _LoginCardRememberMe = require('./LoginCardRememberMe');

var _LoginCardRememberMe2 = _interopRequireDefault(_LoginCardRememberMe);

var _index = require('../../../../index');

var _LoginCardForgotPassword = require('./LoginCardForgotPassword');

var _LoginCardForgotPassword2 = _interopRequireDefault(_LoginCardForgotPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginCardSettings = function LoginCardSettings(_ref) {
  var rememberMe = _ref.rememberMe,
      forgotPassword = _ref.forgotPassword,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['rememberMe', 'forgotPassword', 'className']);

  return rememberMe.label || forgotPassword.label ? _react2.default.createElement(
    _index.FormGroup,
    _extends({}, props, { className: (0, _classnames2.default)('login-pf-settings', className) }),
    _react2.default.createElement(_LoginCardRememberMe2.default, rememberMe),
    _react2.default.createElement(_LoginCardForgotPassword2.default, forgotPassword)
  ) : null;
};

LoginCardSettings.propTypes = {
  /** Additional css classes. */
  className: _propTypes2.default.string,
  /** RememberMe component's props. */
  rememberMe: _propTypes2.default.shape(_extends({}, _LoginCardRememberMe2.default.propTypes)),
  /** ForgotPassword component's props. */
  forgotPassword: _propTypes2.default.shape(_extends({}, _LoginCardForgotPassword2.default.propTypes))
};

LoginCardSettings.defaultProps = {
  className: null,
  rememberMe: {},
  forgotPassword: {}
};

exports.default = LoginCardSettings;