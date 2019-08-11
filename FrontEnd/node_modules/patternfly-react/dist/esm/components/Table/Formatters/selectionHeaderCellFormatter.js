var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import TableSelectionHeading from '../TableSelectionHeading';
import TableCheckbox from '../TableCheckbox';

var selectionHeaderCellFormatter = function selectionHeaderCellFormatter(_ref) {
  var cellProps = _ref.cellProps,
      column = _ref.column,
      rows = _ref.rows,
      onSelectAllRows = _ref.onSelectAllRows;

  var unselectedRows = rows.filter(function (r) {
    return !r.selected;
  }).length > 0;
  var id = cellProps.id || 'selectAll';
  return React.createElement(
    TableSelectionHeading,
    _extends({ 'aria-label': column.header.label }, cellProps),
    React.createElement(TableCheckbox, { id: id, label: column.header.label, checked: !unselectedRows, onChange: onSelectAllRows })
  );
};
selectionHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: PropTypes.object,
  /** column definition */
  column: PropTypes.object,
  /** current table rows */
  rows: PropTypes.array,
  /** on select all rows callback */
  onSelectAllRows: PropTypes.func
};
selectionHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  rows: [],
  onSelectAllRows: noop
};
export default selectionHeaderCellFormatter;