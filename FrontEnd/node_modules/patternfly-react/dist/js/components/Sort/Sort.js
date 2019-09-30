'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SortTypeSelector = require('./SortTypeSelector');

var _SortTypeSelector2 = _interopRequireDefault(_SortTypeSelector);

var _SortDirectionSelector = require('./SortDirectionSelector');

var _SortDirectionSelector2 = _interopRequireDefault(_SortDirectionSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Sort Component for PatternFly React
 */
var Sort = function Sort(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = (0, _classnames2.default)('form-group', className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};

Sort.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string
};

Sort.defaultProps = {
  children: null,
  className: ''
};

Sort.TypeSelector = _SortTypeSelector2.default;
Sort.DirectionSelector = _SortDirectionSelector2.default;

exports.default = Sort;