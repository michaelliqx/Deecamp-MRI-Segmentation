'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ListViewGroupItemContainer is used with expandable ListViewItem, wraps the
 * expanded content
 */
var ListViewGroupItemContainer = function ListViewGroupItemContainer(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      onClose = _ref.onClose;

  var classes = (0, _classnames2.default)({
    'list-group-item-container container-fluid': true,
    hidden: !expanded
  });
  return _react2.default.createElement(
    'div',
    { className: classes },
    onClose !== _helpers.noop && _react2.default.createElement(
      'div',
      { className: 'close' },
      _react2.default.createElement('span', { className: 'pficon pficon-close', onClick: onClose })
    ),
    expanded && children
  );
};
ListViewGroupItemContainer.propTypes = {
  /** Children nodes - the content visible in expanded state */
  children: _propTypes2.default.node,
  /** Boolean indicating whether expandable content is visible */
  expanded: _propTypes2.default.bool,
  /** Function to call when 'close icon' is clicked */
  onClose: _propTypes2.default.func
};
ListViewGroupItemContainer.defaultProps = {
  children: null,
  onClose: _helpers.noop,
  expanded: false
};
exports.default = ListViewGroupItemContainer;