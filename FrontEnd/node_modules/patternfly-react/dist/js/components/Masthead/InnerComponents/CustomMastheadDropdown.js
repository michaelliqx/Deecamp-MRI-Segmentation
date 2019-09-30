'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Custom Masthead Dropdown
 */
var CustomMastheadDropdown = function CustomMastheadDropdown(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'li',
    { className: className },
    children
  );
};

CustomMastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Children elements */
  children: _propTypes2.default.node
};

CustomMastheadDropdown.defaultProps = {
  className: '',
  children: null
};

exports.default = CustomMastheadDropdown;