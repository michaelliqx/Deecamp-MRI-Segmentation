'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _mergeProps = require('./merge-props');

var _mergeProps2 = _interopRequireDefault(_mergeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function evaluateTransforms() {
  var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments[1];
  var extraParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (process.env.NODE_ENV !== 'production') {
    if (!transforms.every(_isFunction3.default)) {
      throw new Error('All transforms weren\'t functions!', transforms);
    }
  }

  if (transforms.length === 0) {
    return {};
  }

  return _mergeProps2.default.apply(undefined, _toConsumableArray(transforms.map(function (transform) {
    return transform(value, extraParameters);
  })));
}

exports.default = evaluateTransforms;