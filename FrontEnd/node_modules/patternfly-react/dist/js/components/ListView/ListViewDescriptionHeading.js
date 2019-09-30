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
 * ListViewDescriptionHeading renders ListViewItem heading
 */
var ListViewDescriptionHeading = function ListViewDescriptionHeading(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-group-item-heading' },
    children
  );
};
ListViewDescriptionHeading.propTypes = {
  /** Child node - content rendered as heading */
  children: _propTypes2.default.node
};
ListViewDescriptionHeading.defaultProps = {
  children: null
};
exports.default = ListViewDescriptionHeading;