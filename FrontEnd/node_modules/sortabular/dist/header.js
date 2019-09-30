'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultStrategy = require('./default-strategy');

var _defaultStrategy2 = _interopRequireDefault(_defaultStrategy);

var _order = require('./order');

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = function header(_ref) {
  var sortable = _ref.sortable,
      getSortingColumns = _ref.getSortingColumns,
      _ref$props = _ref.props,
      props = _ref$props === undefined ? {
    container: {},
    value: {},
    order: {}
  } : _ref$props,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === undefined ? _defaultStrategy2.default : _ref$strategy;

  if (!getSortingColumns) {
    throw new Error('header - Missing getSortingColumns!');
  }

  return function (value, extra) {
    return _react2.default.createElement(
      'div',
      _extends({
        className: 'sort-container'
      }, props.container),
      _react2.default.createElement(
        'span',
        _extends({
          className: 'sort-value'
        }, props.value),
        value
      ),
      (0, _order2.default)({
        getSortingColumns: getSortingColumns,
        props: props.order,
        strategy: strategy
      })(value, extra),
      sortable ? _react2.default.createElement('span', sortable(value, extra)) : null
    );
  };
};

exports.default = header;