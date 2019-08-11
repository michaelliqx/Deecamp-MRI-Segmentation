'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginFooterLinks = require('./LoginFooterLinks');

var _LoginFooterLinks2 = _interopRequireDefault(_LoginFooterLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPageFooter = function LoginPageFooter(_ref) {
  var links = _ref.links;
  return _react2.default.createElement(
    'footer',
    { className: 'login-pf-page-footer' },
    _react2.default.createElement(_LoginFooterLinks2.default, { links: links })
  );
};

LoginPageFooter.propTypes = {
  links: _propTypes2.default.array
};

LoginPageFooter.defaultProps = {
  links: _LoginFooterLinks2.default.defaultProps.links
};

exports.default = LoginPageFooter;