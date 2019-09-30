'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeViewExpand = function TreeViewExpand(_ref) {
  var nodes = _ref.nodes,
      expanded = _ref.expanded,
      toggleExpand = _ref.toggleExpand;

  var hasChildren = nodes.length > 0;
  var classes = (0, _classnames2.default)('icon indent', { 'expand-icon fa fa-angle-right': hasChildren && !expanded }, { 'expand-icon fa fa-angle-down': hasChildren && expanded }, { glyphicon: !hasChildren });

  return _react2.default.createElement('span', { onClick: toggleExpand, className: classes, 'aria-hidden': true });
};

TreeViewExpand.propTypes = {
  nodes: _propTypes2.default.array,
  expanded: _propTypes2.default.bool,
  toggleExpand: _propTypes2.default.func
};

TreeViewExpand.defaultProps = {
  nodes: [],
  expanded: false,
  toggleExpand: _helpers.noop
};

exports.default = TreeViewExpand;