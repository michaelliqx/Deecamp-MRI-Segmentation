import React from 'react';
import PropTypes from 'prop-types';

var LoginPageHeader = function LoginPageHeader(_ref) {
  var logoSrc = _ref.logoSrc,
      logoTitle = _ref.logoTitle,
      caption = _ref.caption;
  return React.createElement(
    'header',
    { className: 'login-pf-page-header' },
    React.createElement('img', { className: 'login-pf-brand', src: logoSrc, title: logoTitle, alt: 'logo' }),
    React.createElement(
      'div',
      { className: 'login-pf-caption' },
      caption
    )
  );
};

LoginPageHeader.propTypes = {
  logoSrc: PropTypes.string,
  logoTitle: PropTypes.string,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

LoginPageHeader.defaultProps = {
  logoSrc: null,
  logoTitle: null,
  caption: null
};

export default LoginPageHeader;