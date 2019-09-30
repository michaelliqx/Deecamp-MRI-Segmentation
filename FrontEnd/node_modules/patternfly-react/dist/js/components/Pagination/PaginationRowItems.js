'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * PaginationRowItems component for Patternfly React
 */
var PaginationRowItems = function PaginationRowItems(_ref) {
  var itemCount = _ref.itemCount,
      itemsStart = _ref.itemsStart,
      itemsEnd = _ref.itemsEnd,
      messagesOf = _ref.messagesOf,
      props = _objectWithoutProperties(_ref, ['itemCount', 'itemsStart', 'itemsEnd', 'messagesOf']);

  return _react2.default.createElement(
    'span',
    props,
    _react2.default.createElement(
      'span',
      { className: 'pagination-pf-items-current' },
      itemsStart,
      '-',
      itemsEnd
    ),
    '\xA0',
    messagesOf,
    '\xA0',
    _react2.default.createElement(
      'span',
      { className: 'pagination-pf-items-total' },
      itemCount
    )
  );
};
PaginationRowItems.propTypes = {
  /** calculated number of rows */
  itemCount: _propTypes2.default.number.isRequired,
  /** calculated items start */
  itemsStart: _propTypes2.default.number.isRequired,
  /** calculated items end */
  itemsEnd: _propTypes2.default.number.isRequired,
  /** messages Of */
  messagesOf: _propTypes2.default.string.isRequired
};
exports.default = PaginationRowItems;