import React from 'react';
import PropTypes from 'prop-types';
import Link from '../LoginPageComponents/LoginPageLink';

var LoginFooterLinks = function LoginFooterLinks(_ref) {
  var links = _ref.links;

  var listItems = links.map(function (link, index) {
    return React.createElement(
      'li',
      { key: index },
      React.createElement(
        Link,
        { className: 'login-pf-page-footer-link', href: link.href, onClick: function onClick(e) {
            return link.onClick(e);
          } },
        link.children
      )
    );
  });

  return React.createElement(
    'ul',
    { className: 'login-pf-page-footer-links list-unstyled' },
    listItems
  );
};

LoginFooterLinks.propTypes = {
  links: PropTypes.array
};

LoginFooterLinks.defaultProps = {
  links: []
};

export default LoginFooterLinks;