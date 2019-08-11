var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import Link from '../LoginPageComponents/LoginPageLink';

var LoginCardSocialLink = function LoginCardSocialLink(_ref) {
  var link = _ref.link;
  return link && React.createElement(
    'li',
    { className: 'login-pf-social-link' },
    React.createElement(
      Link,
      { href: link.href, onClick: link.onClick },
      React.createElement('img', { src: link.src, alt: link.alt }),
      link.text
    )
  );
};

LoginCardSocialLink.propTypes = {
  /** the link element props. */
  link: PropTypes.shape(_extends({}, Link.propTypes, {
    /** The image source */
    src: PropTypes.string.isRequired,
    /** The image alt description */
    alt: PropTypes.string,
    /** The link text */
    text: PropTypes.string
  }))
};

LoginCardSocialLink.defaultProps = {
  link: _extends({}, Link.defaultProps, {
    src: null,
    alt: null,
    text: null
  })
};

export default LoginCardSocialLink;