'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginPageLink = require('../LoginPageComponents/LoginPageLink');

var _LoginPageLink2 = _interopRequireDefault(_LoginPageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginFooterLinks = function LoginFooterLinks(_ref) {
  var links = _ref.links;

  var listItems = links.map(function (link, index) {
    return _react2.default.createElement(
      'li',
      { key: index },
      _react2.default.createElement(
        _LoginPageLink2.default,
        { className: 'login-pf-page-footer-link', href: link.href, onClick: function onClick(e) {
            return link.onClick(e);
          } },
        link.children
      )
    );
  });

  return _react2.default.createElement(
    'ul',
    { className: 'login-pf-page-footer-links list-unstyled' },
    listItems
  );
};

LoginFooterLinks.propTypes = {
  links: _propTypes2.default.array
};

LoginFooterLinks.defaultProps = {
  links: []
};

exports.default = LoginFooterLinks;