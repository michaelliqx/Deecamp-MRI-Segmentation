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
 * ListViewGroupItemHeader is used with expandable ListViewItem, wraps everything
 * that is displayed in non expanded state. Handles the toggling of the expanded
 * state
 */
var ListViewGroupItemHeader = function ListViewGroupItemHeader(_ref) {
  var children = _ref.children,
      toggleExpanded = _ref.toggleExpanded;

  var handleClick = function handleClick(e) {
    // ignore selected child elements click
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' && e.target.tagName !== 'INPUT' && !e.target.classList.contains('fa-ellipsis-v')) {
      toggleExpanded();
    }
  };
  return _react2.default.createElement(
    'div',
    { className: 'list-group-item-header', onClick: handleClick },
    children
  );
};
ListViewGroupItemHeader.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Function to execute to trigger toggle */
  toggleExpanded: _propTypes2.default.func.isRequired
};
ListViewGroupItemHeader.defaultProps = {
  children: null
};
exports.default = ListViewGroupItemHeader;