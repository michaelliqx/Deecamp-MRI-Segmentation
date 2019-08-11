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
 * ListViewLeft renders nodes positioned on the left side of ListViewItem row
 */
var ListViewLeft = function ListViewLeft(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-view-pf-left' },
    children
  );
};
ListViewLeft.propTypes = {
  /** Child nodes - usually ListViewIcon instance */
  children: _propTypes2.default.node
};
ListViewLeft.defaultProps = {
  children: null
};
exports.default = ListViewLeft;