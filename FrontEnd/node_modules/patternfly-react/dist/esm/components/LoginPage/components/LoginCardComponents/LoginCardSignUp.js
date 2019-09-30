var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../LoginPageComponents/LoginPageLink';

var LoginCardSignUp = function LoginCardSignUp(_ref) {
  var label = _ref.label,
      link = _ref.link,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['label', 'link', 'className']);

  return label && React.createElement(
    'div',
    _extends({}, props, { className: classNames('login-pf-signup', className) }),
    React.createElement(
      'p',
      null,
      label,
      React.createElement(Link, link)
    )
  );
};

LoginCardSignUp.propTypes = {
  /** Additional css classes. */
  className: PropTypes.string,
  /** The sign up label. */
  label: PropTypes.string,
  /** The sign up label. */
  link: PropTypes.shape(_extends({}, Link.propTypes))
};

LoginCardSignUp.defaultProps = {
  className: '',
  label: null,
  link: {}
};

export default LoginCardSignUp;