'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _result = require('lodash/result');

var _result2 = _interopRequireDefault(_result);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _defaultStrategy = require('./default-strategy');

var _defaultStrategy2 = _interopRequireDefault(_defaultStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// sorter === lodash orderBy
// https://lodash.com/docs#orderBy
var sorter = function sorter() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      columns = _ref.columns,
      sortingColumns = _ref.sortingColumns,
      sort = _ref.sort,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === undefined ? _defaultStrategy2.default : _ref$strategy;

  return function (data) {
    if (!columns) {
      throw new Error('sort.sorter - Missing "columns" argument!');
    }

    if (!sort) {
      throw new Error('sort.sorter - Missing "sort" argument!');
    }

    if (!sortingColumns) {
      return data;
    }

    var columnIndexList = new Array(sortingColumns.length);
    var orderList = new Array(sortingColumns.length);

    Object.keys(sortingColumns).forEach(function (sortingColumnKey) {
      var realColumn = strategy.getColumn(columns, sortingColumnKey) || {};
      var sortingColumn = sortingColumns[sortingColumnKey];

      columnIndexList[sortingColumn.position] = function (row) {
        var property = realColumn.property;
        var value = row[property];
        // Pick resolved value by convention
        var resolvedValue = (0, _get2.default)(row, '_' + property, value);

        return (0, _result2.default)(resolvedValue, 'toLowerCase', resolvedValue);
      };

      orderList[sortingColumn.position] = sortingColumn.direction;
    });

    return sort(data, columnIndexList, orderList);
  };
};

exports.default = sorter;