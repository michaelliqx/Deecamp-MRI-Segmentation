'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultStrategy = require('./default-strategy');

var _defaultStrategy2 = _interopRequireDefault(_defaultStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var sort = function sort() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$event = _ref.event,
      event = _ref$event === undefined ? 'onClick' : _ref$event,
      _ref$getSortingColumn = _ref.getSortingColumns,
      getSortingColumns = _ref$getSortingColumn === undefined ? function () {
    return [];
  } : _ref$getSortingColumn,
      _ref$onSort = _ref.onSort,
      onSort = _ref$onSort === undefined ? function () {} : _ref$onSort,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === undefined ? _defaultStrategy2.default : _ref$strategy;

  return function (_value, extra) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var className = _ref2.className,
        props = _objectWithoutProperties(_ref2, ['className']);

    var sortingColumns = getSortingColumns();
    var field = extra[strategy.fieldName];
    var headerClass = 'sort sort-none';

    // Check against undefined to allow zero
    if (sortingColumns[field] !== undefined) {
      headerClass = 'sort sort-' + sortingColumns[field].direction;
    }

    return _extends({}, props, _defineProperty({
      className: (0, _classnames2.default)(className, headerClass)
    }, event, function () {
      return onSort(field);
    }));
  };
};

exports.default = sort;