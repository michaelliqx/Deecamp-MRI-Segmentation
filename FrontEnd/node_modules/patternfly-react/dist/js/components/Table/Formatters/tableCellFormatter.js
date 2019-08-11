'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableCell = require('../TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableCellFormatter = function tableCellFormatter(value) {
  return _react2.default.createElement(
    _TableCell2.default,
    null,
    value
  );
};

tableCellFormatter.propTypes = {
  /** cell value */
  value: _propTypes2.default.node // eslint-disable-line react/no-unused-prop-types
};
tableCellFormatter.defaultProps = {
  value: null
};
exports.default = tableCellFormatter;