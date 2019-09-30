"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function countRowSpan(columns) {
  var maximumCount = 0;

  columns.forEach(function (column) {
    if (column.children && column.children.length) {
      maximumCount = Math.max(maximumCount, countRowSpan(column.children));
    }
  });

  return maximumCount + 1;
}

exports.default = countRowSpan;