'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPageContainer = function LoginPageContainer(_ref) {
  var backgroundUrl = _ref.backgroundUrl,
      className = _ref.className,
      children = _ref.children;

  var style = backgroundUrl ? { backgroundImage: 'url(' + backgroundUrl + ')' } : {};

  return _react2.default.createElement(
    'div',
    { className: 'login-pf', style: style },
    _react2.default.createElement(
      'div',
      { className: 'login-pf-page ' + className },
      children
    )
  );
};

LoginPageContainer.propTypes = {
  children: _propTypes2.default.node,
  backgroundUrl: _propTypes2.default.string,
  className: _propTypes2.default.string
};

LoginPageContainer.defaultProps = {
  children: null,
  backgroundUrl: null,
  className: ''
};

exports.default = LoginPageContainer;