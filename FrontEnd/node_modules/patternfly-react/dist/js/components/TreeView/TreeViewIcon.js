'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeViewIcon = function TreeViewIcon(_ref) {
  var icon = _ref.icon;

  var classes = (0, _classnames2.default)('icon node-icon indent', icon);
  return _react2.default.createElement('span', { className: classes, 'aria-hidden': true });
};

TreeViewIcon.propTypes = {
  icon: _propTypes2.default.string
};

TreeViewIcon.defaultProps = {
  icon: 'fa fa-folder'
};

exports.default = TreeViewIcon;