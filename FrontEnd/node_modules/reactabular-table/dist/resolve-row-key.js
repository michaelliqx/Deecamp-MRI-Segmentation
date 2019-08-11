'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveRowKey(_ref) {
  var rowData = _ref.rowData,
      rowIndex = _ref.rowIndex,
      rowKey = _ref.rowKey;

  if (typeof rowKey === 'function') {
    return rowKey({ rowData: rowData, rowIndex: rowIndex }) + '-row';
  } else if (process.env.NODE_ENV !== 'production') {
    // Arrays cannot have rowKeys by definition so we have to go by index there.
    if (!(0, _isArray3.default)(rowData) && rowData[rowKey] === undefined) {
      console.warn( // eslint-disable-line no-console
      'Table.Body - Missing valid rowKey!', rowData, rowKey);
    }
  }

  if (rowData[rowKey] === 0) {
    return rowData[rowKey] + '-row';
  }

  return (rowData[rowKey] || rowIndex) + '-row';
}

exports.default = resolveRowKey;