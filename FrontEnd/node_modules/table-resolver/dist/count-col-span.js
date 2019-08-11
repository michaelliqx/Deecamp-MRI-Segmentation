"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function countColSpan(columns, returnCount) {
  var count = returnCount;
  if (columns && columns.length > 0) {
    columns.forEach(function (column) {
      if (column.children && column.children.length > 0) {
        count = countColSpan(column.children, count);
      } else {
        count += 1;
      }
    });
  }
  return count;
}

exports.default = countColSpan;