import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import TableSelectionCell from '../TableSelectionCell';
import TableCheckbox from '../TableCheckbox';

var selectionCellFormatter = function selectionCellFormatter(_ref, onSelectRow, id, label) {
  var rowData = _ref.rowData,
      rowIndex = _ref.rowIndex;

  var checkboxId = id || 'select' + rowIndex;
  var checkboxLabel = label || 'Select row ' + rowIndex;
  return React.createElement(
    TableSelectionCell,
    null,
    React.createElement(TableCheckbox, {
      id: checkboxId,
      label: checkboxLabel,
      checked: rowData.selected,
      onChange: function onChange(e) {
        onSelectRow(e, rowData);
      }
    })
  );
};
selectionCellFormatter.propTypes = {
  /** rowData for this row */
  rowData: PropTypes.object,
  /** rowIndex for this row */
  rowIndex: PropTypes.number.isRequired,
  /** row selected callback */
  onSelectRow: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /** checkbox id override */
  id: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /** checkbox label override */
  label: PropTypes.string // eslint-disable-line react/no-unused-prop-types
};
selectionCellFormatter.defaultProps = {
  rowData: {},
  onSelectRow: noop,
  id: '',
  label: ''
};
export default selectionCellFormatter;