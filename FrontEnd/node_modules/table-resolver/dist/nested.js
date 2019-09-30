'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reIsPlainProp = /^\w*$/;

function nested(_ref) {
  var column = _ref.column;
  var property = column.property;


  if (!property) {
    return function () {
      return {};
    };
  }

  // if users provide a custom getter instead of a
  // path for _.get, use that getter ...
  if ((0, _isFunction3.default)(property)) {
    return function (rowData) {
      return _extends({}, rowData, _defineProperty({}, property, property(rowData)));
    };
  }

  // Make things simple if the property is simple.  No copy needed.
  if (typeof property === 'string' && reIsPlainProp.test(property)) {
    return function (rowData) {
      return rowData;
    };
  }

  return function (rowData) {
    // ... otherwise, make sure property exists, then _.get it
    if (!(0, _has3.default)(rowData, property)) {
      return {};
    }

    return _extends({}, rowData, _defineProperty({}, property, (0, _get3.default)(rowData, property)));
  };
}

exports.default = nested;