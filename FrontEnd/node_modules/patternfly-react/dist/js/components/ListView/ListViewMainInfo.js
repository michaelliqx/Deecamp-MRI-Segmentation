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
 * ListViewMainInfo wraps the informational content of the ListViewItem
 */
var ListViewMainInfo = function ListViewMainInfo(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-view-pf-main-info' },
    children
  );
};
ListViewMainInfo.propTypes = {
  /** Child nodes - instances of ListViewLeft and ListViewBody */
  children: _propTypes2.default.node
};
ListViewMainInfo.defaultProps = {
  children: null
};
exports.default = ListViewMainInfo;