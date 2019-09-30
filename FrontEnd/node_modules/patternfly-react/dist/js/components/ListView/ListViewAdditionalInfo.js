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
 * ListViewAdditionalInfo defines additional info section
 */
var ListViewAdditionalInfo = function ListViewAdditionalInfo(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'list-view-pf-additional-info' },
    children
  );
};
ListViewAdditionalInfo.propTypes = {
  /** Child nodes - an array of ListViewInfoItem instances */
  children: _propTypes2.default.arrayOf(_propTypes2.default.node)
};
ListViewAdditionalInfo.defaultProps = {
  children: null
};

exports.default = ListViewAdditionalInfo;