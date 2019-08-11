import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';

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
  cellProps: PropTypes.object,
  /** column definitions */
  columns: PropTypes.array,
  /** sorting object definition */
  sortingColumns: PropTypes.object,
  /** current table rows */
  rows: PropTypes.array,
  /** on select all rows callback */
  onSelectAllRows: PropTypes.func,
  /** onSort callback */
  onSort: PropTypes.func
};
customHeaderFormattersDefinition.defaultProps = {
  cellProps: {},
  columns: [],
  sortingColumns: {},
  onSort: noop
};
export default customHeaderFormattersDefinition;