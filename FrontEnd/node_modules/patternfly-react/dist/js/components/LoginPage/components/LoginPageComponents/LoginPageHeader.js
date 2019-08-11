'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPageHeader = function LoginPageHeader(_ref) {
  var logoSrc = _ref.logoSrc,
      logoTitle = _ref.logoTitle,
      caption = _ref.caption;
  return _react2.default.createElement(
    'header',
    { className: 'login-pf-page-header' },
    _react2.default.createElement('img', { className: 'login-pf-brand', src: logoSrc, title: logoTitle, alt: 'logo' }),
    _react2.default.createElement(
      'div',
      { className: 'login-pf-caption' },
      caption
    )
  );
};

LoginPageHeader.propTypes = {
  logoSrc: _propTypes2.default.string,
  logoTitle: _propTypes2.default.string,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

LoginPageHeader.defaultProps = {
  logoSrc: null,
  logoTitle: null,
  caption: null
};

exports.default = LoginPageHeader;