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

var NotificationDrawerPanel = function NotificationDrawerPanel(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'expanded', 'className']);

  var classes = (0, _classnames2.default)('panel panel-default', { expanded: expanded }, className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};
NotificationDrawerPanel.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes2.default.node.isRequired,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** isExpanded bool */
  expanded: _propTypes2.default.bool
};
NotificationDrawerPanel.defaultProps = {
  className: '',
  expanded: false
};

exports.default = NotificationDrawerPanel;