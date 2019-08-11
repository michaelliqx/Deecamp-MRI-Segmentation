'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SortDirectionSelector = function SortDirectionSelector(_ref) {
  var className = _ref.className,
      isNumeric = _ref.isNumeric,
      isAscending = _ref.isAscending,
      props = _objectWithoutProperties(_ref, ['className', 'isNumeric', 'isAscending']);

  var directionName = void 0;
  if (isNumeric) {
    directionName = isAscending ? 'sort-numeric-asc' : 'sort-numeric-desc';
  } else {
    directionName = isAscending ? 'sort-alpha-asc' : 'sort-alpha-desc';
  }

  return _react2.default.createElement(
    _Button.Button,
    _extends({ bsStyle: 'link', className: className }, props),
    _react2.default.createElement(_Icon.Icon, { type: 'fa', className: 'sort-direction', name: directionName })
  );
};

SortDirectionSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Boolean if current sort type is numeric */
  isNumeric: _propTypes2.default.bool,
  /** Boolean if current sort direction is ascending */
  isAscending: _propTypes2.default.bool
};

SortDirectionSelector.defaultProps = {
  className: '',
  isNumeric: true,
  isAscending: true
};
exports.default = SortDirectionSelector;