'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _countRowSpan = require('./count-row-span');

var _countRowSpan2 = _interopRequireDefault(_countRowSpan);

var _countColSpan = require('./count-col-span');

var _countColSpan2 = _interopRequireDefault(_countColSpan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function resolveHeaderRows(_ref) {
  var columns = _ref.columns,
      _ref$childrenField = _ref.childrenField,
      childrenField = _ref$childrenField === undefined ? 'children' : _ref$childrenField;

  var resolvedChildren = [];

  var ret = columns.map(function (column) {
    var children = column[childrenField];
    var col = (0, _omit3.default)(column, [childrenField]);

    if (children && children.length) {
      resolveHeaderRows({ columns: children, childrenField: childrenField }).forEach(function (cells, depth) {
        resolvedChildren[depth] = [].concat(_toConsumableArray(resolvedChildren[depth] || []), _toConsumableArray(cells));
      });

      return Object.assign({}, col, {
        props: Object.assign({
          colSpan: (0, _countColSpan2.default)(children, 0)
        }, col.props)
      });
    }

    return Object.assign({}, col, {
      props: Object.assign({
        rowSpan: (0, _countRowSpan2.default)(columns)
      }, col.props)
    });
  });

  return resolvedChildren.length ? [ret].concat(resolvedChildren) : [ret];
}

exports.default = resolveHeaderRows;