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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ListViewExpand renders the caret which signifies that row is expandable.
 * The caret icon points to the right when it is closed and down when it is expanded.
 */
var ListViewExpand = function ListViewExpand(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      toggleExpanded = _ref.toggleExpanded;

  var classes = (0, _classnames2.default)({
    'fa fa-angle-right': true,
    'fa-angle-down': expanded
  });
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('list-view-pf-expand', { active: expanded }),
      onClick: function onClick(e) {
        e.stopPropagation();
        toggleExpanded();
      }
    },
    _react2.default.createElement('span', { className: classes }),
    children
  );
};
ListViewExpand.propTypes = {
  /** Child nodes which render additional content - used in expandable ListViewInfoItem */
  children: _propTypes2.default.node,
  /** Expanded state toggle */
  expanded: _propTypes2.default.bool,
  /** Function to execute to trigger toggle */
  toggleExpanded: _propTypes2.default.func.isRequired
};
ListViewExpand.defaultProps = {
  children: null,
  expanded: false
};
exports.default = ListViewExpand;