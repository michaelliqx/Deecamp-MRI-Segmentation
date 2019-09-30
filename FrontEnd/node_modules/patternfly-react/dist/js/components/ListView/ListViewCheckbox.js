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
 * ListViewCheckbox wraps the input provided as child prop. The input depends
 * on the form solution the consuming application uses (e.g. Field component
 * in case of redux-form)
 */
var ListViewCheckbox = function ListViewCheckbox(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('list-view-pf-checkbox', className) },
    children
  );
};

ListViewCheckbox.propTypes = {
  /** Child node - form input component */
  children: _propTypes2.default.node.isRequired,
  /** Additional css classes */
  className: _propTypes2.default.string
};
ListViewCheckbox.defaultProps = {
  className: ''
};
exports.default = ListViewCheckbox;