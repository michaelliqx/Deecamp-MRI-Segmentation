'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Spinner = function Spinner(_ref) {
  var loading = _ref.loading,
      size = _ref.size,
      inline = _ref.inline,
      children = _ref.children,
      inverse = _ref.inverse,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['loading', 'size', 'inline', 'children', 'inverse', 'className']);

  if (loading) {
    var classes = (0, _classnames2.default)(className, 'spinner', 'spinner-' + size, {
      'spinner-inline': inline,
      'spinner-inverse': inverse
    });

    return _react2.default.createElement('div', _extends({ className: classes }, props));
  }

  return children || null;
};

Spinner.propTypes = {
  loading: _propTypes2.default.bool,
  inline: _propTypes2.default.bool,
  inverse: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['lg', 'md', 'sm', 'xs']),
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

Spinner.defaultProps = {
  loading: false,
  size: 'md',
  inline: false,
  inverse: false,
  children: null,
  className: ''
};

exports.default = Spinner;