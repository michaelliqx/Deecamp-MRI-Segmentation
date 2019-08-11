'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardLink = function CardLink(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ['disabled', 'children', 'className', 'icon']);

  var classes = (0, _classnames2.default)({
    'card-pf-link-with-icon': icon,
    disabled: disabled
  }, className);

  return _react2.default.createElement(
    'p',
    null,
    _react2.default.createElement(
      'a',
      _extends({ className: classes }, props),
      icon,
      children
    )
  );
};
CardLink.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes2.default.node.isRequired,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** card link icon node */
  icon: _propTypes2.default.node,
  /** href prop */
  href: _propTypes2.default.string,
  /** is link prop */
  disabled: _propTypes2.default.bool
};
CardLink.defaultProps = {
  className: '',
  icon: null,
  href: null,
  disabled: false
};
exports.default = CardLink;