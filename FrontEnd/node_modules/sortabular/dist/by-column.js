'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultOrder = require('./default-order');

var _defaultOrder2 = _interopRequireDefault(_defaultOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var byColumn = function byColumn(_ref) {
  var sortingColumns = _ref.sortingColumns,
      _ref$sortingOrder = _ref.sortingOrder,
      sortingOrder = _ref$sortingOrder === undefined ? _defaultOrder2.default : _ref$sortingOrder,
      _ref$selectedColumn = _ref.selectedColumn,
      selectedColumn = _ref$selectedColumn === undefined ? -1 : _ref$selectedColumn;

  var sort = sortingOrder.FIRST;

  if (selectedColumn < 0) {
    return sortingColumns;
  }

  if (sortingColumns && {}.hasOwnProperty.call(sortingColumns, selectedColumn)) {
    sort = sortingOrder[sortingColumns[selectedColumn].direction];

    if (!sort) {
      return {};
    }
  }

  return _defineProperty({}, selectedColumn, {
    direction: sort,
    position: 0
  });
};

exports.default = byColumn;