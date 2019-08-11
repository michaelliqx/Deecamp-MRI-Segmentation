function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import LoginPageLink from '../LoginPageComponents/LoginPageLink';

var LoginCardForgotPassword = function LoginCardForgotPassword(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ['label']);

  return React.createElement(
    LoginPageLink,
    props,
    label
  );
};

LoginCardForgotPassword.propTypes = {
  /** The forgot password label. */
  label: PropTypes.string
};

LoginCardForgotPassword.defaultProps = {
  label: 'Forgot password?'
};

export default LoginCardForgotPassword;