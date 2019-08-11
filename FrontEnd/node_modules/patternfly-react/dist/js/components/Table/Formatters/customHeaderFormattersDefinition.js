'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// wraps the default header definitions and adds support for `customFormatters`
var customHeaderFormattersDefinition = function customHeaderFormattersDefinition(_ref) {
  var cellProps = _ref.cellProps,
      columns = _ref.columns,
      sortingColumns = _ref.sortingColumns,
      rows = _ref.rows,
      onSelectAllRows = _ref.onSelectAllRows,
      onSort = _ref.onSort;
  var index = cellProps.index;

  var column = columns[index];
  var customFormatters = column.header.customFormatters;


  if (customFormatters) {
    return customFormatters.reduce(function (params, formatter) {
      return {
        value: formatter(params)
      };
    }, { cellProps: cellProps, column: column, sortingColumns: sortingColumns, rows: rows, onSelectAllRows: onSelectAllRows, onSort: onSort }).value;
  }
  return cellProps.children;
};
customHeaderFormattersDefinition.propTypes = {
  /** column header cell props */
  cellProps: _propTypes2.default.object,
  /** column definitions */
  columns: _propTypes2.default.array,
  /** sorting object definition */
  sortingColumns: _propTypes2.default.object,
  /** current table rows */
  rows: _propTypes2.default.array,
  /** on select all rows callback */
  onSelectAllRows: _propTypes2.default.func,
  /** onSort callback */
  onSort: _propTypes2.default.func
};
customHeaderFormattersDefinition.defaultProps = {
  cellProps: {},
  columns: [],
  sortingColumns: {},
  onSort: _helpers.noop
};
exports.default = customHeaderFormattersDefinition;