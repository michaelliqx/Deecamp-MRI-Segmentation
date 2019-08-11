var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

var LoginPageLink = function LoginPageLink(_ref) {
  var onClick = _ref.onClick,
      href = _ref.href,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['onClick', 'href', 'children']);

  return React.createElement(
    'a',
    _extends({ href: href, onClick: onClick }, props),
    children
  );
};

LoginPageLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func
};

LoginPageLink.defaultProps = {
  children: null,
  href: '#',
  onClick: noop
};

export default LoginPageLink;