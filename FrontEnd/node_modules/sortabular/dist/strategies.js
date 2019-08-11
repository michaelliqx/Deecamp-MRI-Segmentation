'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var byIndex = {
  fieldName: 'columnIndex',
  getColumn: function getColumn(columns, sortingColumnKey) {
    return columns[sortingColumnKey];
  }
};

var byProperty = {
  fieldName: 'property',
  getColumn: function getColumn(columns, property) {
    return (0, _find3.default)(columns, { property: property });
  }
};

exports.default = {
  byIndex: byIndex,
  byProperty: byProperty
};