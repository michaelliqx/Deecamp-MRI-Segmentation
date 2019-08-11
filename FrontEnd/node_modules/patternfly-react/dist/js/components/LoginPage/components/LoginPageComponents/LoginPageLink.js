'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginPageLink = function LoginPageLink(_ref) {
  var onClick = _ref.onClick,
      href = _ref.href,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['onClick', 'href', 'children']);

  return _react2.default.createElement(
    'a',
    _extends({ href: href, onClick: onClick }, props),
    children
  );
};

LoginPageLink.propTypes = {
  children: _propTypes2.default.node,
  href: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

LoginPageLink.defaultProps = {
  children: null,
  href: '#',
  onClick: _helpers.noop
};

exports.default = LoginPageLink;