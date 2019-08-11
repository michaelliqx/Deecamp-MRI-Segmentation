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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var VerticalNavDividerItem = function VerticalNavDividerItem(_ref) {
  var title = _ref.title,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['title', 'className']);

  var classes = (0, _classnames2.default)('vertical-sub-header-pf', className);

  return _react2.default.createElement(
    'span',
    _extends({ className: classes }, props),
    title
  );
};
VerticalNavDividerItem.propTypes = {
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Title of divider */
  title: _propTypes2.default.string
};
VerticalNavDividerItem.defaultProps = {
  className: '',
  title: ''
};
exports.default = VerticalNavDividerItem;