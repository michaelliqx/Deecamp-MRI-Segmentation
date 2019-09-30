import React from 'react';
import PropTypes from 'prop-types';
import LoginFooterLinks from './LoginFooterLinks';

var LoginPageFooter = function LoginPageFooter(_ref) {
  var links = _ref.links;
  return React.createElement(
    'footer',
    { className: 'login-pf-page-footer' },
    React.createElement(LoginFooterLinks, { links: links })
  );
};

LoginPageFooter.propTypes = {
  links: PropTypes.array
};

LoginPageFooter.defaultProps = {
  links: LoginFooterLinks.defaultProps.links
};

export default LoginPageFooter;