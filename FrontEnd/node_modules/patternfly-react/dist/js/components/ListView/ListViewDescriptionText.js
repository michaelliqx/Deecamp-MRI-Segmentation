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
 * ListViewDescriptionText renders text content of ListViewItem
 */
var ListViewDescriptionText = function ListViewDescriptionText(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-group-item-text' },
    children
  );
};
ListViewDescriptionText.propTypes = {
  /** Child node - content rendered in text section of ListViewItem */
  children: _propTypes2.default.node
};
ListViewDescriptionText.defaultProps = {
  children: null
};
exports.default = ListViewDescriptionText;