'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

var _TableHeading = require('../TableHeading');

var _TableHeading2 = _interopRequireDefault(_TableHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortableHeaderCellFormatter = function sortableHeaderCellFormatter(_ref) {
  var cellProps = _ref.cellProps,
      column = _ref.column,
      sortingColumns = _ref.sortingColumns,
      onSort = _ref.onSort;

  var sortDirection = sortingColumns[column.property] && sortingColumns[column.property].direction;
  return _react2.default.createElement(
    _TableHeading2.default,
    _extends({
      onClick: function onClick(e) {
        onSort(e, column, sortDirection);
      },
      sort: true,
      sortDirection: sortDirection,
      'aria-label': column.header.label
    }, cellProps),
    column.header.label
  );
};
sortableHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: _propTypes2.default.object,
  /** column definition */
  column: _propTypes2.default.object,
  /** sorting object definition */
  sortingColumns: _propTypes2.default.object,
  /** onSort callback */
  onSort: _propTypes2.default.func
};
sortableHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  sortingColumns: {},
  onSort: _helpers.noop
};

exports.default = sortableHeaderCellFormatter;