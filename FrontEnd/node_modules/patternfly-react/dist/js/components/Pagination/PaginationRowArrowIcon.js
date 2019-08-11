'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * PaginationRowArrowIcon component for Patternfly React
 */
var PaginationRowArrowIcon = function PaginationRowArrowIcon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ['name']);

  var iconName = 'angle-' + name;
  return _react2.default.createElement(_Icon.Icon, { type: 'fa', name: iconName, className: 'i' });
};
PaginationRowArrowIcon.propTypes = {
  /** icon name */
  name: _propTypes2.default.oneOf(['left', 'double-left', 'right', 'double-right']).isRequired
};
exports.default = PaginationRowArrowIcon;