'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _defaultStrategy = require('./default-strategy');

var _defaultStrategy2 = _interopRequireDefault(_defaultStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reset = function reset(_ref) {
  var _ref$event = _ref.event,
      event = _ref$event === undefined ? 'onDoubleClick' : _ref$event,
      _ref$getSortingColumn = _ref.getSortingColumns,
      getSortingColumns = _ref$getSortingColumn === undefined ? function () {
    return [];
  } : _ref$getSortingColumn,
      _ref$onReset = _ref.onReset,
      onReset = _ref$onReset === undefined ? function () {} : _ref$onReset,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === undefined ? _defaultStrategy2.default : _ref$strategy;
  return function (value, extra) {
    return _defineProperty({}, event, function () {
      var sortingColumns = getSortingColumns();

      if (!sortingColumns || !Object.keys(sortingColumns).length) {
        return;
      }

      var field = extra[strategy.fieldName];

      // If the field doesn't exist, there's nothing to reset
      if (!sortingColumns[field]) {
        return;
      }

      var position = sortingColumns[field].position;
      var newSortingColumns = {};

      delete sortingColumns[field];

      Object.keys(sortingColumns).forEach(function (k) {
        var column = sortingColumns[k];

        if (column.position > position) {
          newSortingColumns[k] = _extends({}, column, {
            position: column.position - 1
          });
        } else {
          newSortingColumns[k] = column;
        }
      });

      onReset({
        sortingColumns: newSortingColumns
      });
    });
  };
};

exports.default = reset;