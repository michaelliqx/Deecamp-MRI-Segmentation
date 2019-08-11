'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginPageLink = require('../LoginPageComponents/LoginPageLink');

var _LoginPageLink2 = _interopRequireDefault(_LoginPageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginCardSocialLink = function LoginCardSocialLink(_ref) {
  var link = _ref.link;
  return link && _react2.default.createElement(
    'li',
    { className: 'login-pf-social-link' },
    _react2.default.createElement(
      _LoginPageLink2.default,
      { href: link.href, onClick: link.onClick },
      _react2.default.createElement('img', { src: link.src, alt: link.alt }),
      link.text
    )
  );
};

LoginCardSocialLink.propTypes = {
  /** the link element props. */
  link: _propTypes2.default.shape(_extends({}, _LoginPageLink2.default.propTypes, {
    /** The image source */
    src: _propTypes2.default.string.isRequired,
    /** The image alt description */
    alt: _propTypes2.default.string,
    /** The link text */
    text: _propTypes2.default.string
  }))
};

LoginCardSocialLink.defaultProps = {
  link: _extends({}, _LoginPageLink2.default.defaultProps, {
    src: null,
    alt: null,
    text: null
  })
};

exports.default = LoginCardSocialLink;