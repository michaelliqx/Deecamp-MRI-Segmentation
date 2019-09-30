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

var _TableSelectionHeading = require('../TableSelectionHeading');

var _TableSelectionHeading2 = _interopRequireDefault(_TableSelectionHeading);

var _TableCheckbox = require('../TableCheckbox');

var _TableCheckbox2 = _interopRequireDefault(_TableCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectionHeaderCellFormatter = function selectionHeaderCellFormatter(_ref) {
  var cellProps = _ref.cellProps,
      column = _ref.column,
      rows = _ref.rows,
      onSelectAllRows = _ref.onSelectAllRows;

  var unselectedRows = rows.filter(function (r) {
    return !r.selected;
  }).length > 0;
  var id = cellProps.id || 'selectAll';
  return _react2.default.createElement(
    _TableSelectionHeading2.default,
    _extends({ 'aria-label': column.header.label }, cellProps),
    _react2.default.createElement(_TableCheckbox2.default, { id: id, label: column.header.label, checked: !unselectedRows, onChange: onSelectAllRows })
  );
};
selectionHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: _propTypes2.default.object,
  /** column definition */
  column: _propTypes2.default.object,
  /** current table rows */
  rows: _propTypes2.default.array,
  /** on select all rows callback */
  onSelectAllRows: _propTypes2.default.func
};
selectionHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  rows: [],
  onSelectAllRows: _helpers.noop
};
exports.default = selectionHeaderCellFormatter;