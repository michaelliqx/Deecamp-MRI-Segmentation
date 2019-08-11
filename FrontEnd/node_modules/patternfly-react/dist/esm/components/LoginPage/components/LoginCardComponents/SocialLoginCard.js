var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoginCard from './LoginCard';

var SocialLoginCard = function SocialLoginCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    LoginCard,
    _extends({}, props, { className: classNames('login-pf-accounts', className) }),
    children
  );
};

SocialLoginCard.propTypes = {
  /** The children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

SocialLoginCard.defaultProps = {
  children: null,
  className: null
};

export default SocialLoginCard;