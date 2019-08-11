'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqualWith2 = require('lodash/isEqualWith');

var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function columnsAreEqual(oldColumns, newColumns) {
  return (0, _isEqualWith3.default)(oldColumns, newColumns, function (a, b) {
    if ((0, _isFunction3.default)(a) && (0, _isFunction3.default)(b)) {
      return true;
    }

    return undefined;
  });
}

exports.default = columnsAreEqual;