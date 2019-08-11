'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultStrategy = require('./default-strategy');

var _defaultStrategy2 = _interopRequireDefault(_defaultStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var order = function order(_ref) {
  var getSortingColumns = _ref.getSortingColumns,
      _ref$props = _ref.props,
      props = _ref$props === undefined ? {} : _ref$props,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === undefined ? _defaultStrategy2.default : _ref$strategy;

  if (!getSortingColumns) {
    throw new Error('order - Missing getSortingColumns!');
  }

  return function (value, extra) {
    var sortingColumns = getSortingColumns();
    var sortingColumn = sortingColumns && sortingColumns[extra[strategy.fieldName]] || {};
    var sortingPosition = sortingColumn.position;

    return {}.hasOwnProperty.call(sortingColumn, 'position') ? _react2.default.createElement(
      'span',
      _extends({ className: 'sort-order' }, props),
      sortingPosition + 1
    ) : null;
  };
};

exports.default = order;