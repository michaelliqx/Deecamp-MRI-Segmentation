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

var PatternflyIcon = function PatternflyIcon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['name', 'className']);

  return _react2.default.createElement('span', _extends({ 'aria-hidden': 'true', className: (0, _classnames2.default)('pficon', 'pficon-' + name, className) }, props));
};

PatternflyIcon.propTypes = {
  /** Patternfly Icon font name */
  name: _propTypes2.default.string.isRequired,
  /** additional classes */
  className: _propTypes2.default.string
};

PatternflyIcon.defaultProps = {
  className: ''
};
exports.default = PatternflyIcon;