'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginPageLink = require('../LoginPageComponents/LoginPageLink');

var _LoginPageLink2 = _interopRequireDefault(_LoginPageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginCardForgotPassword = function LoginCardForgotPassword(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ['label']);

  return _react2.default.createElement(
    _LoginPageLink2.default,
    props,
    label
  );
};

LoginCardForgotPassword.propTypes = {
  /** The forgot password label. */
  label: _propTypes2.default.string
};

LoginCardForgotPassword.defaultProps = {
  label: 'Forgot password?'
};

exports.default = LoginCardForgotPassword;