'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function resolve(_ref) {
  var columns = _ref.columns,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? function () {
    return function (rowData) {
      return rowData;
    };
  } : _ref$method,
      _ref$indexKey = _ref.indexKey,
      indexKey = _ref$indexKey === undefined ? '_index' : _ref$indexKey;

  if (!columns) {
    throw new Error('resolve - Missing columns!');
  }

  return function () {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var methodsByColumnIndex = columns.map(function (column) {
      return method({ column: column });
    });

    return rows.map(function (rowData, rowIndex) {
      var ret = _extends(_defineProperty({}, indexKey, rowIndex), rowData);

      columns.forEach(function (column, columnIndex) {
        var result = methodsByColumnIndex[columnIndex](rowData);

        delete result.undefined;

        ret = _extends({}, ret, result);
      });

      return ret;
    });
  };
}

exports.default = resolve;