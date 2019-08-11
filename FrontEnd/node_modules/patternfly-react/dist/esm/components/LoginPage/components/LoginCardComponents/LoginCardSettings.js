var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RememberMe from './LoginCardRememberMe';
import { FormGroup } from '../../../../index';
import ForgotPassword from './LoginCardForgotPassword';

var LoginCardSettings = function LoginCardSettings(_ref) {
  var rememberMe = _ref.rememberMe,
      forgotPassword = _ref.forgotPassword,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['rememberMe', 'forgotPassword', 'className']);

  return rememberMe.label || forgotPassword.label ? React.createElement(
    FormGroup,
    _extends({}, props, { className: classNames('login-pf-settings', className) }),
    React.createElement(RememberMe, rememberMe),
    React.createElement(ForgotPassword, forgotPassword)
  ) : null;
};

LoginCardSettings.propTypes = {
  /** Additional css classes. */
  className: PropTypes.string,
  /** RememberMe component's props. */
  rememberMe: PropTypes.shape(_extends({}, RememberMe.propTypes)),
  /** ForgotPassword component's props. */
  forgotPassword: PropTypes.shape(_extends({}, ForgotPassword.propTypes))
};

LoginCardSettings.defaultProps = {
  className: null,
  rememberMe: {},
  forgotPassword: {}
};

export default LoginCardSettings;