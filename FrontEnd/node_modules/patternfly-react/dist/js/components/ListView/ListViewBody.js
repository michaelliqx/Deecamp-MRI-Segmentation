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
 * ListViewBody wraps the central section of ListViewItem
 */
var ListViewBody = function ListViewBody(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-view-pf-body' },
    children
  );
};
ListViewBody.propTypes = {
  /** Child nodes - ListViewDescription or ListViewAdditionalInfo instances */
  children: _propTypes2.default.node
};
ListViewBody.defaultProps = {
  children: null
};
exports.default = ListViewBody;