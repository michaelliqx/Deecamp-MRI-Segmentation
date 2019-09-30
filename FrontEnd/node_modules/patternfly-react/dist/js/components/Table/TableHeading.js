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
 * TableHeading component for Patternfly React
 */
var TableHeading = function TableHeading(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      sort = _ref.sort,
      sortDirection = _ref.sortDirection,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'align', 'sort', 'sortDirection']);

  var sortingClass = (0, _classnames2.default)({
    sorting_asc: sortDirection === _TableConstants.TABLE_SORT_DIRECTION.ASC,
    sorting_desc: sortDirection === _TableConstants.TABLE_SORT_DIRECTION.DESC
  });
  var classes = (0, _classnames2.default)({
    'text-right': align === _TableConstants.TABLE_ALIGN.RIGHT,
    'text-center': align === _TableConstants.TABLE_ALIGN.CENTER
  }, sort ? sortingClass || 'sorting' : '', className);
  return _react2.default.createElement(
    'th',
    _extends({ className: classes }, props),
    children
  );
};
TableHeading.propTypes = {
  /** Children nodes  */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Heading alignment */
  align: _propTypes2.default.oneOf(_TableConstants.TABLE_ALIGNMENT_TYPES),
  /** sortable heading */
  sort: _propTypes2.default.bool,
  /** sort direction */
  sortDirection: _propTypes2.default.oneOf(_TableConstants.TABLE_SORT_DIRECTIONS)
};
TableHeading.defaultProps = {
  children: null,
  className: '',
  sort: false,
  align: _TableConstants.TABLE_ALIGN.DEFAULT,
  sortDirection: _TableConstants.TABLE_SORT_DIRECTION.DEFAULT
};
exports.default = TableHeading;