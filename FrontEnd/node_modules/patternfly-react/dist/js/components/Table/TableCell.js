'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableConstants = require('./TableConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableCell component for Patternfly React
 */
var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'align']);

  var classes = (0, _classnames2.default)({
    'text-right': align === _TableConstants.TABLE_ALIGN.RIGHT,
    'text-center': align === _TableConstants.TABLE_ALIGN.CENTER
  }, className);
  return _react2.default.createElement(
    'td',
    _extends({ className: classes }, props),
    children
  );
};
TableCell.propTypes = {
  /** Children nodes  */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Cell alignment */
  align: _propTypes2.default.oneOf(_TableConstants.TABLE_ALIGNMENT_TYPES)
};
TableCell.defaultProps = {
  children: null,
  className: '',
  align: _TableConstants.TABLE_ALIGN.DEFAULT
};
exports.default = TableCell;