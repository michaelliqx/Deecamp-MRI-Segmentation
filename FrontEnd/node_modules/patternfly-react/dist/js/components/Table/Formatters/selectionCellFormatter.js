'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

var _TableSelectionCell = require('../TableSelectionCell');

var _TableSelectionCell2 = _interopRequireDefault(_TableSelectionCell);

var _TableCheckbox = require('../TableCheckbox');

var _TableCheckbox2 = _interopRequireDefault(_TableCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectionCellFormatter = function selectionCellFormatter(_ref, onSelectRow, id, label) {
  var rowData = _ref.rowData,
      rowIndex = _ref.rowIndex;

  var checkboxId = id || 'select' + rowIndex;
  var checkboxLabel = label || 'Select row ' + rowIndex;
  return _react2.default.createElement(
    _TableSelectionCell2.default,
    null,
    _react2.default.createElement(_TableCheckbox2.default, {
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
  rowData: _propTypes2.default.object,
  /** rowIndex for this row */
  rowIndex: _propTypes2.default.number.isRequired,
  /** row selected callback */
  onSelectRow: _propTypes2.default.func, // eslint-disable-line react/no-unused-prop-types
  /** checkbox id override */
  id: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  /** checkbox label override */
  label: _propTypes2.default.string // eslint-disable-line react/no-unused-prop-types
};
selectionCellFormatter.defaultProps = {
  rowData: {},
  onSelectRow: _helpers.noop,
  id: '',
  label: ''
};
exports.default = selectionCellFormatter;