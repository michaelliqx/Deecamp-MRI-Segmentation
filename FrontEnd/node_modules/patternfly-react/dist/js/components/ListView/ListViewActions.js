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
 * ListViewActions wraps ListViewItem actions and positions them to the right
 */
var ListViewActions = function ListViewActions(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-view-pf-actions' },
    children
  );
};
ListViewActions.propTypes = {
  /** Child nodes which render individual actions - Buttons, DropdownKebab... */
  children: _propTypes2.default.node
};
ListViewActions.defaultProps = {
  children: null
};
exports.default = ListViewActions;