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

var _LoginPageLink = require('../LoginPageComponents/LoginPageLink');

var _LoginPageLink2 = _interopRequireDefault(_LoginPageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginCardSignUp = function LoginCardSignUp(_ref) {
  var label = _ref.label,
      link = _ref.link,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['label', 'link', 'className']);

  return label && _react2.default.createElement(
    'div',
    _extends({}, props, { className: (0, _classnames2.default)('login-pf-signup', className) }),
    _react2.default.createElement(
      'p',
      null,
      label,
      _react2.default.createElement(_LoginPageLink2.default, link)
    )
  );
};

LoginCardSignUp.propTypes = {
  /** Additional css classes. */
  className: _propTypes2.default.string,
  /** The sign up label. */
  label: _propTypes2.default.string,
  /** The sign up label. */
  link: _propTypes2.default.shape(_extends({}, _LoginPageLink2.default.propTypes))
};

LoginCardSignUp.defaultProps = {
  className: '',
  label: null,
  link: {}
};

exports.default = LoginCardSignUp;