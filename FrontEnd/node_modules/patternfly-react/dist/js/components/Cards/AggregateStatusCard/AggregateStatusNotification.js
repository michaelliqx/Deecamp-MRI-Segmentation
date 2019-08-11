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

var AggregateStatusNotification = function AggregateStatusNotification(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = (0, _classnames2.default)('card-pf-aggregate-status-notification', className);

  return _react2.default.createElement(
    'span',
    _extends({ className: classes }, props),
    children
  );
};
AggregateStatusNotification.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes2.default.node.isRequired,
  /** Additional element css classes */
  className: _propTypes2.default.string
};
AggregateStatusNotification.defaultProps = {
  className: ''
};

exports.default = AggregateStatusNotification;