'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function byFunction(path) {
  return function (_ref) {
    var _ref$column = _ref.column,
        column = _ref$column === undefined ? {} : _ref$column;
    return function (rowData) {
      var property = column.property;

      var resolver = (0, _get3.default)(column, path);

      if (!property || !resolver) {
        return rowData;
      }

      var value = rowData[property];
      var ret = _extends({}, rowData, _defineProperty({}, property, value));

      ret['_' + property] = resolver(value, {
        property: property,
        rowData: rowData
      });

      return ret;
    };
  };
}

exports.default = byFunction;