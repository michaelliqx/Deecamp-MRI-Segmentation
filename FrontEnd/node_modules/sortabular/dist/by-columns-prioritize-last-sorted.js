'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _defaultOrder = require('./default-order');

var _defaultOrder2 = _interopRequireDefault(_defaultOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var byColumnsPrioritizeLastSorted = function byColumnsPrioritizeLastSorted(_ref) {
  var sortingColumns = _ref.sortingColumns,
      _ref$sortingOrder = _ref.sortingOrder,
      sortingOrder = _ref$sortingOrder === undefined ? _defaultOrder2.default : _ref$sortingOrder,
      _ref$selectedColumn = _ref.selectedColumn,
      selectedColumn = _ref$selectedColumn === undefined ? -1 : _ref$selectedColumn;

  var newSortingColumns = {};

  if (selectedColumn < 0) {
    return sortingColumns;
  }

  if (!sortingColumns) {
    return _defineProperty({}, selectedColumn, {
      direction: sortingOrder.FIRST,
      position: 0
    });
  } else if ({}.hasOwnProperty.call(sortingColumns, selectedColumn)) {
    // Clone to avoid mutating the original structure
    newSortingColumns = (0, _cloneDeep3.default)(sortingColumns);

    var newSort = sortingOrder[newSortingColumns[selectedColumn].direction];
    var oldPosition = newSortingColumns[selectedColumn].position;

    if (newSort) {
      // sort direction is being updated
      // demote all previously higher-priority columns by 1
      // by incrementing their position
      Object.keys(newSortingColumns).forEach(function (k) {
        var v = newSortingColumns[k];

        if (v.position < oldPosition) {
          v.position += 1;
        }
      });
      newSortingColumns[selectedColumn] = {
        direction: newSort,
        position: 0
      };
    } else {
      delete newSortingColumns[selectedColumn];

      // Update position of columns after the deleted one
      Object.keys(newSortingColumns).forEach(function (k) {
        var v = newSortingColumns[k];

        if (v.position > oldPosition) {
          v.position -= 1;
        }
      });
    }

    return newSortingColumns;
  }

  // clone and insert new column at position 0, increment all others
  newSortingColumns = (0, _cloneDeep3.default)(sortingColumns);
  Object.keys(newSortingColumns).forEach(function (k) {
    var v = newSortingColumns[k];
    v.position += 1;
  });

  return _extends({}, newSortingColumns, _defineProperty({}, selectedColumn, {
    direction: sortingOrder.FIRST,
    position: 0
  }));
};

exports.default = byColumnsPrioritizeLastSorted;