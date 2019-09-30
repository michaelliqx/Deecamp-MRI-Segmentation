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
 * ListViewDescription wraps Heading and Text
 */
var ListViewDescription = function ListViewDescription(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-view-pf-description' },
    children
  );
};
ListViewDescription.propTypes = {
  /** Child nodes - ListViewDescriptionHeading or ListViewDescriptionText instances */
  children: _propTypes2.default.node
};
ListViewDescription.defaultProps = {
  children: null
};
exports.default = ListViewDescription;