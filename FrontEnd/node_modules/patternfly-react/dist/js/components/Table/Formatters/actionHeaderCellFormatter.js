'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableHeading = require('../TableHeading');

var _TableHeading2 = _interopRequireDefault(_TableHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionHeaderCellFormatter = function actionHeaderCellFormatter(value, _ref) {
  var column = _ref.column;
  return _react2.default.createElement(
    _TableHeading2.default,
    _extends({ 'aria-label': column.header.label }, column.header.props),
    column.header.label
  );
};
actionHeaderCellFormatter.propTypes = {
  /** cell value */
  value: _propTypes2.default.node,
  /** column definition */
  column: _propTypes2.default.object
};
actionHeaderCellFormatter.defaultProps = {
  value: null,
  column: {}
};
exports.default = actionHeaderCellFormatter;