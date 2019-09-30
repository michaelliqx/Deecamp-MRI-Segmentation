'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * ListViewIcon used as a default content for ListViewLeft
 */
var ListViewIcon = function ListViewIcon(_ref) {
  var type = _ref.type,
      name = _ref.name,
      className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ['type', 'name', 'className', 'size']);

  return _react2.default.createElement(_Icon.Icon, _extends({ type: type, name: name, className: (0, _classnames2.default)('list-view-pf-icon-' + size, className) }, props));
};
ListViewIcon.propTypes = {
  /** Icon type (pf or fa) */
  type: _propTypes2.default.string,
  /** Name of the icon font */
  name: _propTypes2.default.string.isRequired,
  /** additional classes */
  className: _propTypes2.default.string,
  /** Icon size (sm, md, lg), defaults to 'sm' */
  size: _propTypes2.default.oneOf(['sm', 'md', 'lg'])
};
ListViewIcon.defaultProps = {
  type: 'fa',
  size: 'sm',
  className: ''
};
exports.default = ListViewIcon;