'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function columnChildren(_ref) {
  var columns = _ref.columns,
      _ref$childrenField = _ref.childrenField,
      childrenField = _ref$childrenField === undefined ? 'children' : _ref$childrenField;

  if (!columns) {
    throw new Error('resolve.columnChildren - Missing columns!');
  }

  var ret = [];

  columns.forEach(function (column) {
    // If a column has children, skip cell specific configuration
    if (column[childrenField] && column[childrenField].length) {
      ret = ret.concat(columnChildren({
        columns: column[childrenField],
        childrenField: childrenField
      }));
    } else {
      ret.push(column);
    }
  });

  return ret;
}

exports.default = columnChildren;